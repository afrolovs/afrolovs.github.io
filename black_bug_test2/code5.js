gdjs.GameOverCode = {};
gdjs.GameOverCode.GDStayDeterminedObjects1= [];
gdjs.GameOverCode.GDStayDeterminedObjects2= [];
gdjs.GameOverCode.GDStayDeterminedObjects3= [];
gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects3= [];
gdjs.GameOverCode.GDfadeObjects1= [];
gdjs.GameOverCode.GDfadeObjects2= [];
gdjs.GameOverCode.GDfadeObjects3= [];


gdjs.GameOverCode.asyncCallback21558796 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects2);

{for(var i = 0, len = gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects2[i].getBehavior("Tween").addObjectOpacityTween2("restart", 255, "easeOutQuad", 1, false);
}
}}
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1) asyncObjectsList.addObject("TransparentButtonWithWhiteBlueBorder", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.GameOverCode.asyncCallback21558796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 8;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "boss2.AAC");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boss", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 8;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21557420);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StayDetermined"), gdjs.GameOverCode.GDStayDeterminedObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "game_over2.AAC", 0, true, 100, 1);
}{for(var i = 0, len = gdjs.GameOverCode.GDStayDeterminedObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDStayDeterminedObjects1[i].getBehavior("Text_AutoTyping").ChangeInterval(0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21557332);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{ //Subevents
gdjs.GameOverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21561564);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StayDetermined"), gdjs.GameOverCode.GDStayDeterminedObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDStayDeterminedObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDStayDeterminedObjects1[i].getBehavior("Text_AutoTyping").SkipToEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDStayDeterminedObjects1.length = 0;
gdjs.GameOverCode.GDStayDeterminedObjects2.length = 0;
gdjs.GameOverCode.GDStayDeterminedObjects3.length = 0;
gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.GameOverCode.GDTransparentButtonWithWhiteBlueBorderObjects3.length = 0;
gdjs.GameOverCode.GDfadeObjects1.length = 0;
gdjs.GameOverCode.GDfadeObjects2.length = 0;
gdjs.GameOverCode.GDfadeObjects3.length = 0;

gdjs.GameOverCode.eventsList2(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
