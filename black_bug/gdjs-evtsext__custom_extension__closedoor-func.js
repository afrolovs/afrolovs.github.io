
if (typeof gdjs.evtsExt__Custom_Extension__CloseDoor !== "undefined") {
  gdjs.evtsExt__Custom_Extension__CloseDoor.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__CloseDoor = {};
gdjs.evtsExt__Custom_Extension__CloseDoor.GDCenterTextObjects1= [];
gdjs.evtsExt__Custom_Extension__CloseDoor.GDCenterTextObjects2= [];
gdjs.evtsExt__Custom_Extension__CloseDoor.GDCenterTextObjects3= [];
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1= [];
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2= [];
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects3= [];


gdjs.evtsExt__Custom_Extension__CloseDoor.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Door"), gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2.length;i<l;++i) {
    if ( (gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i].getVariableString(gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i].getVariables().get("Name"))).includes("L") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[k] = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2.length;i<l;++i) {
    if ( (gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i].getVariableString(gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i].getVariables().get("Name"))).includes(eventsFunctionContext.getArgument("DoorNumber")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[k] = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("open_left", (gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i].getPointX("")) + 34, "easeOutQuad", 1, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i].returnVariable(gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2[i].getVariables().get("Name")).setString("CLOSED");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Door"), gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1.length;i<l;++i) {
    if ( (gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i].getVariableString(gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i].getVariables().get("Name"))).includes("R") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[k] = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1.length;i<l;++i) {
    if ( (gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i].getVariableString(gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i].getVariables().get("Name"))).includes(eventsFunctionContext.getArgument("DoorNumber")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[k] = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("open_right", (gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i].getPointX("")) - 34, "easeOutQuad", 1, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i].returnVariable(gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1[i].getVariables().get("Name")).setString("CLOSED");
}
}}

}


};gdjs.evtsExt__Custom_Extension__CloseDoor.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19865468);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Custom_Extension__CloseDoor.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Custom_Extension__CloseDoor.func = function(runtimeScene, CenterText, Scale, Text, Tween, Door, Tween, DoorNumber, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"CenterText": CenterText
, "Door": Door
},
  _objectArraysMap: {
"CenterText": gdjs.objectsListsToArray(CenterText)
, "Door": gdjs.objectsListsToArray(Door)
},
  _behaviorNamesMap: {
"Scale": Scale
, "Text": Text
, "Tween": Tween
, "Tween": Tween
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
if (argName === "DoorNumber") return DoorNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Custom_Extension__CloseDoor.GDCenterTextObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__CloseDoor.GDCenterTextObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__CloseDoor.GDCenterTextObjects3.length = 0;
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__CloseDoor.GDDoorObjects3.length = 0;

gdjs.evtsExt__Custom_Extension__CloseDoor.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__CloseDoor.registeredGdjsCallbacks = [];