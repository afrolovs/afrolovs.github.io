
if (typeof gdjs.evtsExt__Snippet__BGSlideSportPosters !== "undefined") {
  gdjs.evtsExt__Snippet__BGSlideSportPosters.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Snippet__BGSlideSportPosters = {};
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects1= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects2= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects3= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects4= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects5= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects1= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects2= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects3= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects4= [];
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects5= [];


gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects1});
gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects1});
gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDLeftObjects2Objects = Hashtable.newFrom({"Left": gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects2});
gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDRightObjects2Objects = Hashtable.newFrom({"Right": gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects2});
gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDLeftObjects3Objects = Hashtable.newFrom({"Left": gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects3});
gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDRightObjects3Objects = Hashtable.newFrom({"Right": gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects3});
gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDLeftObjects4Objects = Hashtable.newFrom({"Left": gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects4});
gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDRightObjects4Objects = Hashtable.newFrom({"Right": gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects4});
gdjs.evtsExt__Snippet__BGSlideSportPosters.asyncCallback13099836 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() * 2), (runtimeScene) => (gdjs.evtsExt__Snippet__BGSlideSportPosters.asyncCallback13099836(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__BGSlideSportPosters.asyncCallback13098724 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Left"), gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("Right"), gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects4);

{gdjs.evtsExt__Snippet___BGSlideSportPosters.func(runtimeScene, gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDLeftObjects4Objects, eventsFunctionContext.getBehaviorName("LeftT"), gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDRightObjects4Objects, eventsFunctionContext.getBehaviorName("RightT"), 4, eventsFunctionContext.getArgument("StartHeight") - (4 * eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects3) asyncObjectsList.addObject("Left", obj);
for (const obj of gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects3) asyncObjectsList.addObject("Right", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.evtsExt__Snippet__BGSlideSportPosters.asyncCallback13098724(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__BGSlideSportPosters.asyncCallback13098244 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Left"), gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Right"), gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects3);

{gdjs.evtsExt__Snippet___BGSlideSportPosters.func(runtimeScene, gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDLeftObjects3Objects, eventsFunctionContext.getBehaviorName("LeftT"), gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDRightObjects3Objects, eventsFunctionContext.getBehaviorName("RightT"), 3, eventsFunctionContext.getArgument("StartHeight") - (3 * eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList2 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects2) asyncObjectsList.addObject("Left", obj);
for (const obj of gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects2) asyncObjectsList.addObject("Right", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.evtsExt__Snippet__BGSlideSportPosters.asyncCallback13098244(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__BGSlideSportPosters.asyncCallback13098652 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Left"), gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Right"), gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects2);

{gdjs.evtsExt__Snippet___BGSlideSportPosters.func(runtimeScene, gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDLeftObjects2Objects, eventsFunctionContext.getBehaviorName("LeftT"), gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDRightObjects2Objects, eventsFunctionContext.getBehaviorName("RightT"), 2, eventsFunctionContext.getArgument("StartHeight") - (2 * eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList2(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects1) asyncObjectsList.addObject("Left", obj);
for (const obj of gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects1) asyncObjectsList.addObject("Right", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.evtsExt__Snippet__BGSlideSportPosters.asyncCallback13098652(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0.5);
variables._declare("Delay", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(365);
variables._declare("PosterHeight", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13098412);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Left"), gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Right"), gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects1);
{gdjs.evtsExt__Snippet___BGSlideSportPosters.func(runtimeScene, gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDLeftObjects1Objects, eventsFunctionContext.getBehaviorName("LeftT"), gdjs.evtsExt__Snippet__BGSlideSportPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGSlideSportPosters_9546GDRightObjects1Objects, eventsFunctionContext.getBehaviorName("RightT"), 1, eventsFunctionContext.getArgument("StartHeight") - (1 * eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Snippet__BGSlideSportPosters.func = function(runtimeScene, Left, LeftT, Right, RightT, StartHeight, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Left": Left
, "Right": Right
},
  _objectArraysMap: {
"Left": gdjs.objectsListsToArray(Left)
, "Right": gdjs.objectsListsToArray(Right)
},
  _behaviorNamesMap: {
"LeftT": LeftT
, "RightT": RightT
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
if (argName === "StartHeight") return StartHeight;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects1.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects2.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects3.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects4.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects5.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects1.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects2.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects3.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects4.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects5.length = 0;

gdjs.evtsExt__Snippet__BGSlideSportPosters.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects1.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects2.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects3.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects4.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDLeftObjects5.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects1.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects2.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects3.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects4.length = 0;
gdjs.evtsExt__Snippet__BGSlideSportPosters.GDRightObjects5.length = 0;


return;
}

gdjs.evtsExt__Snippet__BGSlideSportPosters.registeredGdjsCallbacks = [];