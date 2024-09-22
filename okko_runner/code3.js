gdjs.BadPerfomanceCode = {};
gdjs.BadPerfomanceCode.localVariables = [];
gdjs.BadPerfomanceCode.GDNewTextObjects1= [];
gdjs.BadPerfomanceCode.GDNewTextObjects2= [];
gdjs.BadPerfomanceCode.GDNewText2Objects1= [];
gdjs.BadPerfomanceCode.GDNewText2Objects2= [];
gdjs.BadPerfomanceCode.GDTransparentButtonObjects1= [];
gdjs.BadPerfomanceCode.GDTransparentButtonObjects2= [];
gdjs.BadPerfomanceCode.GDProgressObjects1= [];
gdjs.BadPerfomanceCode.GDProgressObjects2= [];


gdjs.BadPerfomanceCode.asyncCallback13433468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BadPerfomanceCode.localVariables);
gdjs.BadPerfomanceCode.localVariables.length = 0;
}
gdjs.BadPerfomanceCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BadPerfomanceCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__Share__Share.func(runtimeScene, "Передайте ссылку на игру на другое устройство:", "https://afrolovs.github.io/okko_runner/", "Передайте ссылку на игру на другое устройство", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.BadPerfomanceCode.asyncCallback13433468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BadPerfomanceCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButton"), gdjs.BadPerfomanceCode.GDTransparentButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BadPerfomanceCode.GDTransparentButtonObjects1.length;i<l;++i) {
    if ( gdjs.BadPerfomanceCode.GDTransparentButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BadPerfomanceCode.GDTransparentButtonObjects1[k] = gdjs.BadPerfomanceCode.GDTransparentButtonObjects1[i];
        ++k;
    }
}
gdjs.BadPerfomanceCode.GDTransparentButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13431580);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BadPerfomanceCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentButton"), gdjs.BadPerfomanceCode.GDTransparentButtonObjects1);
{for(var i = 0, len = gdjs.BadPerfomanceCode.GDTransparentButtonObjects1.length ;i < len;++i) {
    gdjs.BadPerfomanceCode.GDTransparentButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.BadPerfomanceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BadPerfomanceCode.GDNewTextObjects1.length = 0;
gdjs.BadPerfomanceCode.GDNewTextObjects2.length = 0;
gdjs.BadPerfomanceCode.GDNewText2Objects1.length = 0;
gdjs.BadPerfomanceCode.GDNewText2Objects2.length = 0;
gdjs.BadPerfomanceCode.GDTransparentButtonObjects1.length = 0;
gdjs.BadPerfomanceCode.GDTransparentButtonObjects2.length = 0;
gdjs.BadPerfomanceCode.GDProgressObjects1.length = 0;
gdjs.BadPerfomanceCode.GDProgressObjects2.length = 0;

gdjs.BadPerfomanceCode.eventsList1(runtimeScene);
gdjs.BadPerfomanceCode.GDNewTextObjects1.length = 0;
gdjs.BadPerfomanceCode.GDNewTextObjects2.length = 0;
gdjs.BadPerfomanceCode.GDNewText2Objects1.length = 0;
gdjs.BadPerfomanceCode.GDNewText2Objects2.length = 0;
gdjs.BadPerfomanceCode.GDTransparentButtonObjects1.length = 0;
gdjs.BadPerfomanceCode.GDTransparentButtonObjects2.length = 0;
gdjs.BadPerfomanceCode.GDProgressObjects1.length = 0;
gdjs.BadPerfomanceCode.GDProgressObjects2.length = 0;


return;

}

gdjs['BadPerfomanceCode'] = gdjs.BadPerfomanceCode;
