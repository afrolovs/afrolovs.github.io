gdjs.BossCode = {};
gdjs.BossCode.GDboss_9595faceObjects1= [];
gdjs.BossCode.GDboss_9595faceObjects2= [];
gdjs.BossCode.GDboss_9595faceObjects3= [];
gdjs.BossCode.GDboss_9595faceObjects4= [];
gdjs.BossCode.GDboss_9595faceObjects5= [];
gdjs.BossCode.GDboss_9595faceObjects6= [];
gdjs.BossCode.GDboss_9595faceObjects7= [];
gdjs.BossCode.GDgradientObjects1= [];
gdjs.BossCode.GDgradientObjects2= [];
gdjs.BossCode.GDgradientObjects3= [];
gdjs.BossCode.GDgradientObjects4= [];
gdjs.BossCode.GDgradientObjects5= [];
gdjs.BossCode.GDgradientObjects6= [];
gdjs.BossCode.GDgradientObjects7= [];
gdjs.BossCode.GDna_9595legacyObjects1= [];
gdjs.BossCode.GDna_9595legacyObjects2= [];
gdjs.BossCode.GDna_9595legacyObjects3= [];
gdjs.BossCode.GDna_9595legacyObjects4= [];
gdjs.BossCode.GDna_9595legacyObjects5= [];
gdjs.BossCode.GDna_9595legacyObjects6= [];
gdjs.BossCode.GDna_9595legacyObjects7= [];
gdjs.BossCode.GDbagovObjects1= [];
gdjs.BossCode.GDbagovObjects2= [];
gdjs.BossCode.GDbagovObjects3= [];
gdjs.BossCode.GDbagovObjects4= [];
gdjs.BossCode.GDbagovObjects5= [];
gdjs.BossCode.GDbagovObjects6= [];
gdjs.BossCode.GDbagovObjects7= [];
gdjs.BossCode.GDnetObjects1= [];
gdjs.BossCode.GDnetObjects2= [];
gdjs.BossCode.GDnetObjects3= [];
gdjs.BossCode.GDnetObjects4= [];
gdjs.BossCode.GDnetObjects5= [];
gdjs.BossCode.GDnetObjects6= [];
gdjs.BossCode.GDnetObjects7= [];
gdjs.BossCode.GDDialogObjects1= [];
gdjs.BossCode.GDDialogObjects2= [];
gdjs.BossCode.GDDialogObjects3= [];
gdjs.BossCode.GDDialogObjects4= [];
gdjs.BossCode.GDDialogObjects5= [];
gdjs.BossCode.GDDialogObjects6= [];
gdjs.BossCode.GDDialogObjects7= [];
gdjs.BossCode.GDfadeObjects1= [];
gdjs.BossCode.GDfadeObjects2= [];
gdjs.BossCode.GDfadeObjects3= [];
gdjs.BossCode.GDfadeObjects4= [];
gdjs.BossCode.GDfadeObjects5= [];
gdjs.BossCode.GDfadeObjects6= [];
gdjs.BossCode.GDfadeObjects7= [];


gdjs.BossCode.eventsList0 = function(runtimeScene) {

};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDDialogObjects2Objects = Hashtable.newFrom({"Dialog": gdjs.BossCode.GDDialogObjects2});
gdjs.BossCode.asyncCallback21201412 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BossGame", false);
}}
gdjs.BossCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.BossCode.asyncCallback21201412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BossCode.asyncCallback21200804 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "laugh");
}
{ //Subevents
gdjs.BossCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BossCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.BossCode.asyncCallback21200804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BossCode.asyncCallback21199956 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("boss_face"), gdjs.BossCode.GDboss_9595faceObjects5);

gdjs.copyArray(asyncObjectsList.getObjects("net"), gdjs.BossCode.GDnetObjects5);

{for(var i = 0, len = gdjs.BossCode.GDnetObjects5.length ;i < len;++i) {
    gdjs.BossCode.GDnetObjects5[i].hide(false);
}
}{for(var i = 0, len = gdjs.BossCode.GDnetObjects5.length ;i < len;++i) {
    gdjs.BossCode.GDnetObjects5[i].getBehavior("Tween").addObjectScaleTween3("text_scale", 0.8, "bounce", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.BossCode.GDboss_9595faceObjects5.length ;i < len;++i) {
    gdjs.BossCode.GDboss_9595faceObjects5[i].getBehavior("Tween").addObjectScaleTween3("boss_scale", 0.9, "bounce", 0.3, false, true);
}
}
{ //Subevents
gdjs.BossCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BossCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.BossCode.GDboss_9595faceObjects4) asyncObjectsList.addObject("boss_face", obj);
/* Don't save net as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.BossCode.asyncCallback21199956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BossCode.asyncCallback21198852 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("bagov"), gdjs.BossCode.GDbagovObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("boss_face"), gdjs.BossCode.GDboss_9595faceObjects4);

{for(var i = 0, len = gdjs.BossCode.GDbagovObjects4.length ;i < len;++i) {
    gdjs.BossCode.GDbagovObjects4[i].hide(false);
}
}{for(var i = 0, len = gdjs.BossCode.GDbagovObjects4.length ;i < len;++i) {
    gdjs.BossCode.GDbagovObjects4[i].getBehavior("Tween").addObjectScaleTween3("text_scale", 0.8, "bounce", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.BossCode.GDboss_9595faceObjects4.length ;i < len;++i) {
    gdjs.BossCode.GDboss_9595faceObjects4[i].getBehavior("Tween").addObjectScaleTween3("boss_scale", 0.8, "bounce", 0.3, false, true);
}
}
{ //Subevents
gdjs.BossCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BossCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save bagov as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.BossCode.GDboss_9595faceObjects3) asyncObjectsList.addObject("boss_face", obj);
/* Don't save net as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.BossCode.asyncCallback21198852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BossCode.asyncCallback21198236 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Dialog"), gdjs.BossCode.GDDialogObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("boss_face"), gdjs.BossCode.GDboss_9595faceObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("na_legacy"), gdjs.BossCode.GDna_9595legacyObjects3);

{for(var i = 0, len = gdjs.BossCode.GDDialogObjects3.length ;i < len;++i) {
    gdjs.BossCode.GDDialogObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.BossCode.GDna_9595legacyObjects3.length ;i < len;++i) {
    gdjs.BossCode.GDna_9595legacyObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.BossCode.GDboss_9595faceObjects3.length ;i < len;++i) {
    gdjs.BossCode.GDboss_9595faceObjects3[i].getBehavior("Tween").addObjectScaleTween3("boss_scale", 0.7, "bounce", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.BossCode.GDna_9595legacyObjects3.length ;i < len;++i) {
    gdjs.BossCode.GDna_9595legacyObjects3[i].getBehavior("Tween").addObjectScaleTween3("text_scale", 0.8, "bounce", 0.3, false, true);
}
}
{ //Subevents
gdjs.BossCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BossCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.BossCode.GDDialogObjects2) asyncObjectsList.addObject("Dialog", obj);
/* Don't save bagov as it will be provided by the parent asyncObjectsList. */
/* Don't save boss_face as it will be provided by the parent asyncObjectsList. */
/* Don't save na_legacy as it will be provided by the parent asyncObjectsList. */
/* Don't save net as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.BossCode.asyncCallback21198236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BossCode.asyncCallback21197620 = function (runtimeScene, asyncObjectsList) {
gdjs.BossCode.GDDialogObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDDialogObjects2Objects, 21, 729, "");
}
{ //Subevents
gdjs.BossCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BossCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.BossCode.GDbagovObjects1) asyncObjectsList.addObject("bagov", obj);
for (const obj of gdjs.BossCode.GDboss_9595faceObjects1) asyncObjectsList.addObject("boss_face", obj);
for (const obj of gdjs.BossCode.GDna_9595legacyObjects1) asyncObjectsList.addObject("na_legacy", obj);
for (const obj of gdjs.BossCode.GDnetObjects1) asyncObjectsList.addObject("net", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BossCode.asyncCallback21197620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BossCode.asyncCallback21204788 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "head_shake");
}}
gdjs.BossCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.BossCode.asyncCallback21204788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BossCode.asyncCallback21204252 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("boss_face"), gdjs.BossCode.GDboss_9595faceObjects2);

{for(var i = 0, len = gdjs.BossCode.GDboss_9595faceObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDboss_9595faceObjects2[i].getBehavior("Tween").addObjectAngleTween2("max_left", -(4), "easeInOutQuad", 2, false);
}
}
{ //Subevents
gdjs.BossCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BossCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.BossCode.GDboss_9595faceObjects1) asyncObjectsList.addObject("boss_face", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.BossCode.asyncCallback21204252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BossCode.eventsList9 = function(runtimeScene) {

{


gdjs.BossCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21195364);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21196140);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bagov"), gdjs.BossCode.GDbagovObjects1);
gdjs.copyArray(runtimeScene.getObjects("boss_face"), gdjs.BossCode.GDboss_9595faceObjects1);
gdjs.copyArray(runtimeScene.getObjects("gradient"), gdjs.BossCode.GDgradientObjects1);
gdjs.copyArray(runtimeScene.getObjects("na_legacy"), gdjs.BossCode.GDna_9595legacyObjects1);
gdjs.copyArray(runtimeScene.getObjects("net"), gdjs.BossCode.GDnetObjects1);
{for(var i = 0, len = gdjs.BossCode.GDna_9595legacyObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDna_9595legacyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.BossCode.GDbagovObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDbagovObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.BossCode.GDnetObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDnetObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "head_shake");
}{for(var i = 0, len = gdjs.BossCode.GDgradientObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDgradientObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "boss2.AAC", 0, false, 100, 1);
}{for(var i = 0, len = gdjs.BossCode.GDgradientObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDgradientObjects1[i].getBehavior("Tween").addObjectOpacityTween2("bg_opacity", 255, "easeOutQuad", 0.5, false);
}
}{for(var i = 0, len = gdjs.BossCode.GDboss_9595faceObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDboss_9595faceObjects1[i].getBehavior("Tween").addObjectPositionTween2("max_in", 179, 382, "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.BossCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "laugh") > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21201876);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boss_face"), gdjs.BossCode.GDboss_9595faceObjects1);
{gdjs.evtsExt__CameraShake__SetDefaultTranslationAmplitude.func(runtimeScene, 0.5, 70, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 5, 0.5, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.tween.tweenCameraZoom2(runtimeScene, "boss_scale", 4, "", "easeOutQuad", 2);
}{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "boss_scale2", (( gdjs.BossCode.GDboss_9595faceObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDboss_9595faceObjects1[0].getAABBCenterX()), (( gdjs.BossCode.GDboss_9595faceObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDboss_9595faceObjects1[0].getAABBCenterY()), "", "easeOutQuad", 2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "laugh");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "head_shake") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21204108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boss_face"), gdjs.BossCode.GDboss_9595faceObjects1);
{for(var i = 0, len = gdjs.BossCode.GDboss_9595faceObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDboss_9595faceObjects1[i].getBehavior("Tween").addObjectAngleTween2("max_left", 4, "easeInOutQuad", 2, false);
}
}
{ //Subevents
gdjs.BossCode.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs.BossCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BossCode.GDboss_9595faceObjects1.length = 0;
gdjs.BossCode.GDboss_9595faceObjects2.length = 0;
gdjs.BossCode.GDboss_9595faceObjects3.length = 0;
gdjs.BossCode.GDboss_9595faceObjects4.length = 0;
gdjs.BossCode.GDboss_9595faceObjects5.length = 0;
gdjs.BossCode.GDboss_9595faceObjects6.length = 0;
gdjs.BossCode.GDboss_9595faceObjects7.length = 0;
gdjs.BossCode.GDgradientObjects1.length = 0;
gdjs.BossCode.GDgradientObjects2.length = 0;
gdjs.BossCode.GDgradientObjects3.length = 0;
gdjs.BossCode.GDgradientObjects4.length = 0;
gdjs.BossCode.GDgradientObjects5.length = 0;
gdjs.BossCode.GDgradientObjects6.length = 0;
gdjs.BossCode.GDgradientObjects7.length = 0;
gdjs.BossCode.GDna_9595legacyObjects1.length = 0;
gdjs.BossCode.GDna_9595legacyObjects2.length = 0;
gdjs.BossCode.GDna_9595legacyObjects3.length = 0;
gdjs.BossCode.GDna_9595legacyObjects4.length = 0;
gdjs.BossCode.GDna_9595legacyObjects5.length = 0;
gdjs.BossCode.GDna_9595legacyObjects6.length = 0;
gdjs.BossCode.GDna_9595legacyObjects7.length = 0;
gdjs.BossCode.GDbagovObjects1.length = 0;
gdjs.BossCode.GDbagovObjects2.length = 0;
gdjs.BossCode.GDbagovObjects3.length = 0;
gdjs.BossCode.GDbagovObjects4.length = 0;
gdjs.BossCode.GDbagovObjects5.length = 0;
gdjs.BossCode.GDbagovObjects6.length = 0;
gdjs.BossCode.GDbagovObjects7.length = 0;
gdjs.BossCode.GDnetObjects1.length = 0;
gdjs.BossCode.GDnetObjects2.length = 0;
gdjs.BossCode.GDnetObjects3.length = 0;
gdjs.BossCode.GDnetObjects4.length = 0;
gdjs.BossCode.GDnetObjects5.length = 0;
gdjs.BossCode.GDnetObjects6.length = 0;
gdjs.BossCode.GDnetObjects7.length = 0;
gdjs.BossCode.GDDialogObjects1.length = 0;
gdjs.BossCode.GDDialogObjects2.length = 0;
gdjs.BossCode.GDDialogObjects3.length = 0;
gdjs.BossCode.GDDialogObjects4.length = 0;
gdjs.BossCode.GDDialogObjects5.length = 0;
gdjs.BossCode.GDDialogObjects6.length = 0;
gdjs.BossCode.GDDialogObjects7.length = 0;
gdjs.BossCode.GDfadeObjects1.length = 0;
gdjs.BossCode.GDfadeObjects2.length = 0;
gdjs.BossCode.GDfadeObjects3.length = 0;
gdjs.BossCode.GDfadeObjects4.length = 0;
gdjs.BossCode.GDfadeObjects5.length = 0;
gdjs.BossCode.GDfadeObjects6.length = 0;
gdjs.BossCode.GDfadeObjects7.length = 0;

gdjs.BossCode.eventsList9(runtimeScene);

return;

}

gdjs['BossCode'] = gdjs.BossCode;
