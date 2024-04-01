
if (typeof gdjs.evtsExt__Custom_Extension__DogFireText !== "undefined") {
  gdjs.evtsExt__Custom_Extension__DogFireText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__DogFireText = {};
gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1= [];
gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects2= [];
gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1= [];
gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects2= [];


gdjs.evtsExt__Custom_Extension__DogFireText.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595DogFireText_9546GDCenterTextObjects1Objects = Hashtable.newFrom({"CenterText": gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1});
gdjs.evtsExt__Custom_Extension__DogFireText.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595DogFireText_9546GDLight_95959595regular2Objects1Objects = Hashtable.newFrom({"Light_regular2": gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1});
gdjs.evtsExt__Custom_Extension__DogFireText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19830940);
}
if (isConditionTrue_0) {
gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1.length = 0;

gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Custom_Extension__DogFireText.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595DogFireText_9546GDCenterTextObjects1Objects, eventsFunctionContext.getArgument("FirePosition"), -(5400), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Custom_Extension__DogFireText.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595DogFireText_9546GDLight_95959595regular2Objects1Objects, eventsFunctionContext.getArgument("FirePosition") + 96, -(5400), "Lighting");
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1[i].setColor(eventsFunctionContext.getArgument("FireColor"));
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1[i].setRadius(256);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("FireText"));
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1[i].setCharacterSize(24);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1[i].setZOrder(998);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1[i].setZOrder(999);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1[i].setColor(eventsFunctionContext.getArgument("FireColor"));
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("text_down", -(4000), "easeOutQuad", 4, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("text_down_light", -(4000), "easeOutQuad", 4, true);
}
}}

}


};

gdjs.evtsExt__Custom_Extension__DogFireText.func = function(runtimeScene, CenterText, Text, Tween, Light_regular2, Tween, FireText, FireColor, FirePosition, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"CenterText": CenterText
, "Light_regular2": Light_regular2
},
  _objectArraysMap: {
"CenterText": gdjs.objectsListsToArray(CenterText)
, "Light_regular2": gdjs.objectsListsToArray(Light_regular2)
},
  _behaviorNamesMap: {
"Text": Text
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
if (argName === "FireText") return FireText;
if (argName === "FireColor") return FireColor;
if (argName === "FirePosition") return FirePosition;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__DogFireText.GDCenterTextObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects1.length = 0;
gdjs.evtsExt__Custom_Extension__DogFireText.GDLight_9595regular2Objects2.length = 0;

gdjs.evtsExt__Custom_Extension__DogFireText.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__DogFireText.registeredGdjsCallbacks = [];