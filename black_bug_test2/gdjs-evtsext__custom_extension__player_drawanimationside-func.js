
if (typeof gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide !== "undefined") {
  gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide = {};
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1= [];
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects2= [];


gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMovementAngleAround(-(180), 45) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[k] = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Left");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMovementAngleAround(0, 45) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[k] = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Right");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMovementAngleAround(-(90), 45) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[k] = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Up");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMovementAngleAround(90, 45) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[k] = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[k] = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[k] = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}}

}


};

gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.func = function(runtimeScene, Player, Animation, TopDownMovement, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
},
  _behaviorNamesMap: {
"Animation": Animation
, "TopDownMovement": TopDownMovement
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

gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.GDPlayerObjects2.length = 0;

gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__Player_DrawAnimationSide.registeredGdjsCallbacks = [];