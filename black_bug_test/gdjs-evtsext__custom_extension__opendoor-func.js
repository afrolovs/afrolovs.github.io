
if (typeof gdjs.evtsExt__Custom_Extension__OpenDoor !== "undefined") {
  gdjs.evtsExt__Custom_Extension__OpenDoor.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__OpenDoor = {};
gdjs.evtsExt__Custom_Extension__OpenDoor.GDCenterTextObjects1= [];
gdjs.evtsExt__Custom_Extension__OpenDoor.GDCenterTextObjects2= [];
gdjs.evtsExt__Custom_Extension__OpenDoor.GDCenterTextObjects3= [];
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1= [];
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2= [];
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects3= [];


gdjs.evtsExt__Custom_Extension__OpenDoor.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595OpenDoor_9546GDCenterTextObjects2Objects = Hashtable.newFrom({"CenterText": gdjs.evtsExt__Custom_Extension__OpenDoor.GDCenterTextObjects2});
gdjs.evtsExt__Custom_Extension__OpenDoor.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("PlaySound") : false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "levelcleared.AAC", false, 100, 1);
}}

}


};gdjs.evtsExt__Custom_Extension__OpenDoor.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Door"), gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2.length;i<l;++i) {
    if ( (gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[i].getVariableString(gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[i].getVariables().get("Name"))).includes("L") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[k] = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2.length;i<l;++i) {
    if ( (gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[i].getVariableString(gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[i].getVariables().get("Name"))).includes(eventsFunctionContext.getArgument("DoorNumber")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[k] = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("CenterText"), gdjs.evtsExt__Custom_Extension__OpenDoor.GDCenterTextObjects2);
/* Reuse gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2 */
{gdjs.evtsExt__Custom_Extension__DrawCenterCallout.func(runtimeScene, gdjs.evtsExt__Custom_Extension__OpenDoor.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595OpenDoor_9546GDCenterTextObjects2Objects, eventsFunctionContext.getBehaviorName("Scale"), eventsFunctionContext.getBehaviorName("Text"), eventsFunctionContext.getBehaviorName("Tween"), "Level" + gdjs.evtTools.string.newLine() + "cleared!", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("open_left", (gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2[i].getPointX("")) - 34, "easeOutQuad", 1, false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Door"), gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1.length;i<l;++i) {
    if ( (gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[i].getVariableString(gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[i].getVariables().get("Name"))).includes("R") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[k] = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1.length;i<l;++i) {
    if ( (gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[i].getVariableString(gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[i].getVariables().get("Name"))).includes(eventsFunctionContext.getArgument("DoorNumber")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[k] = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("open_right", (gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1[i].getPointX("")) + 34, "easeOutQuad", 1, false);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__OpenDoor.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Custom_Extension__OpenDoor.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19750556);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Custom_Extension__OpenDoor.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Custom_Extension__OpenDoor.func = function(runtimeScene, CenterText, Scale, Text, Tween, Door, Tween, DoorNumber, PlaySound, parentEventsFunctionContext) {
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
if (argName === "PlaySound") return PlaySound;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Custom_Extension__OpenDoor.GDCenterTextObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__OpenDoor.GDCenterTextObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__OpenDoor.GDCenterTextObjects3.length = 0;
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__OpenDoor.GDDoorObjects3.length = 0;

gdjs.evtsExt__Custom_Extension__OpenDoor.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__OpenDoor.registeredGdjsCallbacks = [];