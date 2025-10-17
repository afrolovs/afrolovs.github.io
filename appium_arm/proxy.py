"""
Android AVD Manager – управление сессиями, Appium и эмуляторами
Статья на хабре: https://habr.com/ru/companies/okko/articles/956980/

Требования:
- Python 3.10+
- Зависимости:
  pip install "uvicorn[standard]" fastapi

Почему uvicorn[standard]:
  uvicorn[standard] установит более быстрые библиотеки httptools / uvloop, которые
  помогут держать нашему прокси более высокую нагрузку и работать быстрее

Запуск:
  python proxy.py
"""

import asyncio
import subprocess
from collections import deque
from contextlib import asynccontextmanager

import aiohttp
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse

# Конфигурация
CONFIG = {"HOST": "127.0.0.1", "MAX_SESSIONS": 10}

# Глобальные переменные для управления портами и сессиями
avd_ports = deque(list(range(5554, 5586, 2)))
appium_ports = deque(list(range(4723, 4723 + CONFIG["MAX_SESSIONS"])))
sessions = {}  # session_id -> {avd_port, appium_port, ...}
ports_lock = asyncio.Lock()


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Управление жизненным циклом приложения
    Не указана в слайдах, но добавлена для очистки процессов при запуске/завершении
    """
    # Очистка запущенных в прошлый раз avd/appium при запуске
    subprocess.run(["pkill", "-9", "-f", "qemu"], capture_output=True)
    subprocess.run(["pkill", "-9", "-f", "appium"], capture_output=True)

    yield

    # Очистка всех сессий при завершении
    for session_id in list(sessions.keys()):
        await cleanup_session(session_id)


app = FastAPI(lifespan=lifespan)


def start_avd(avd_name, port):
    """
    Слайд 13: Запуск Android эмулятора
    Использует чётные порты (5554, 5556, ...) для эмуляторов
    """
    command = [
        "emulator",
        "-avd",
        avd_name,
        "-port",
        str(port),
        "-read-only",
        "-no-audio",
        # "-no-window",  # раскомментировать при запуске в PROD, чтобы не насиловать GPU
    ]
    return subprocess.Popen(
        command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
    )


def start_appium(appium_port, avd_port):
    """
    Слайд 4: Запуск Appium сервера
    Связывает Appium с эмулятором через UDID (emulator-{port})
    """
    udid = f"emulator-{avd_port}"

    command = [
        "appium",
        "--port",
        str(appium_port),
        "--default-capabilities",
        f'{{"udid": "{udid}"}}',
        "--allow-cors",
    ]
    return subprocess.Popen(
        command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
    )


async def wait_for_appium(appium_port, timeout=30):
    """
    Ожидание готовности Appium сервера
    Не указана в слайдах, но добавлена для гарантии что Appium запустился
    перед созданием сессии
    """
    for _ in range(timeout):
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(
                    f"http://{CONFIG['HOST']}:{appium_port}/wd/hub/status"
                ) as response:
                    if response.status == 200:
                        return True
        except:
            pass
        await asyncio.sleep(1)
    return False


async def cleanup_session(session_id):
    """
    Очистка ресурсов сессии
    Не указана в слайдах, но добавлена для корректного освобождения
    портов и остановки процессов
    """
    if session_id in sessions:
        session = sessions[session_id]
        session["avd_process"].terminate()
        session["appium_process"].terminate()

        # Возвращаем порты в очередь (Слайд 6: Использование Lock)
        async with ports_lock:
            avd_ports.append(session["avd_port"])
            appium_ports.append(session["appium_port"])

        del sessions[session_id]


@app.post("/wd/hub/session")
async def create_session(request: Request):
    """
    Слайд 5: Создание новой сессии
    Получает AVD имя из browserVersion, запускает эмулятор и Appium,
    создаёт сессию через Appium и сохраняет её данные
    """
    try:
        json_data = await request.json()
        avd_name = (
            json_data.get("capabilities", {})
            .get("alwaysMatch", {})
            .get("browserVersion")
        )

        if not avd_name:
            raise HTTPException(
                status_code=400, detail="AVD name (browserVersion) is required"
            )

        # Получаем порты с блокировкой (Слайд 6: Защита от гонок данных)
        async with ports_lock:
            if not avd_ports or not appium_ports:
                raise HTTPException(status_code=503, detail="No available ports")
            avd_port = avd_ports.popleft()
            appium_port = appium_ports.popleft()

        try:
            # Запускаем AVD и Appium (Слайды 3 и 4)
            avd_process = start_avd(avd_name, avd_port)
            appium_process = start_appium(appium_port, avd_port)

            # Ждём готовности Appium
            if not await wait_for_appium(appium_port):
                raise HTTPException(status_code=500, detail="Appium failed to start")

            # Создаём сессию в Appium
            async with aiohttp.ClientSession() as session:
                response = await session.post(
                    f"http://{CONFIG['HOST']}:{appium_port}/wd/hub/session",
                    json=json_data,
                )
                response_data = await response.json()

                if response.status != 200:
                    raise HTTPException(
                        status_code=response.status, detail=response_data
                    )

                session_id = response_data.get("value", {}).get("sessionId")
                if not session_id:
                    raise HTTPException(
                        status_code=500, detail="No session ID in response"
                    )

                # Сохраняем информацию о сессии
                sessions[session_id] = {
                    "avd_port": avd_port,
                    "appium_port": appium_port,
                    "avd_process": avd_process,
                    "appium_process": appium_process,
                    "avd_name": avd_name,
                }

                return JSONResponse(content=response_data, status_code=response.status)

        except Exception as e:
            # В случае ошибки - очищаем ресурсы
            if "avd_process" in locals():
                avd_process.terminate()
            if "appium_process" in locals():
                appium_process.terminate()
            async with ports_lock:
                avd_ports.append(avd_port)
                appium_ports.append(appium_port)
            raise e

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.api_route(
    "/wd/hub/session/{session_id}/{path:path}", methods=["GET", "POST", "PUT", "DELETE"]
)
async def proxy_request(request: Request, session_id: str, path: str):
    """
    Слайд 1: Проксирование запросов к существующей сессии
    Перенаправляет все запросы к конкретной сессии в соответствующий Appium сервер
    """
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail=f"Session {session_id} not found")

    session = sessions[session_id]
    port = session["appium_port"]

    try:
        async with aiohttp.ClientSession() as client:
            method = getattr(client, request.method.lower())
            url = f"http://{CONFIG['HOST']}:{port}/wd/hub/session/{session_id}/{path}"

            response = await method(
                url, data=await request.body(), headers=dict(request.headers)
            )

            response_data = await response.json()
            return JSONResponse(content=response_data, status_code=response.status)

    except aiohttp.ClientError as e:
        raise HTTPException(
            status_code=502, detail=f"Appium connection error: {str(e)}"
        )


@app.delete("/wd/hub/session/{session_id}")
async def delete_session(session_id: str):
    """
    Удаление сессии
    Не указана в слайдах, но добавлена для корректного завершения
    работы с эмулятором и Appium
    """
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail=f"Session {session_id} not found")

    await cleanup_session(session_id)
    return JSONResponse(content={"value": None}, status_code=200)


@app.get("/status")
async def get_status():
    """
    Статус прокси сервера
    Не указана в слайдах, но добавлена для мониторинга состояния
    сервера и отладки
    """
    return JSONResponse(
        content={
            "active_sessions": len(sessions),
            "available_avd_ports": len(avd_ports),
            "available_appium_ports": len(appium_ports),
            "sessions": list(sessions.keys()),
        }
    )


if __name__ == "__main__":
    import uvicorn

    # Использование uvloop для улучшения производительности asyncio
    uvicorn.run(app, host="0.0.0.0", port=4444, loop="uvloop", http="httptools")
