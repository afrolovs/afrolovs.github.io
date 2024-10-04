
if (typeof gdjs.evtsExt__Snippet___BGBlinkPlaceHolders !== "undefined") {
  gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Snippet___BGBlinkPlaceHolders = {};
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1= [];
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects2= [];
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects3= [];
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects4= [];
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects5= [];
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects6= [];
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects7= [];


gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGBlinkPlaceHolders_9546GDPHObjects1Objects = Hashtable.newFrom({"PH": gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1});
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13491388 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13491388(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13490988 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PH"), gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects6);

{for(var i = 0, len = gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects6.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects6[i].getBehavior(eventsFunctionContext.getBehaviorName("PH_Tween")).addObjectOpacityTween2("phAlpha", 255, "easeOutQuad", 0.3, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects5) asyncObjectsList.addObject("PH", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13490988(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList2 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13490604);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("PH"), gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects5);

{for(var i = 0, len = gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects5.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("PH_Tween")).addObjectOpacityTween2("phAlpha", 150, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13490092 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList2(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList3 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects4) asyncObjectsList.addObject("PH", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13490092(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13489692 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PH"), gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects4);

{for(var i = 0, len = gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PH_Tween")).addObjectOpacityTween2("phAlpha", 255, "easeOutQuad", 0.3, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList3(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList4 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects3) asyncObjectsList.addObject("PH", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13489692(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList5 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13489308);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("PH"), gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects3);

{for(var i = 0, len = gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PH_Tween")).addObjectOpacityTween2("phAlpha", 150, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList4(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


};gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13488796 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList5(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList6 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects2) asyncObjectsList.addObject("PH", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13488796(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13488340 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PH"), gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects2);

{for(var i = 0, len = gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PH_Tween")).addObjectOpacityTween2("phAlpha", 255, "easeOutQuad", 0.3, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList6(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1) asyncObjectsList.addObject("PH", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.asyncCallback13488340(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("PH"), gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1);
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGBlinkPlaceHolders_9546GDPHObjects1Objects);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13487956);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PH"), gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1);
{for(var i = 0, len = gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PH_Tween")).addObjectOpacityTween2("phAlpha", 150, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.func = function(runtimeScene, PH, PH_Tween, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"PH": PH
},
  _objectArraysMap: {
"PH": gdjs.objectsListsToArray(PH)
},
  _behaviorNamesMap: {
"PH_Tween": PH_Tween
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects2.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects3.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects4.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects5.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects6.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects7.length = 0;

gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.eventsList8(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects1.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects2.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects3.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects4.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects5.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects6.length = 0;
gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.GDPHObjects7.length = 0;


return;
}

gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.registeredGdjsCallbacks = [];