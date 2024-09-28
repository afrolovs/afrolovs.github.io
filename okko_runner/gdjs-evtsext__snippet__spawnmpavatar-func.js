
if (typeof gdjs.evtsExt__Snippet__SpawnMPAvatar !== "undefined") {
  gdjs.evtsExt__Snippet__SpawnMPAvatar.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Snippet__SpawnMPAvatar = {};
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects9= [];
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects10= [];


gdjs.evtsExt__Snippet__SpawnMPAvatar.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595SpawnMPAvatar_9546GDSpriteObjects1Objects = Hashtable.newFrom({"Sprite": gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1});
gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13533636 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13533636(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13533140 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("MoveX", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5[i].getPointX("")) - eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), "easeInOutQuad", 1, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13533140(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList2 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13531220);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("MoveX", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4[i].getPointX("")) - eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), "easeInOutQuad", 1, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13531588 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList2(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList3 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13531588(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13531492 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("MoveX", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3[i].getPointX("")) + eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), "easeInOutQuad", 1, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList3(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13531492(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13539084 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList5 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13539084(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13538676 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects9);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects9.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects9[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("MoveY", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects9[i].getPointY("")) + 64, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList5(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList6 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13538676(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList7 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13537860);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("MoveY", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8[i].getPointY("")) - 64, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList6(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13536876 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList7(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList8 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13536876(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13537156 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("MoveY", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7[i].getPointY("")) + 64, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList8(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList9 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13537156(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList10 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13537036);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("MoveY", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6[i].getPointY("")) - 64, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList9(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13536044 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList10(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList11 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13536044(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13535804 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("MoveY", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5[i].getPointY("")) + 64, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList11(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList12 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13535804(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList13 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13535636);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("MoveY", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4[i].getPointY("")) - 64, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList12(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13532980 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList13(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList14 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13532980(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13532884 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("MoveY", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3[i].getPointY("")) + 64, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList14(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13532884(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13544748 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList16 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13544748(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13544252 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("MoveZ", eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / 102 + 10, "easeInOutQuad", 0.75, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList16(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList17 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13544252(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList18 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13543812);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("MoveZ", eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / 102 - 10, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList17(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13543348 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList18(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList19 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13543348(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13542852 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("MoveZ", eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / 102 + 10, "easeInOutQuad", 0.75, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList19(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList20 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13542852(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList21 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13542412);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("MoveZ", eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / 102 - 10, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList20(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13541452 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList21(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList22 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13541452(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13541028 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("MoveZ", eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / 102 + 10, "easeInOutQuad", 0.75, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList22(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList23 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13541028(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList24 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13538324);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("MoveZ", eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / 102 - 10, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList23(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13539788 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList24(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList25 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13539788(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13540028 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sprite"), gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("MoveZ", eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / 102 + 10, "easeInOutQuad", 0.75, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList25(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList26 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1) asyncObjectsList.addObject("Sprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Snippet__SpawnMPAvatar.asyncCallback13540028(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList27 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1, gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getVariableNumber(gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getVariables().get("Lane")) < 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[k] = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(102);
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1, gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getVariableNumber(gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getVariables().get("Lane")) > 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[k] = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(-(102));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13531332);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1, gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("MoveX", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getPointX("")) + eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), "easeInOutQuad", 1, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("LowPerf") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13534292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1, gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2);

{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("MoveY", (gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2[i].getPointY("")) - 64, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("LowPerf") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13539716);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("MoveZ", eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() / 102 - 10, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList26(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList28 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13528164);
}
if (isConditionTrue_0) {
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1.length = 0;

{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.randomWithStep(0, 2, 2));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Snippet__SpawnMPAvatar.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595SpawnMPAvatar_9546GDSpriteObjects1Objects, 246 + (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() * 102), eventsFunctionContext.getArgument("SceneStartY") - eventsFunctionContext.getArgument("Offset"), "");
}{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2("MPOpacity", 255, "easeOutQuad", 0.75, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1[i].returnVariable(gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1[i].getVariables().get("Lane")).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList27(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList29 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("RandomXLane", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(102);
variables._declare("AddValue", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList28(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Snippet__SpawnMPAvatar.func = function(runtimeScene, Sprite, Tween, SceneStartY, Offset, LowPerf, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Sprite": Sprite
},
  _objectArraysMap: {
"Sprite": gdjs.objectsListsToArray(Sprite)
},
  _behaviorNamesMap: {
"Tween": Tween
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Snippet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Snippet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "SceneStartY") return SceneStartY;
if (argName === "Offset") return Offset;
if (argName === "LowPerf") return LowPerf;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects9.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects10.length = 0;

gdjs.evtsExt__Snippet__SpawnMPAvatar.eventsList29(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects1.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects2.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects3.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects4.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects5.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects6.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects7.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects8.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects9.length = 0;
gdjs.evtsExt__Snippet__SpawnMPAvatar.GDSpriteObjects10.length = 0;


return;
}

gdjs.evtsExt__Snippet__SpawnMPAvatar.registeredGdjsCallbacks = [];