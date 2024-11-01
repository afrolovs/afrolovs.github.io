
if (typeof gdjs.evtsExt__Snippet___BGSlideKidsPosters !== "undefined") {
  gdjs.evtsExt__Snippet___BGSlideKidsPosters.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Snippet___BGSlideKidsPosters = {};
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1= [];
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects2= [];
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1= [];
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects2= [];


gdjs.evtsExt__Snippet___BGSlideKidsPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGSlideKidsPosters_9546GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1});
gdjs.evtsExt__Snippet___BGSlideKidsPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGSlideKidsPosters_9546GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1});
gdjs.evtsExt__Snippet___BGSlideKidsPosters.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Snippet___BGSlideKidsPosters.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13515292);
}
if (isConditionTrue_0) {
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1.length = 0;

gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Snippet___BGSlideKidsPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGSlideKidsPosters_9546GDLeftObjects1Objects, -(300), eventsFunctionContext.getArgument("Height"), "Base Layer");
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1[i].returnVariable(gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1[i].getVariables().get("N")).setNumber(eventsFunctionContext.getArgument("Shift"));
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1[i].setYOffset(eventsFunctionContext.getArgument("Shift") * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("LeftT")).addObjectPositionXTween2("GoLeft", -(96), "easeOutQuad", 0.4, false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Snippet___BGSlideKidsPosters.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595BGSlideKidsPosters_9546GDRightObjects1Objects, 755, eventsFunctionContext.getArgument("Height"), "Base Layer");
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1[i].returnVariable(gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1[i].getVariables().get("N")).setNumber(eventsFunctionContext.getArgument("Shift"));
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1[i].setYOffset(eventsFunctionContext.getArgument("Shift") * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RightT")).addObjectPositionXTween2("RightGo", 512, "easeOutQuad", 0.4, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet___BGSlideKidsPosters.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Snippet___BGSlideKidsPosters.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(184);
variables._declare("PosterHeight", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__Snippet___BGSlideKidsPosters.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Snippet___BGSlideKidsPosters.func = function(runtimeScene, Left, LeftT, Right, RightT, Shift, Height, parentEventsFunctionContext) {
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
if (argName === "Shift") return Shift;
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1.length = 0;
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects2.length = 0;
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1.length = 0;
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects2.length = 0;

gdjs.evtsExt__Snippet___BGSlideKidsPosters.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects1.length = 0;
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDLeftObjects2.length = 0;
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects1.length = 0;
gdjs.evtsExt__Snippet___BGSlideKidsPosters.GDRightObjects2.length = 0;


return;
}

gdjs.evtsExt__Snippet___BGSlideKidsPosters.registeredGdjsCallbacks = [];