
if (typeof gdjs.evtsExt__Snippet___BGSlideVODPosters !== "undefined") {
  gdjs.evtsExt__Snippet___BGSlideVODPosters.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Snippet___BGSlideVODPosters = {};
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1= [];
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects2= [];
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1= [];
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects2= [];


gdjs.evtsExt__Snippet___BGSlideVODPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGSlideVODPosters_9546GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1});
gdjs.evtsExt__Snippet___BGSlideVODPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGSlideVODPosters_9546GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1});
gdjs.evtsExt__Snippet___BGSlideVODPosters.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13324932);
}
if (isConditionTrue_0) {
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1.length = 0;

gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Snippet___BGSlideVODPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGSlideVODPosters_9546GDLeftObjects1Objects, eventsFunctionContext.getArgument("LeftX") - 300, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsNumber(), "Base Layer");
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1[i].setYOffset(eventsFunctionContext.getArgument("Shift") * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("LeftT")).addObjectPositionXTween2("GoLeft", eventsFunctionContext.getArgument("LeftX"), "easeOutQuad", 0.5, false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Snippet___BGSlideVODPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGSlideVODPosters_9546GDRightObjects1Objects, eventsFunctionContext.getArgument("RightX") + 300, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsNumber(), "Base Layer");
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1[i].setYOffset(eventsFunctionContext.getArgument("Shift") * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RightT")).addObjectPositionXTween2("RightGo", eventsFunctionContext.getArgument("RightX"), "easeOutQuad", 0.5, false);
}
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).sub(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber());
}}

}


};

gdjs.evtsExt__Snippet___BGSlideVODPosters.func = function(runtimeScene, Left, LeftT, Right, RightT, LeftX, RightX, Shift, parentEventsFunctionContext) {
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
if (argName === "LeftX") return LeftX;
if (argName === "RightX") return RightX;
if (argName === "Shift") return Shift;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1.length = 0;
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects2.length = 0;
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1.length = 0;
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects2.length = 0;

gdjs.evtsExt__Snippet___BGSlideVODPosters.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects1.length = 0;
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDLeftObjects2.length = 0;
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects1.length = 0;
gdjs.evtsExt__Snippet___BGSlideVODPosters.GDRightObjects2.length = 0;


return;
}

gdjs.evtsExt__Snippet___BGSlideVODPosters.registeredGdjsCallbacks = [];