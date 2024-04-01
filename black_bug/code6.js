gdjs.YouWinCode = {};
gdjs.YouWinCode.GDdonateObjects1= [];
gdjs.YouWinCode.GDdonateObjects2= [];
gdjs.YouWinCode.GDdonateObjects3= [];
gdjs.YouWinCode.GDdonateObjects4= [];
gdjs.YouWinCode.GDNewTextObjects1= [];
gdjs.YouWinCode.GDNewTextObjects2= [];
gdjs.YouWinCode.GDNewTextObjects3= [];
gdjs.YouWinCode.GDNewTextObjects4= [];
gdjs.YouWinCode.GDmountain_9595cloudsObjects1= [];
gdjs.YouWinCode.GDmountain_9595cloudsObjects2= [];
gdjs.YouWinCode.GDmountain_9595cloudsObjects3= [];
gdjs.YouWinCode.GDmountain_9595cloudsObjects4= [];
gdjs.YouWinCode.GDmountains2Objects1= [];
gdjs.YouWinCode.GDmountains2Objects2= [];
gdjs.YouWinCode.GDmountains2Objects3= [];
gdjs.YouWinCode.GDmountains2Objects4= [];
gdjs.YouWinCode.GDpine_9595lightObjects1= [];
gdjs.YouWinCode.GDpine_9595lightObjects2= [];
gdjs.YouWinCode.GDpine_9595lightObjects3= [];
gdjs.YouWinCode.GDpine_9595lightObjects4= [];
gdjs.YouWinCode.GDpine_9595darkObjects1= [];
gdjs.YouWinCode.GDpine_9595darkObjects2= [];
gdjs.YouWinCode.GDpine_9595darkObjects3= [];
gdjs.YouWinCode.GDpine_9595darkObjects4= [];
gdjs.YouWinCode.GDtrainObjects1= [];
gdjs.YouWinCode.GDtrainObjects2= [];
gdjs.YouWinCode.GDtrainObjects3= [];
gdjs.YouWinCode.GDtrainObjects4= [];
gdjs.YouWinCode.GDNewLightObjects1= [];
gdjs.YouWinCode.GDNewLightObjects2= [];
gdjs.YouWinCode.GDNewLightObjects3= [];
gdjs.YouWinCode.GDNewLightObjects4= [];
gdjs.YouWinCode.GDscore_9595titleObjects1= [];
gdjs.YouWinCode.GDscore_9595titleObjects2= [];
gdjs.YouWinCode.GDscore_9595titleObjects3= [];
gdjs.YouWinCode.GDscore_9595titleObjects4= [];
gdjs.YouWinCode.GDscore_9595numObjects1= [];
gdjs.YouWinCode.GDscore_9595numObjects2= [];
gdjs.YouWinCode.GDscore_9595numObjects3= [];
gdjs.YouWinCode.GDscore_9595numObjects4= [];
gdjs.YouWinCode.GDscore_9595footerObjects1= [];
gdjs.YouWinCode.GDscore_9595footerObjects2= [];
gdjs.YouWinCode.GDscore_9595footerObjects3= [];
gdjs.YouWinCode.GDscore_9595footerObjects4= [];
gdjs.YouWinCode.GDdebugObjects1= [];
gdjs.YouWinCode.GDdebugObjects2= [];
gdjs.YouWinCode.GDdebugObjects3= [];
gdjs.YouWinCode.GDdebugObjects4= [];
gdjs.YouWinCode.GDDialogObjects1= [];
gdjs.YouWinCode.GDDialogObjects2= [];
gdjs.YouWinCode.GDDialogObjects3= [];
gdjs.YouWinCode.GDDialogObjects4= [];
gdjs.YouWinCode.GDfadeObjects1= [];
gdjs.YouWinCode.GDfadeObjects2= [];
gdjs.YouWinCode.GDfadeObjects3= [];
gdjs.YouWinCode.GDfadeObjects4= [];


gdjs.YouWinCode.asyncCallback21582676 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.tween.tweenVariableNumber3(runtimeScene, "hue0", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0), 255, "easeOutQuad", 2);
}{gdjs.evtTools.tween.tweenVariableNumber3(runtimeScene, "hue1", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1), 255, "easeOutQuad", 2);
}{gdjs.evtTools.tween.tweenVariableNumber3(runtimeScene, "hue2", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(2), 255, "easeOutQuad", 2);
}}
gdjs.YouWinCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.YouWinCode.asyncCallback21582676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.YouWinCode.asyncCallback21582748 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "congrats.aac", true, 75, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 0, 70, 1);
}
{ //Subevents
gdjs.YouWinCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.YouWinCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.YouWinCode.asyncCallback21582748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDscore_95959595titleObjects3Objects = Hashtable.newFrom({"score_title": gdjs.YouWinCode.GDscore_9595titleObjects3});
gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDscore_95959595numObjects4Objects = Hashtable.newFrom({"score_num": gdjs.YouWinCode.GDscore_9595numObjects4});
gdjs.YouWinCode.asyncCallback21584732 = function (runtimeScene, asyncObjectsList) {
gdjs.YouWinCode.GDscore_9595numObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDscore_95959595numObjects4Objects, 205, 242, "");
}{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595numObjects4.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595numObjects4[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595numObjects4.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595numObjects4[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}}
gdjs.YouWinCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.YouWinCode.asyncCallback21584732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.YouWinCode.asyncCallback21585060 = function (runtimeScene, asyncObjectsList) {
gdjs.YouWinCode.GDscore_9595titleObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDscore_95959595titleObjects3Objects, 145, 200, "");
}
{ //Subevents
gdjs.YouWinCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.YouWinCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs.YouWinCode.asyncCallback21585060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDscore_95959595footerObjects1Objects = Hashtable.newFrom({"score_footer": gdjs.YouWinCode.GDscore_9595footerObjects1});
gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDDialogObjects1Objects = Hashtable.newFrom({"Dialog": gdjs.YouWinCode.GDDialogObjects1});
gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDdonateObjects3Objects = Hashtable.newFrom({"donate": gdjs.YouWinCode.GDdonateObjects3});
gdjs.YouWinCode.asyncCallback21593852 = function (runtimeScene, asyncObjectsList) {
gdjs.YouWinCode.GDdonateObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDdonateObjects3Objects, 113, 675, "");
}{for(var i = 0, len = gdjs.YouWinCode.GDdonateObjects3.length ;i < len;++i) {
    gdjs.YouWinCode.GDdonateObjects3[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDdonateObjects3.length ;i < len;++i) {
    gdjs.YouWinCode.GDdonateObjects3[i].getBehavior("Resizable").setWidth(266);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDdonateObjects3.length ;i < len;++i) {
    gdjs.YouWinCode.GDdonateObjects3[i].getBehavior("Tween").addObjectOpacityTween2("donate", 255, "easeInOutQuad", 1.5, false);
}
}}
gdjs.YouWinCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.YouWinCode.asyncCallback21593852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.YouWinCode.asyncCallback21592364 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Dialog"), gdjs.YouWinCode.GDDialogObjects2);

{for(var i = 0, len = gdjs.YouWinCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDDialogObjects2[i].setCharacterSize(28);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDDialogObjects2[i].setX(40);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDDialogObjects2[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDDialogObjects2[i].setWrappingWidth(440);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDDialogObjects2[i].getBehavior("Text").setText("Если хочешь продолжения, \n    поддержи автора, \n   нажав на кнопочку:");
}
}
{ //Subevents
gdjs.YouWinCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.YouWinCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.YouWinCode.GDDialogObjects1) asyncObjectsList.addObject("Dialog", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.YouWinCode.asyncCallback21592364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.YouWinCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 10) == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.YouWinCode.GDscore_9595footerObjects1, gdjs.YouWinCode.GDscore_9595footerObjects2);

{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595footerObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595footerObjects2[i].setX(gdjs.YouWinCode.GDscore_9595footerObjects2[i].getX() + (16));
}
}{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595footerObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595footerObjects2[i].getBehavior("Text").setText("баг");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.common.mod(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 10) == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.common.mod(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 10) == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.common.mod(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 10) == 4);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 20;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.YouWinCode.GDscore_9595footerObjects1, gdjs.YouWinCode.GDscore_9595footerObjects2);

{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595footerObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595footerObjects2[i].setX(gdjs.YouWinCode.GDscore_9595footerObjects2[i].getX() + (10));
}
}{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595footerObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595footerObjects2[i].getBehavior("Text").setText("багa");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21592132);
}
if (isConditionTrue_0) {
gdjs.YouWinCode.GDDialogObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDDialogObjects1Objects, 126, 417, "");
}
{ //Subevents
gdjs.YouWinCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.YouWinCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21584900);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.YouWinCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "counter") >= 0.05;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score_num"), gdjs.YouWinCode.GDscore_9595numObjects2);
{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595numObjects2.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595numObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() + 1));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "e3e025ff0972f44.aac", false, 15, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.YouWinCode.GDscore_9595footerObjects1.length = 0;

{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "counter");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.YouWinCode.mapOfGDgdjs_9546YouWinCode_9546GDscore_95959595footerObjects1Objects, 195, 320, "");
}{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595footerObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595footerObjects1[i].setTextAlignment("center");
}
}
{ //Subevents
gdjs.YouWinCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.YouWinCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("debug"), gdjs.YouWinCode.GDdebugObjects1);
gdjs.copyArray(runtimeScene.getObjects("mountains2"), gdjs.YouWinCode.GDmountains2Objects1);
gdjs.copyArray(runtimeScene.getObjects("pine_dark"), gdjs.YouWinCode.GDpine_9595darkObjects1);
gdjs.copyArray(runtimeScene.getObjects("pine_light"), gdjs.YouWinCode.GDpine_9595lightObjects1);
gdjs.copyArray(runtimeScene.getObjects("train"), gdjs.YouWinCode.GDtrainObjects1);
{gdjs.evtTools.camera.setLayerAmbientLightColor(runtimeScene, "Lighting", gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber()) + ";" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).getAsNumber()) + ";" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(2).getAsNumber()));
}{for(var i = 0, len = gdjs.YouWinCode.GDmountains2Objects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDmountains2Objects1[i].setXOffset(gdjs.YouWinCode.GDmountains2Objects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 10));
}
}{for(var i = 0, len = gdjs.YouWinCode.GDpine_9595lightObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDpine_9595lightObjects1[i].setXOffset(gdjs.YouWinCode.GDpine_9595lightObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}{for(var i = 0, len = gdjs.YouWinCode.GDpine_9595darkObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDpine_9595darkObjects1[i].setXOffset(gdjs.YouWinCode.GDpine_9595darkObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 30));
}
}{for(var i = 0, len = gdjs.YouWinCode.GDtrainObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDtrainObjects1[i].setXOffset(gdjs.YouWinCode.GDtrainObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(500)));
}
}{for(var i = 0, len = gdjs.YouWinCode.GDdebugObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDdebugObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.mod(52, 10)));
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21581844);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.YouWinCode.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("donate"), gdjs.YouWinCode.GDdonateObjects1);
gdjs.copyArray(runtimeScene.getObjects("score_footer"), gdjs.YouWinCode.GDscore_9595footerObjects1);
gdjs.copyArray(runtimeScene.getObjects("score_num"), gdjs.YouWinCode.GDscore_9595numObjects1);
gdjs.copyArray(runtimeScene.getObjects("score_title"), gdjs.YouWinCode.GDscore_9595titleObjects1);
{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595numObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595numObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595footerObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595footerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDscore_9595titleObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDscore_9595titleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDDialogObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDDialogObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.YouWinCode.GDdonateObjects1.length ;i < len;++i) {
    gdjs.YouWinCode.GDdonateObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 0, 0, 1);
}
{ //Subevents
gdjs.YouWinCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.YouWinCode.eventsList7(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("donate"), gdjs.YouWinCode.GDdonateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouWinCode.GDdonateObjects1.length;i<l;++i) {
    if ( gdjs.YouWinCode.GDdonateObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.YouWinCode.GDdonateObjects1[k] = gdjs.YouWinCode.GDdonateObjects1[i];
        ++k;
    }
}
gdjs.YouWinCode.GDdonateObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.tinkoff.ru/cf/AUd78E6MKoi", runtimeScene);
}}

}


};

gdjs.YouWinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.YouWinCode.GDdonateObjects1.length = 0;
gdjs.YouWinCode.GDdonateObjects2.length = 0;
gdjs.YouWinCode.GDdonateObjects3.length = 0;
gdjs.YouWinCode.GDdonateObjects4.length = 0;
gdjs.YouWinCode.GDNewTextObjects1.length = 0;
gdjs.YouWinCode.GDNewTextObjects2.length = 0;
gdjs.YouWinCode.GDNewTextObjects3.length = 0;
gdjs.YouWinCode.GDNewTextObjects4.length = 0;
gdjs.YouWinCode.GDmountain_9595cloudsObjects1.length = 0;
gdjs.YouWinCode.GDmountain_9595cloudsObjects2.length = 0;
gdjs.YouWinCode.GDmountain_9595cloudsObjects3.length = 0;
gdjs.YouWinCode.GDmountain_9595cloudsObjects4.length = 0;
gdjs.YouWinCode.GDmountains2Objects1.length = 0;
gdjs.YouWinCode.GDmountains2Objects2.length = 0;
gdjs.YouWinCode.GDmountains2Objects3.length = 0;
gdjs.YouWinCode.GDmountains2Objects4.length = 0;
gdjs.YouWinCode.GDpine_9595lightObjects1.length = 0;
gdjs.YouWinCode.GDpine_9595lightObjects2.length = 0;
gdjs.YouWinCode.GDpine_9595lightObjects3.length = 0;
gdjs.YouWinCode.GDpine_9595lightObjects4.length = 0;
gdjs.YouWinCode.GDpine_9595darkObjects1.length = 0;
gdjs.YouWinCode.GDpine_9595darkObjects2.length = 0;
gdjs.YouWinCode.GDpine_9595darkObjects3.length = 0;
gdjs.YouWinCode.GDpine_9595darkObjects4.length = 0;
gdjs.YouWinCode.GDtrainObjects1.length = 0;
gdjs.YouWinCode.GDtrainObjects2.length = 0;
gdjs.YouWinCode.GDtrainObjects3.length = 0;
gdjs.YouWinCode.GDtrainObjects4.length = 0;
gdjs.YouWinCode.GDNewLightObjects1.length = 0;
gdjs.YouWinCode.GDNewLightObjects2.length = 0;
gdjs.YouWinCode.GDNewLightObjects3.length = 0;
gdjs.YouWinCode.GDNewLightObjects4.length = 0;
gdjs.YouWinCode.GDscore_9595titleObjects1.length = 0;
gdjs.YouWinCode.GDscore_9595titleObjects2.length = 0;
gdjs.YouWinCode.GDscore_9595titleObjects3.length = 0;
gdjs.YouWinCode.GDscore_9595titleObjects4.length = 0;
gdjs.YouWinCode.GDscore_9595numObjects1.length = 0;
gdjs.YouWinCode.GDscore_9595numObjects2.length = 0;
gdjs.YouWinCode.GDscore_9595numObjects3.length = 0;
gdjs.YouWinCode.GDscore_9595numObjects4.length = 0;
gdjs.YouWinCode.GDscore_9595footerObjects1.length = 0;
gdjs.YouWinCode.GDscore_9595footerObjects2.length = 0;
gdjs.YouWinCode.GDscore_9595footerObjects3.length = 0;
gdjs.YouWinCode.GDscore_9595footerObjects4.length = 0;
gdjs.YouWinCode.GDdebugObjects1.length = 0;
gdjs.YouWinCode.GDdebugObjects2.length = 0;
gdjs.YouWinCode.GDdebugObjects3.length = 0;
gdjs.YouWinCode.GDdebugObjects4.length = 0;
gdjs.YouWinCode.GDDialogObjects1.length = 0;
gdjs.YouWinCode.GDDialogObjects2.length = 0;
gdjs.YouWinCode.GDDialogObjects3.length = 0;
gdjs.YouWinCode.GDDialogObjects4.length = 0;
gdjs.YouWinCode.GDfadeObjects1.length = 0;
gdjs.YouWinCode.GDfadeObjects2.length = 0;
gdjs.YouWinCode.GDfadeObjects3.length = 0;
gdjs.YouWinCode.GDfadeObjects4.length = 0;

gdjs.YouWinCode.eventsList8(runtimeScene);

return;

}

gdjs['YouWinCode'] = gdjs.YouWinCode;
