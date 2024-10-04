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
gdjs.LoginFormCode.GDPDButtonObjects1= [];
gdjs.LoginFormCode.GDPDButtonObjects2= [];
gdjs.LoginFormCode.GDPDButtonObjects3= [];
gdjs.LoginFormCode.GDProgressObjects1= [];
gdjs.LoginFormCode.GDProgressObjects2= [];
gdjs.LoginFormCode.GDProgressObjects3= [];


gdjs.LoginFormCode.asyncCallback13837356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
gdjs.LoginFormCode.localVariables.length = 0;
}
gdjs.LoginFormCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "load", runtimeScene.getScene().getVariables().get("HTTP"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.LoginFormCode.asyncCallback13837356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginFormCode.mapOfGDgdjs_9546LoginFormCode_9546GDProgressObjects2Objects = Hashtable.newFrom({"Progress": gdjs.LoginFormCode.GDProgressObjects2});
gdjs.LoginFormCode.asyncCallback13839588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DataForm", true);
}gdjs.LoginFormCode.localVariables.length = 0;
}
gdjs.LoginFormCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoginFormCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.LoginFormCode.asyncCallback13839588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginFormCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LoginFormCode.GDNameInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InputValidation__IsValidEmail.func(runtimeScene, (( gdjs.LoginFormCode.GDNameInputObjects2.length === 0 ) ? "" :gdjs.LoginFormCode.GDNameInputObjects2[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13838108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.LoginFormCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.LoginFormCode.GDErrorTextObjects2);
/* Reuse gdjs.LoginFormCode.GDNameInputObjects2 */
gdjs.LoginFormCode.GDProgressObjects2.length = 0;

{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
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
gdjs.LoginFormCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LoginFormCode.GDNameInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InputValidation__IsValidEmail.func(runtimeScene, (( gdjs.LoginFormCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.LoginFormCode.GDNameInputObjects1[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13840460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.LoginFormCode.GDErrorTextObjects1);
{for(var i = 0, len = gdjs.LoginFormCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.LoginFormCode.GDErrorTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


};gdjs.LoginFormCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13835140);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.LoginFormCode.GDErrorTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.LoginFormCode.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PDButton"), gdjs.LoginFormCode.GDPDButtonObjects1);
{for(var i = 0, len = gdjs.LoginFormCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.LoginFormCode.GDNextButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.LoginFormCode.GDPDButtonObjects1.length ;i < len;++i) {
    gdjs.LoginFormCode.GDPDButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
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
gdjs.LoginFormCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PDButton"), gdjs.LoginFormCode.GDPDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginFormCode.GDPDButtonObjects1.length;i<l;++i) {
    if ( gdjs.LoginFormCode.GDPDButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginFormCode.GDPDButtonObjects1[k] = gdjs.LoginFormCode.GDPDButtonObjects1[i];
        ++k;
    }
}
gdjs.LoginFormCode.GDPDButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://afrolovs.github.io/okko_runner/pd.html", runtimeScene);
}}

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
gdjs.LoginFormCode.GDPDButtonObjects1.length = 0;
gdjs.LoginFormCode.GDPDButtonObjects2.length = 0;
gdjs.LoginFormCode.GDPDButtonObjects3.length = 0;
gdjs.LoginFormCode.GDProgressObjects1.length = 0;
gdjs.LoginFormCode.GDProgressObjects2.length = 0;
gdjs.LoginFormCode.GDProgressObjects3.length = 0;

gdjs.LoginFormCode.eventsList3(runtimeScene);
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
gdjs.LoginFormCode.GDPDButtonObjects1.length = 0;
gdjs.LoginFormCode.GDPDButtonObjects2.length = 0;
gdjs.LoginFormCode.GDPDButtonObjects3.length = 0;
gdjs.LoginFormCode.GDProgressObjects1.length = 0;
gdjs.LoginFormCode.GDProgressObjects2.length = 0;
gdjs.LoginFormCode.GDProgressObjects3.length = 0;


return;

}

gdjs['LoginFormCode'] = gdjs.LoginFormCode;
