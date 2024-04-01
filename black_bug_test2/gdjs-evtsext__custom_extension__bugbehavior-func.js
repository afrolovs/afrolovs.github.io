
if (typeof gdjs.evtsExt__Custom_Extension__BugBehavior !== "undefined") {
  gdjs.evtsExt__Custom_Extension__BugBehavior.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__BugBehavior = {};
gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects1= [];
gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects2= [];


gdjs.evtsExt__Custom_Extension__BugBehavior.asyncCallback20264756 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bug"), gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects2);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects2[i].clearForces();
}
}}
gdjs.evtsExt__Custom_Extension__BugBehavior.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects1) asyncObjectsList.addObject("Bug", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__BugBehavior.asyncCallback20264756(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__BugBehavior.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bug"), gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects1);
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Leaping");
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__BugBehavior.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Custom_Extension__BugBehavior.func = function(runtimeScene, Bug, Animation, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Bug": Bug
},
  _objectArraysMap: {
"Bug": gdjs.objectsListsToArray(Bug)
},
  _behaviorNamesMap: {
"Animation": Animation
},
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

gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__BugBehavior.GDBugObjects2.length = 0;

gdjs.evtsExt__Custom_Extension__BugBehavior.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__BugBehavior.registeredGdjsCallbacks = [];