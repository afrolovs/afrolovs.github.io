# Положить скрипт в after_init.sh

# Положить подготовленные CA-сертификаты в папку /scripts/certs - в шару эмулятора (!)

# Не забыть подготовить имена сертификатов:
# $(openssl x509 -subject_hash -in mycert.pem | head -1)

# Выполнить скрипт через:
# docker exec $(docker ps -lq) -lt bash /scripts/certs/

while [ "$(adb shell getprop sys.boot_completed | tr -d '\r')" != "1" ]; do sleep 1; done
echo "[AVD SETUP]: disabling system SSL-verification to inject certs..."

adb root
adb shell avbctl disable-verification
adb reboot
echo "[AVD SETUP]: remounting /system to inject certs..."
while [ "$(adb shell getprop sys.boot_completed | tr -d '\r')" != "1" ]; do sleep 1; done
adb root
adb remount

for file in /scripts/certs/*; do
    adb push $file /system/etc/security/cacerts
    adb shell chmod 664 /system/etc/security/cacerts/$(basename "$file")
done
adb reboot
while [ "$(adb shell getprop sys.boot_completed | tr -d '\r')" != "1" ]; do sleep 1; done