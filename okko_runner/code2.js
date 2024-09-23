gdjs.LoginFormCode = {};
gdjs.LoginFormCode.localVariables = [];
gdjs.LoginFormCode.GDBGObjects1= [];
gdjs.LoginFormCode.GDBGObjects2= [];
gdjs.LoginFormCode.GDBGObjects3= [];
gdjs.LoginFormCode.GDBGObjects4= [];
gdjs.LoginFormCode.GDNameInputObjects1= [];
gdjs.LoginFormCode.GDNameInputObjects2= [];
gdjs.LoginFormCode.GDNameInputObjects3= [];
gdjs.LoginFormCode.GDNameInputObjects4= [];
gdjs.LoginFormCode.GDNextButtonObjects1= [];
gdjs.LoginFormCode.GDNextButtonObjects2= [];
gdjs.LoginFormCode.GDNextButtonObjects3= [];
gdjs.LoginFormCode.GDNextButtonObjects4= [];
gdjs.LoginFormCode.GDErrorTextObjects1= [];
gdjs.LoginFormCode.GDErrorTextObjects2= [];
gdjs.LoginFormCode.GDErrorTextObjects3= [];
gdjs.LoginFormCode.GDErrorTextObjects4= [];
gdjs.LoginFormCode.GDProgressObjects1= [];
gdjs.LoginFormCode.GDProgressObjects2= [];
gdjs.LoginFormCode.GDProgressObjects3= [];
gdjs.LoginFormCode.GDProgressObjects4= [];


gdjs.LoginFormCode.asyncCallback12981748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
gdjs.LoginFormCode.localVariables.length = 0;
}
gdjs.LoginFormCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "load", runtimeScene.getScene().getVariables().get("HTTP"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.LoginFormCode.asyncCallback12981748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginFormCode.mapOfGDgdjs_9546LoginFormCode_9546GDProgressObjects3Objects = Hashtable.newFrom({"Progress": gdjs.LoginFormCode.GDProgressObjects3});
gdjs.LoginFormCode.asyncCallback13412564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}gdjs.LoginFormCode.localVariables.length = 0;
}
gdjs.LoginFormCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.LoginFormCode.asyncCallback13412564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginFormCode.asyncCallback12889612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.LoginFormCode.GDBGObjects3);
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.LoginFormCode.GDErrorTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("NameInput"), gdjs.LoginFormCode.GDNameInputObjects3);

gdjs.LoginFormCode.GDProgressObjects3.length = 0;

{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.LoginFormCode.GDNameInputObjects3.length === 0 ) ? "" :gdjs.LoginFormCode.GDNameInputObjects3[0].getText()));
}{for(var i = 0, len = gdjs.LoginFormCode.GDBGObjects3.length ;i < len;++i) {
    gdjs.LoginFormCode.GDBGObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.LoginFormCode.GDNameInputObjects3.length ;i < len;++i) {
    gdjs.LoginFormCode.GDNameInputObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.LoginFormCode.GDErrorTextObjects3.length ;i < len;++i) {
    gdjs.LoginFormCode.GDErrorTextObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoginFormCode.mapOfGDgdjs_9546LoginFormCode_9546GDProgressObjects3Objects, 250, gdjs.evtTools.window.getWindowInnerHeight() / 1.4, "");
}{for(var i = 0, len = gdjs.LoginFormCode.GDProgressObjects3.length ;i < len;++i) {
    gdjs.LoginFormCode.GDProgressObjects3[i].play();
}
}
{ //Subevents
gdjs.LoginFormCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LoginFormCode.localVariables.length = 0;
}
gdjs.LoginFormCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
for (const obj of gdjs.LoginFormCode.GDNameInputObjects2) asyncObjectsList.addObject("NameInput", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "next", runtimeScene.getScene().getVariables().get("HTTP"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.LoginFormCode.asyncCallback12889612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginFormCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LoginFormCode.GDNameInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InputValidation__IsValidEmail.func(runtimeScene, (( gdjs.LoginFormCode.GDNameInputObjects2.length === 0 ) ? "" :gdjs.LoginFormCode.GDNameInputObjects2[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13410564);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://okko.vernosti.keenetic.link/next", "", "GET", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "next", "https://okko.vernosti.keenetic.link/next", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__UseCORSBypass.func(runtimeScene, "next", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "next", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.LoginFormCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LoginFormCode.GDNameInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InputValidation__IsValidEmail.func(runtimeScene, (( gdjs.LoginFormCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.LoginFormCode.GDNameInputObjects1[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13413268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.LoginFormCode.GDErrorTextObjects1);
{for(var i = 0, len = gdjs.LoginFormCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.LoginFormCode.GDErrorTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


};gdjs.LoginFormCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13408820);
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
}{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "load", "https://okko.vernosti.keenetic.link/load", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__UseCORSBypass.func(runtimeScene, "load", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "load", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.LoginFormCode.eventsList0(runtimeScene);} //End of subevents
}

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
gdjs.LoginFormCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.LoginFormCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginFormCode.GDBGObjects1.length = 0;
gdjs.LoginFormCode.GDBGObjects2.length = 0;
gdjs.LoginFormCode.GDBGObjects3.length = 0;
gdjs.LoginFormCode.GDBGObjects4.length = 0;
gdjs.LoginFormCode.GDNameInputObjects1.length = 0;
gdjs.LoginFormCode.GDNameInputObjects2.length = 0;
gdjs.LoginFormCode.GDNameInputObjects3.length = 0;
gdjs.LoginFormCode.GDNameInputObjects4.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects1.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects2.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects3.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects4.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects1.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects2.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects3.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects4.length = 0;
gdjs.LoginFormCode.GDProgressObjects1.length = 0;
gdjs.LoginFormCode.GDProgressObjects2.length = 0;
gdjs.LoginFormCode.GDProgressObjects3.length = 0;
gdjs.LoginFormCode.GDProgressObjects4.length = 0;

gdjs.LoginFormCode.eventsList4(runtimeScene);
gdjs.LoginFormCode.GDBGObjects1.length = 0;
gdjs.LoginFormCode.GDBGObjects2.length = 0;
gdjs.LoginFormCode.GDBGObjects3.length = 0;
gdjs.LoginFormCode.GDBGObjects4.length = 0;
gdjs.LoginFormCode.GDNameInputObjects1.length = 0;
gdjs.LoginFormCode.GDNameInputObjects2.length = 0;
gdjs.LoginFormCode.GDNameInputObjects3.length = 0;
gdjs.LoginFormCode.GDNameInputObjects4.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects1.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects2.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects3.length = 0;
gdjs.LoginFormCode.GDNextButtonObjects4.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects1.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects2.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects3.length = 0;
gdjs.LoginFormCode.GDErrorTextObjects4.length = 0;
gdjs.LoginFormCode.GDProgressObjects1.length = 0;
gdjs.LoginFormCode.GDProgressObjects2.length = 0;
gdjs.LoginFormCode.GDProgressObjects3.length = 0;
gdjs.LoginFormCode.GDProgressObjects4.length = 0;


return;

}

gdjs['LoginFormCode'] = gdjs.LoginFormCode;
