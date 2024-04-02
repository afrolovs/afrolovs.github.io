
if (typeof gdjs.evtsExt__Custom_Extension__AudioTyping !== "undefined") {
  gdjs.evtsExt__Custom_Extension__AudioTyping.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__AudioTyping = {};
gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1= [];
gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects2= [];


gdjs.evtsExt__Custom_Extension__AudioTyping.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19793812);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1[i].resetTimer("__typing");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1[i].timerElapsedTime("__typing", 0.5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1[k] = gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "key2.AAC", false, 100, gdjs.randomFloatInRange(0.8, 1.2));
}}

}


};

gdjs.evtsExt__Custom_Extension__AudioTyping.func = function(runtimeScene, Seconds_to_type, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
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
if (argName === "Seconds_to_type") return Seconds_to_type;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__AudioTyping.GDObjectObjects2.length = 0;

gdjs.evtsExt__Custom_Extension__AudioTyping.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__AudioTyping.registeredGdjsCallbacks = [];