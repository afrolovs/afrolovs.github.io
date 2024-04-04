
if (typeof gdjs.evtsExt__Custom_Extension__ShowRightButton !== "undefined") {
  gdjs.evtsExt__Custom_Extension__ShowRightButton.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__ShowRightButton = {};
gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1= [];
gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects2= [];


gdjs.evtsExt__Custom_Extension__ShowRightButton.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595ShowRightButton_9546GDRightJoystickObjects1Objects = Hashtable.newFrom({"RightJoystick": gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1});
gdjs.evtsExt__Custom_Extension__ShowRightButton.asyncCallback19844932 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("RightJoystick"), gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects2);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectColorTween2("buttonrgb", "255;255;255", "easeOutQuad", 0.3, false, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("rightbutton", 1, "easeOutQuad", 0.3, false, true);
}
}}
gdjs.evtsExt__Custom_Extension__ShowRightButton.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1) asyncObjectsList.addObject("RightJoystick", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__ShowRightButton.asyncCallback19844932(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__ShowRightButton.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19895412);
}
if (isConditionTrue_0) {
gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Custom_Extension__ShowRightButton.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595ShowRightButton_9546GDRightJoystickObjects1Objects, 367, 817, "UI");
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectColorTween2("buttonrgb", "221;123;0", "easeOutQuad", 0.3, false, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("rightbutton", 1.3, "easeOutQuad", 0.3, false, true);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__ShowRightButton.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Custom_Extension__ShowRightButton.func = function(runtimeScene, RightJoystick, Tween, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"RightJoystick": RightJoystick
},
  _objectArraysMap: {
"RightJoystick": gdjs.objectsListsToArray(RightJoystick)
},
  _behaviorNamesMap: {
"Tween": Tween
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

gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__ShowRightButton.GDRightJoystickObjects2.length = 0;

gdjs.evtsExt__Custom_Extension__ShowRightButton.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__ShowRightButton.registeredGdjsCallbacks = [];