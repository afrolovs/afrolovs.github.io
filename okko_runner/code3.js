gdjs.DataFormCode = {};
gdjs.DataFormCode.localVariables = [];
gdjs.DataFormCode.GDFIOInputObjects2_1final = [];

gdjs.DataFormCode.GDFIOInputObjects3_1final = [];

gdjs.DataFormCode.GDJobInputObjects2_1final = [];

gdjs.DataFormCode.GDJobInputObjects3_1final = [];

gdjs.DataFormCode.GDBGObjects1= [];
gdjs.DataFormCode.GDBGObjects2= [];
gdjs.DataFormCode.GDBGObjects3= [];
gdjs.DataFormCode.GDBGObjects4= [];
gdjs.DataFormCode.GDFIOInputObjects1= [];
gdjs.DataFormCode.GDFIOInputObjects2= [];
gdjs.DataFormCode.GDFIOInputObjects3= [];
gdjs.DataFormCode.GDFIOInputObjects4= [];
gdjs.DataFormCode.GDNextButtonObjects1= [];
gdjs.DataFormCode.GDNextButtonObjects2= [];
gdjs.DataFormCode.GDNextButtonObjects3= [];
gdjs.DataFormCode.GDNextButtonObjects4= [];
gdjs.DataFormCode.GDFIOErrorTextObjects1= [];
gdjs.DataFormCode.GDFIOErrorTextObjects2= [];
gdjs.DataFormCode.GDFIOErrorTextObjects3= [];
gdjs.DataFormCode.GDFIOErrorTextObjects4= [];
gdjs.DataFormCode.GDJobInputObjects1= [];
gdjs.DataFormCode.GDJobInputObjects2= [];
gdjs.DataFormCode.GDJobInputObjects3= [];
gdjs.DataFormCode.GDJobInputObjects4= [];
gdjs.DataFormCode.GDJobErrorTextObjects1= [];
gdjs.DataFormCode.GDJobErrorTextObjects2= [];
gdjs.DataFormCode.GDJobErrorTextObjects3= [];
gdjs.DataFormCode.GDJobErrorTextObjects4= [];
gdjs.DataFormCode.GDPDButtonObjects1= [];
gdjs.DataFormCode.GDPDButtonObjects2= [];
gdjs.DataFormCode.GDPDButtonObjects3= [];
gdjs.DataFormCode.GDPDButtonObjects4= [];
gdjs.DataFormCode.GDCloseButtonObjects1= [];
gdjs.DataFormCode.GDCloseButtonObjects2= [];
gdjs.DataFormCode.GDCloseButtonObjects3= [];
gdjs.DataFormCode.GDCloseButtonObjects4= [];
gdjs.DataFormCode.GDProgressObjects1= [];
gdjs.DataFormCode.GDProgressObjects2= [];
gdjs.DataFormCode.GDProgressObjects3= [];
gdjs.DataFormCode.GDProgressObjects4= [];


gdjs.DataFormCode.asyncCallback13909372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DataFormCode.localVariables);
gdjs.DataFormCode.localVariables.length = 0;
}
gdjs.DataFormCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DataFormCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "next", runtimeScene.getScene().getVariables().get("HTTP"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.DataFormCode.asyncCallback13909372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DataFormCode.mapOfGDgdjs_9546DataFormCode_9546GDProgressObjects2Objects = Hashtable.newFrom({"Progress": gdjs.DataFormCode.GDProgressObjects2});
gdjs.DataFormCode.asyncCallback13912188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DataFormCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}gdjs.DataFormCode.localVariables.length = 0;
}
gdjs.DataFormCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DataFormCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.DataFormCode.asyncCallback13912188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DataFormCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.DataFormCode.GDFIOInputObjects2, gdjs.DataFormCode.GDFIOInputObjects3);

gdjs.copyArray(gdjs.DataFormCode.GDJobInputObjects2, gdjs.DataFormCode.GDJobInputObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.DataFormCode.GDFIOInputObjects3_1final.length = 0;
gdjs.DataFormCode.GDJobInputObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.DataFormCode.GDFIOInputObjects2, gdjs.DataFormCode.GDFIOInputObjects4);

{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDFIOInputObjects4.length === 0 ) ? "" :gdjs.DataFormCode.GDFIOInputObjects4[0].getBehavior("Text").getText())) > 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DataFormCode.GDFIOInputObjects4.length; j < jLen ; ++j) {
        if ( gdjs.DataFormCode.GDFIOInputObjects3_1final.indexOf(gdjs.DataFormCode.GDFIOInputObjects4[j]) === -1 )
            gdjs.DataFormCode.GDFIOInputObjects3_1final.push(gdjs.DataFormCode.GDFIOInputObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DataFormCode.GDJobInputObjects2, gdjs.DataFormCode.GDJobInputObjects4);

{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDJobInputObjects4.length === 0 ) ? "" :gdjs.DataFormCode.GDJobInputObjects4[0].getBehavior("Text").getText())) > 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DataFormCode.GDJobInputObjects4.length; j < jLen ; ++j) {
        if ( gdjs.DataFormCode.GDJobInputObjects3_1final.indexOf(gdjs.DataFormCode.GDJobInputObjects4[j]) === -1 )
            gdjs.DataFormCode.GDJobInputObjects3_1final.push(gdjs.DataFormCode.GDJobInputObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DataFormCode.GDFIOInputObjects3_1final, gdjs.DataFormCode.GDFIOInputObjects3);
gdjs.copyArray(gdjs.DataFormCode.GDJobInputObjects3_1final, gdjs.DataFormCode.GDJobInputObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13905780);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "next", "https://okko.vernosti.keenetic.pro/next", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__UseCORSBypass.func(runtimeScene, "next", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "next", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.DataFormCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13909932);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.DataFormCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("FIOErrorText"), gdjs.DataFormCode.GDFIOErrorTextObjects2);
/* Reuse gdjs.DataFormCode.GDFIOInputObjects2 */
gdjs.copyArray(runtimeScene.getObjects("JobErrorText"), gdjs.DataFormCode.GDJobErrorTextObjects2);
/* Reuse gdjs.DataFormCode.GDJobInputObjects2 */
gdjs.DataFormCode.GDProgressObjects2.length = 0;

{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs.DataFormCode.GDFIOInputObjects2.length === 0 ) ? "" :gdjs.DataFormCode.GDFIOInputObjects2[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.DataFormCode.GDJobInputObjects2.length === 0 ) ? "" :gdjs.DataFormCode.GDJobInputObjects2[0].getText()));
}{for(var i = 0, len = gdjs.DataFormCode.GDBGObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDBGObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.DataFormCode.GDFIOInputObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDFIOInputObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.DataFormCode.GDJobInputObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDJobInputObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.DataFormCode.GDFIOErrorTextObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDFIOErrorTextObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.DataFormCode.GDJobErrorTextObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDJobErrorTextObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.DataFormCode.mapOfGDgdjs_9546DataFormCode_9546GDProgressObjects2Objects, 250, gdjs.evtTools.window.getWindowInnerHeight() / 1.4, "");
}{for(var i = 0, len = gdjs.DataFormCode.GDProgressObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDProgressObjects2[i].play();
}
}
{ //Subevents
gdjs.DataFormCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.DataFormCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FIOInput"), gdjs.DataFormCode.GDFIOInputObjects2);
gdjs.copyArray(runtimeScene.getObjects("JobInput"), gdjs.DataFormCode.GDJobInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDFIOInputObjects2.length === 0 ) ? "" :gdjs.DataFormCode.GDFIOInputObjects2[0].getBehavior("Text").getText())) < 72);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDJobInputObjects2.length === 0 ) ? "" :gdjs.DataFormCode.GDJobInputObjects2[0].getBehavior("Text").getText())) < 72);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.DataFormCode.GDFIOInputObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.DataFormCode.GDFIOInputObjects2, gdjs.DataFormCode.GDFIOInputObjects3);

isConditionTrue_1 = gdjs.evtsExt__RegEx__HasPattern.func(runtimeScene, "^[a-zA-Zа-яА-ЯёЁ0-9.,!?: ]+$", "", (( gdjs.DataFormCode.GDFIOInputObjects3.length === 0 ) ? "" :gdjs.DataFormCode.GDFIOInputObjects3[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DataFormCode.GDFIOInputObjects3.length; j < jLen ; ++j) {
        if ( gdjs.DataFormCode.GDFIOInputObjects2_1final.indexOf(gdjs.DataFormCode.GDFIOInputObjects3[j]) === -1 )
            gdjs.DataFormCode.GDFIOInputObjects2_1final.push(gdjs.DataFormCode.GDFIOInputObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DataFormCode.GDFIOInputObjects2, gdjs.DataFormCode.GDFIOInputObjects3);

{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDFIOInputObjects3.length === 0 ) ? "" :gdjs.DataFormCode.GDFIOInputObjects3[0].getBehavior("Text").getText())) < 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DataFormCode.GDFIOInputObjects3.length; j < jLen ; ++j) {
        if ( gdjs.DataFormCode.GDFIOInputObjects2_1final.indexOf(gdjs.DataFormCode.GDFIOInputObjects3[j]) === -1 )
            gdjs.DataFormCode.GDFIOInputObjects2_1final.push(gdjs.DataFormCode.GDFIOInputObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DataFormCode.GDFIOInputObjects2_1final, gdjs.DataFormCode.GDFIOInputObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.DataFormCode.GDJobInputObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.DataFormCode.GDJobInputObjects2, gdjs.DataFormCode.GDJobInputObjects3);

isConditionTrue_1 = gdjs.evtsExt__RegEx__HasPattern.func(runtimeScene, "^[a-zA-Zа-яА-ЯёЁ0-9.,!?: ]+$", "", (( gdjs.DataFormCode.GDJobInputObjects3.length === 0 ) ? "" :gdjs.DataFormCode.GDJobInputObjects3[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DataFormCode.GDJobInputObjects3.length; j < jLen ; ++j) {
        if ( gdjs.DataFormCode.GDJobInputObjects2_1final.indexOf(gdjs.DataFormCode.GDJobInputObjects3[j]) === -1 )
            gdjs.DataFormCode.GDJobInputObjects2_1final.push(gdjs.DataFormCode.GDJobInputObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DataFormCode.GDJobInputObjects2, gdjs.DataFormCode.GDJobInputObjects3);

{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDJobInputObjects3.length === 0 ) ? "" :gdjs.DataFormCode.GDJobInputObjects3[0].getBehavior("Text").getText())) < 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DataFormCode.GDJobInputObjects3.length; j < jLen ; ++j) {
        if ( gdjs.DataFormCode.GDJobInputObjects2_1final.indexOf(gdjs.DataFormCode.GDJobInputObjects3[j]) === -1 )
            gdjs.DataFormCode.GDJobInputObjects2_1final.push(gdjs.DataFormCode.GDJobInputObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DataFormCode.GDJobInputObjects2_1final, gdjs.DataFormCode.GDJobInputObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13902876);
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DataFormCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FIOInput"), gdjs.DataFormCode.GDFIOInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDFIOInputObjects2.length === 0 ) ? "" :gdjs.DataFormCode.GDFIOInputObjects2[0].getBehavior("Text").getText())) > 72);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13913476);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FIOErrorText"), gdjs.DataFormCode.GDFIOErrorTextObjects2);
{for(var i = 0, len = gdjs.DataFormCode.GDFIOErrorTextObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDFIOErrorTextObjects2[i].getBehavior("Text").setText("Символов бы поменьше – уж очень длинный текст");
}
}{for(var i = 0, len = gdjs.DataFormCode.GDFIOErrorTextObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDFIOErrorTextObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FIOInput"), gdjs.DataFormCode.GDFIOInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDFIOInputObjects2.length === 0 ) ? "" :gdjs.DataFormCode.GDFIOInputObjects2[0].getBehavior("Text").getText())) > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__RegEx__HasPattern.func(runtimeScene, "^[a-zA-Zа-яА-ЯёЁ0-9.,!?: ]+$", "", (( gdjs.DataFormCode.GDFIOInputObjects2.length === 0 ) ? "" :gdjs.DataFormCode.GDFIOInputObjects2[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13917356);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FIOErrorText"), gdjs.DataFormCode.GDFIOErrorTextObjects2);
{for(var i = 0, len = gdjs.DataFormCode.GDFIOErrorTextObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDFIOErrorTextObjects2[i].getBehavior("Text").setText("У нас можно только буквы, цифры и пробелы :)");
}
}{for(var i = 0, len = gdjs.DataFormCode.GDFIOErrorTextObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDFIOErrorTextObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JobInput"), gdjs.DataFormCode.GDJobInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDJobInputObjects2.length === 0 ) ? "" :gdjs.DataFormCode.GDJobInputObjects2[0].getBehavior("Text").getText())) > 72);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13920260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JobErrorText"), gdjs.DataFormCode.GDJobErrorTextObjects2);
{for(var i = 0, len = gdjs.DataFormCode.GDJobErrorTextObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDJobErrorTextObjects2[i].getBehavior("Text").setText("Символов бы поменьше – уж очень длинный текст");
}
}{for(var i = 0, len = gdjs.DataFormCode.GDJobErrorTextObjects2.length ;i < len;++i) {
    gdjs.DataFormCode.GDJobErrorTextObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JobInput"), gdjs.DataFormCode.GDJobInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.DataFormCode.GDJobInputObjects1.length === 0 ) ? "" :gdjs.DataFormCode.GDJobInputObjects1[0].getBehavior("Text").getText())) > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__RegEx__HasPattern.func(runtimeScene, "^[a-zA-Zа-яА-ЯёЁ0-9.,!?: ]+$", "", (( gdjs.DataFormCode.GDJobInputObjects1.length === 0 ) ? "" :gdjs.DataFormCode.GDJobInputObjects1[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13924204);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JobErrorText"), gdjs.DataFormCode.GDJobErrorTextObjects1);
{for(var i = 0, len = gdjs.DataFormCode.GDJobErrorTextObjects1.length ;i < len;++i) {
    gdjs.DataFormCode.GDJobErrorTextObjects1[i].getBehavior("Text").setText("У нас можно только буквы, цифры и пробелы :)");
}
}{for(var i = 0, len = gdjs.DataFormCode.GDJobErrorTextObjects1.length ;i < len;++i) {
    gdjs.DataFormCode.GDJobErrorTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


};gdjs.DataFormCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13892628);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CloseButton"), gdjs.DataFormCode.GDCloseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FIOErrorText"), gdjs.DataFormCode.GDFIOErrorTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("JobErrorText"), gdjs.DataFormCode.GDJobErrorTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.DataFormCode.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PDButton"), gdjs.DataFormCode.GDPDButtonObjects1);
{for(var i = 0, len = gdjs.DataFormCode.GDPDButtonObjects1.length ;i < len;++i) {
    gdjs.DataFormCode.GDPDButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.DataFormCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.DataFormCode.GDNextButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.DataFormCode.GDCloseButtonObjects1.length ;i < len;++i) {
    gdjs.DataFormCode.GDCloseButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.DataFormCode.GDFIOErrorTextObjects1.length ;i < len;++i) {
    gdjs.DataFormCode.GDFIOErrorTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.DataFormCode.GDJobErrorTextObjects1.length ;i < len;++i) {
    gdjs.DataFormCode.GDJobErrorTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.DataFormCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DataFormCode.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.DataFormCode.GDNextButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DataFormCode.GDNextButtonObjects1[k] = gdjs.DataFormCode.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.DataFormCode.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.DataFormCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PDButton"), gdjs.DataFormCode.GDPDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DataFormCode.GDPDButtonObjects1.length;i<l;++i) {
    if ( gdjs.DataFormCode.GDPDButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DataFormCode.GDPDButtonObjects1[k] = gdjs.DataFormCode.GDPDButtonObjects1[i];
        ++k;
    }
}
gdjs.DataFormCode.GDPDButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://afrolovs.github.io/okko_runner/pd.html", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseButton"), gdjs.DataFormCode.GDCloseButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DataFormCode.GDCloseButtonObjects1.length;i<l;++i) {
    if ( gdjs.DataFormCode.GDCloseButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DataFormCode.GDCloseButtonObjects1[k] = gdjs.DataFormCode.GDCloseButtonObjects1[i];
        ++k;
    }
}
gdjs.DataFormCode.GDCloseButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoginForm", true);
}}

}


};

gdjs.DataFormCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DataFormCode.GDBGObjects1.length = 0;
gdjs.DataFormCode.GDBGObjects2.length = 0;
gdjs.DataFormCode.GDBGObjects3.length = 0;
gdjs.DataFormCode.GDBGObjects4.length = 0;
gdjs.DataFormCode.GDFIOInputObjects1.length = 0;
gdjs.DataFormCode.GDFIOInputObjects2.length = 0;
gdjs.DataFormCode.GDFIOInputObjects3.length = 0;
gdjs.DataFormCode.GDFIOInputObjects4.length = 0;
gdjs.DataFormCode.GDNextButtonObjects1.length = 0;
gdjs.DataFormCode.GDNextButtonObjects2.length = 0;
gdjs.DataFormCode.GDNextButtonObjects3.length = 0;
gdjs.DataFormCode.GDNextButtonObjects4.length = 0;
gdjs.DataFormCode.GDFIOErrorTextObjects1.length = 0;
gdjs.DataFormCode.GDFIOErrorTextObjects2.length = 0;
gdjs.DataFormCode.GDFIOErrorTextObjects3.length = 0;
gdjs.DataFormCode.GDFIOErrorTextObjects4.length = 0;
gdjs.DataFormCode.GDJobInputObjects1.length = 0;
gdjs.DataFormCode.GDJobInputObjects2.length = 0;
gdjs.DataFormCode.GDJobInputObjects3.length = 0;
gdjs.DataFormCode.GDJobInputObjects4.length = 0;
gdjs.DataFormCode.GDJobErrorTextObjects1.length = 0;
gdjs.DataFormCode.GDJobErrorTextObjects2.length = 0;
gdjs.DataFormCode.GDJobErrorTextObjects3.length = 0;
gdjs.DataFormCode.GDJobErrorTextObjects4.length = 0;
gdjs.DataFormCode.GDPDButtonObjects1.length = 0;
gdjs.DataFormCode.GDPDButtonObjects2.length = 0;
gdjs.DataFormCode.GDPDButtonObjects3.length = 0;
gdjs.DataFormCode.GDPDButtonObjects4.length = 0;
gdjs.DataFormCode.GDCloseButtonObjects1.length = 0;
gdjs.DataFormCode.GDCloseButtonObjects2.length = 0;
gdjs.DataFormCode.GDCloseButtonObjects3.length = 0;
gdjs.DataFormCode.GDCloseButtonObjects4.length = 0;
gdjs.DataFormCode.GDProgressObjects1.length = 0;
gdjs.DataFormCode.GDProgressObjects2.length = 0;
gdjs.DataFormCode.GDProgressObjects3.length = 0;
gdjs.DataFormCode.GDProgressObjects4.length = 0;

gdjs.DataFormCode.eventsList4(runtimeScene);
gdjs.DataFormCode.GDBGObjects1.length = 0;
gdjs.DataFormCode.GDBGObjects2.length = 0;
gdjs.DataFormCode.GDBGObjects3.length = 0;
gdjs.DataFormCode.GDBGObjects4.length = 0;
gdjs.DataFormCode.GDFIOInputObjects1.length = 0;
gdjs.DataFormCode.GDFIOInputObjects2.length = 0;
gdjs.DataFormCode.GDFIOInputObjects3.length = 0;
gdjs.DataFormCode.GDFIOInputObjects4.length = 0;
gdjs.DataFormCode.GDNextButtonObjects1.length = 0;
gdjs.DataFormCode.GDNextButtonObjects2.length = 0;
gdjs.DataFormCode.GDNextButtonObjects3.length = 0;
gdjs.DataFormCode.GDNextButtonObjects4.length = 0;
gdjs.DataFormCode.GDFIOErrorTextObjects1.length = 0;
gdjs.DataFormCode.GDFIOErrorTextObjects2.length = 0;
gdjs.DataFormCode.GDFIOErrorTextObjects3.length = 0;
gdjs.DataFormCode.GDFIOErrorTextObjects4.length = 0;
gdjs.DataFormCode.GDJobInputObjects1.length = 0;
gdjs.DataFormCode.GDJobInputObjects2.length = 0;
gdjs.DataFormCode.GDJobInputObjects3.length = 0;
gdjs.DataFormCode.GDJobInputObjects4.length = 0;
gdjs.DataFormCode.GDJobErrorTextObjects1.length = 0;
gdjs.DataFormCode.GDJobErrorTextObjects2.length = 0;
gdjs.DataFormCode.GDJobErrorTextObjects3.length = 0;
gdjs.DataFormCode.GDJobErrorTextObjects4.length = 0;
gdjs.DataFormCode.GDPDButtonObjects1.length = 0;
gdjs.DataFormCode.GDPDButtonObjects2.length = 0;
gdjs.DataFormCode.GDPDButtonObjects3.length = 0;
gdjs.DataFormCode.GDPDButtonObjects4.length = 0;
gdjs.DataFormCode.GDCloseButtonObjects1.length = 0;
gdjs.DataFormCode.GDCloseButtonObjects2.length = 0;
gdjs.DataFormCode.GDCloseButtonObjects3.length = 0;
gdjs.DataFormCode.GDCloseButtonObjects4.length = 0;
gdjs.DataFormCode.GDProgressObjects1.length = 0;
gdjs.DataFormCode.GDProgressObjects2.length = 0;
gdjs.DataFormCode.GDProgressObjects3.length = 0;
gdjs.DataFormCode.GDProgressObjects4.length = 0;


return;

}

gdjs['DataFormCode'] = gdjs.DataFormCode;
