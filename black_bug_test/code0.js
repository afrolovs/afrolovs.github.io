gdjs.IntroCode = {};
gdjs.IntroCode.GDNewTiledSpriteObjects1= [];
gdjs.IntroCode.GDNewTiledSpriteObjects2= [];
gdjs.IntroCode.GDNewSpriteObjects1= [];
gdjs.IntroCode.GDNewSpriteObjects2= [];
gdjs.IntroCode.GDskyObjects1= [];
gdjs.IntroCode.GDskyObjects2= [];
gdjs.IntroCode.GDtrainObjects1= [];
gdjs.IntroCode.GDtrainObjects2= [];
gdjs.IntroCode.GDtricoObjects1= [];
gdjs.IntroCode.GDtricoObjects2= [];
gdjs.IntroCode.GDcloudObjects1= [];
gdjs.IntroCode.GDcloudObjects2= [];
gdjs.IntroCode.GDnameObjects1= [];
gdjs.IntroCode.GDnameObjects2= [];
gdjs.IntroCode.GDmountains2Objects1= [];
gdjs.IntroCode.GDmountains2Objects2= [];
gdjs.IntroCode.GDpine_9595darkObjects1= [];
gdjs.IntroCode.GDpine_9595darkObjects2= [];
gdjs.IntroCode.GDpine_9595lightObjects1= [];
gdjs.IntroCode.GDpine_9595lightObjects2= [];
gdjs.IntroCode.GDgroundObjects1= [];
gdjs.IntroCode.GDgroundObjects2= [];
gdjs.IntroCode.GDbush1Objects1= [];
gdjs.IntroCode.GDbush1Objects2= [];
gdjs.IntroCode.GDcam_9595centerObjects1= [];
gdjs.IntroCode.GDcam_9595centerObjects2= [];
gdjs.IntroCode.GDmountain_9595cloudsObjects1= [];
gdjs.IntroCode.GDmountain_9595cloudsObjects2= [];
gdjs.IntroCode.GDNewSprite2Objects1= [];
gdjs.IntroCode.GDNewSprite2Objects2= [];
gdjs.IntroCode.GDstart_9595gameObjects1= [];
gdjs.IntroCode.GDstart_9595gameObjects2= [];
gdjs.IntroCode.GDsound_9595recommendObjects1= [];
gdjs.IntroCode.GDsound_9595recommendObjects2= [];
gdjs.IntroCode.GDfadeObjects1= [];
gdjs.IntroCode.GDfadeObjects2= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.IntroCode.GDcloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("mountains2"), gdjs.IntroCode.GDmountains2Objects1);
gdjs.copyArray(runtimeScene.getObjects("pine_dark"), gdjs.IntroCode.GDpine_9595darkObjects1);
gdjs.copyArray(runtimeScene.getObjects("pine_light"), gdjs.IntroCode.GDpine_9595lightObjects1);
gdjs.copyArray(runtimeScene.getObjects("train"), gdjs.IntroCode.GDtrainObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcloudObjects1[i].setXOffset(gdjs.IntroCode.GDcloudObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 30));
}
}{for(var i = 0, len = gdjs.IntroCode.GDmountains2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDmountains2Objects1[i].setXOffset(gdjs.IntroCode.GDmountains2Objects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 10));
}
}{for(var i = 0, len = gdjs.IntroCode.GDpine_9595lightObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpine_9595lightObjects1[i].setXOffset(gdjs.IntroCode.GDpine_9595lightObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}{for(var i = 0, len = gdjs.IntroCode.GDpine_9595darkObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpine_9595darkObjects1[i].setXOffset(gdjs.IntroCode.GDpine_9595darkObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 30));
}
}{for(var i = 0, len = gdjs.IntroCode.GDtrainObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDtrainObjects1[i].setXOffset(gdjs.IntroCode.GDtrainObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(3000)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20755172);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cam_center"), gdjs.IntroCode.GDcam_9595centerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.IntroCode.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("sound_recommend"), gdjs.IntroCode.GDsound_9595recommendObjects1);
gdjs.copyArray(runtimeScene.getObjects("start_game"), gdjs.IntroCode.GDstart_9595gameObjects1);
gdjs.copyArray(runtimeScene.getObjects("trico"), gdjs.IntroCode.GDtricoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDtricoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDtricoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDsound_9595recommendObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDsound_9595recommendObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDstart_9595gameObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDstart_9595gameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfadeObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.IntroCode.GDcam_9595centerObjects1.length !== 0 ? gdjs.IntroCode.GDcam_9595centerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "zastavka.AAC", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trico"), gdjs.IntroCode.GDtricoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDtricoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDtricoObjects1[i].getBehavior("Opacity").setOpacity((gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - 1) * 100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sound_recommend"), gdjs.IntroCode.GDsound_9595recommendObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDsound_9595recommendObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDsound_9595recommendObjects1[i].getBehavior("Opacity").setOpacity((gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - 2) * 100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cam_center"), gdjs.IntroCode.GDcam_9595centerObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcam_9595centerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcam_9595centerObjects1[i].setY(528);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("start_game"), gdjs.IntroCode.GDstart_9595gameObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDstart_9595gameObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDstart_9595gameObjects1[i].getBehavior("Opacity").setOpacity((gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - 8) * 300);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start_game"), gdjs.IntroCode.GDstart_9595gameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDstart_9595gameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDstart_9595gameObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDstart_9595gameObjects1[k] = gdjs.IntroCode.GDstart_9595gameObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDstart_9595gameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.IntroCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadetoblack", 255, "easeOutQuad", 1, false);
}
}{gdjs.deviceVibration.startVibration(100);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro2", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.IntroCode.GDskyObjects1.length = 0;
gdjs.IntroCode.GDskyObjects2.length = 0;
gdjs.IntroCode.GDtrainObjects1.length = 0;
gdjs.IntroCode.GDtrainObjects2.length = 0;
gdjs.IntroCode.GDtricoObjects1.length = 0;
gdjs.IntroCode.GDtricoObjects2.length = 0;
gdjs.IntroCode.GDcloudObjects1.length = 0;
gdjs.IntroCode.GDcloudObjects2.length = 0;
gdjs.IntroCode.GDnameObjects1.length = 0;
gdjs.IntroCode.GDnameObjects2.length = 0;
gdjs.IntroCode.GDmountains2Objects1.length = 0;
gdjs.IntroCode.GDmountains2Objects2.length = 0;
gdjs.IntroCode.GDpine_9595darkObjects1.length = 0;
gdjs.IntroCode.GDpine_9595darkObjects2.length = 0;
gdjs.IntroCode.GDpine_9595lightObjects1.length = 0;
gdjs.IntroCode.GDpine_9595lightObjects2.length = 0;
gdjs.IntroCode.GDgroundObjects1.length = 0;
gdjs.IntroCode.GDgroundObjects2.length = 0;
gdjs.IntroCode.GDbush1Objects1.length = 0;
gdjs.IntroCode.GDbush1Objects2.length = 0;
gdjs.IntroCode.GDcam_9595centerObjects1.length = 0;
gdjs.IntroCode.GDcam_9595centerObjects2.length = 0;
gdjs.IntroCode.GDmountain_9595cloudsObjects1.length = 0;
gdjs.IntroCode.GDmountain_9595cloudsObjects2.length = 0;
gdjs.IntroCode.GDNewSprite2Objects1.length = 0;
gdjs.IntroCode.GDNewSprite2Objects2.length = 0;
gdjs.IntroCode.GDstart_9595gameObjects1.length = 0;
gdjs.IntroCode.GDstart_9595gameObjects2.length = 0;
gdjs.IntroCode.GDsound_9595recommendObjects1.length = 0;
gdjs.IntroCode.GDsound_9595recommendObjects2.length = 0;
gdjs.IntroCode.GDfadeObjects1.length = 0;
gdjs.IntroCode.GDfadeObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
