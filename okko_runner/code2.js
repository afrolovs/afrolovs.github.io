gdjs.LoginFormCode = {};
gdjs.LoginFormCode.localVariables = [];
gdjs.LoginFormCode.GDBGObjects1= [];
gdjs.LoginFormCode.GDBGObjects2= [];
gdjs.LoginFormCode.GDBGObjects3= [];
gdjs.LoginFormCode.GDNameInputObjects1= [];
gdjs.LoginFormCode.GDNameInputObjects2= [];
gdjs.LoginFormCode.GDNameInputObjects3= [];
gdjs.LoginFormCode.GDNextButtonObjects1= [];
gdjs.LoginFormCode.GDNextButtonObjects2= [];
gdjs.LoginFormCode.GDNextButtonObjects3= [];
gdjs.LoginFormCode.GDErrorTextObjects1= [];
gdjs.LoginFormCode.GDErrorTextObjects2= [];
gdjs.LoginFormCode.GDErrorTextObjects3= [];
gdjs.LoginFormCode.GDProgressObjects1= [];
gdjs.LoginFormCode.GDProgressObjects2= [];
gdjs.LoginFormCode.GDProgressObjects3= [];


gdjs.LoginFormCode.mapOfGDgdjs_9546LoginFormCode_9546GDProgressObjects2Objects = Hashtable.newFrom({"Progress": gdjs.LoginFormCode.GDProgressObjects2});
gdjs.LoginFormCode.asyncCallback13412604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}gdjs.LoginFormCode.localVariables.length = 0;
}
gdjs.LoginFormCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.LoginFormCode.asyncCallback13412604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginFormCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LoginFormCode.GDNameInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InputValidation__IsValidEmail.func(runtimeScene, (( gdjs.LoginFormCode.GDNameInputObjects2.length === 0 ) ? "" :gdjs.LoginFormCode.GDNameInputObjects2[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13410604);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.LoginFormCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.LoginFormCode.GDErrorTextObjects2);
/* Reuse gdjs.LoginFormCode.GDNameInputObjects2 */
gdjs.LoginFormCode.GDProgressObjects2.length = 0;

{gdjs.evtTools.network.sendAsyncRequest("https://okko.vernosti.keenetic.link/next", "", "GET", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.LoginFormCode.GDNameInputObjects2.length === 0 ) ? "" :gdjs.LoginFormCode.GDNameInputObjects2[0].getText()));
}{for(var i = 0, len = gdjs.LoginFormCode.GDBGObjects2.length ;i < len;++i) {
    gdjs.LoginFormCode.GDBGObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.LoginFormCode.GDNameInputObjects2.length ;i < len;++i) {
    gdjs.LoginFormCode.GDNameInputObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.LoginFormCode.GDErrorTextObjects2.length ;i < len;++i) {
    gdjs.LoginFormCode.GDErrorTextObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoginFormCode.mapOfGDgdjs_9546LoginFormCode_9546GDProgressObjects2Objects, 250, gdjs.evtTools.window.getWindowInnerHeight() / 1.4, "");
}{for(var i = 0, len = gdjs.LoginFormCode.GDProgressObjects2.length ;i < len;++i) {
    gdjs.LoginFormCode.GDProgressObjects2[i].play();
}
}
{ //Subevents
gdjs.LoginFormCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LoginFormCode.GDNameInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InputValidation__IsValidEmail.func(runtimeScene, (( gdjs.LoginFormCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.LoginFormCode.GDNameInputObjects1[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13413308);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.LoginFormCode.GDErrorTextObjects1);
{for(var i = 0, len = gdjs.LoginFormCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.LoginFormCode.GDErrorTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


};gdjs.LoginFormCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13408860);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.LoginFormCode.GDErrorTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.LoginFormCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.LoginFormCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.LoginFormCode.GDNextButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.LoginFormCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.LoginFormCode.GDErrorTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.network.sendAsyncRequest("https://okko.vernosti.keenetic.link/load", "", "GET", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.LoginFormCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginFormCode.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.LoginFormCode.GDNextButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginFormCode.GDNextButtonObjects1[k] = gdjs.LoginFormCode.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.LoginFormCode.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginFormCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LoginFormCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginFormCode.GDBGObjects1.length = 0;
gdjs.LoginFormCode.GDBGObjects2.length = 0;
gdjs.LoginFormCode.GDBGObjects3.length = 0;
gdjs.LoginFormCode.GDNameInputObjects1.length = 0;
gdjs.LoginFormCode.GDNameInputObjects2.length = 0;
gdjs.LoginFormCode.GDNameInputObjects3.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects1.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects2.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects3.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects1.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects2.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects3.length = 0;
gdjs.LoginFormCode.GDProgressObjects1.length = 0;
gdjs.LoginFormCode.GDProgressObjects2.length = 0;
gdjs.LoginFormCode.GDProgressObjects3.length = 0;

gdjs.LoginFormCode.eventsList2(runtimeScene);
gdjs.LoginFormCode.GDBGObjects1.length = 0;
gdjs.LoginFormCode.GDBGObjects2.length = 0;
gdjs.LoginFormCode.GDBGObjects3.length = 0;
gdjs.LoginFormCode.GDNameInputObjects1.length = 0;
gdjs.LoginFormCode.GDNameInputObjects2.length = 0;
gdjs.LoginFormCode.GDNameInputObjects3.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects1.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects2.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects3.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects1.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects2.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects3.length = 0;
gdjs.LoginFormCode.GDProgressObjects1.length = 0;
gdjs.LoginFormCode.GDProgressObjects2.length = 0;
gdjs.LoginFormCode.GDProgressObjects3.length = 0;


return;

}

gdjs['LoginFormCode'] = gdjs.LoginFormCode;
