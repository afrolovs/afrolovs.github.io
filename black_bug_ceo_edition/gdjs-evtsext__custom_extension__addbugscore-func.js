
if (typeof gdjs.evtsExt__Custom_Extension__AddBugScore !== "undefined") {
  gdjs.evtsExt__Custom_Extension__AddBugScore.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__AddBugScore = {};
gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects1= [];
gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects2= [];
gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1= [];
gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects2= [];


gdjs.evtsExt__Custom_Extension__AddBugScore.asyncCallback19867364 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Score_Icon"), gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Score_Label"), gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects2);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("score_tween3", 0.6, "easeFromTo", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("score_tween3", 1.8, "easeFromTo", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects2[i].setColor("255;255;255");
}
}}
gdjs.evtsExt__Custom_Extension__AddBugScore.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects1) asyncObjectsList.addObject("Score_Icon", obj);
for (const obj of gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1) asyncObjectsList.addObject("Score_Label", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__AddBugScore.asyncCallback19867364(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__AddBugScore.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19980852);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Score_Icon"), gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Score_Label"), gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1);
{runtimeScene.getGame().getVariables().get("Score").add(eventsFunctionContext.getArgument("Score_to_add"));
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"))));
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1[i].setColor("255;54;54");
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("score_tween3", 1, "easeFromTo", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("score_tween3", 4, "easeFromTo", 0.3, false, true);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__AddBugScore.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Custom_Extension__AddBugScore.func = function(runtimeScene, Score_Icon, Tween, Score_Label, Text, Tween, Score_to_add, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Score_Icon": Score_Icon
, "Score_Label": Score_Label
},
  _objectArraysMap: {
"Score_Icon": gdjs.objectsListsToArray(Score_Icon)
, "Score_Label": gdjs.objectsListsToArray(Score_Label)
},
  _behaviorNamesMap: {
"Tween": Tween
, "Text": Text
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
if (argName === "Score_to_add") return Score_to_add;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595IconObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__AddBugScore.GDScore_9595LabelObjects2.length = 0;

gdjs.evtsExt__Custom_Extension__AddBugScore.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__AddBugScore.registeredGdjsCallbacks = [];