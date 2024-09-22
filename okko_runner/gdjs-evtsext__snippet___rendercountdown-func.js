
if (typeof gdjs.evtsExt__Snippet___RenderCountdown !== "undefined") {
  gdjs.evtsExt__Snippet___RenderCountdown.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Snippet___RenderCountdown = {};
gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1= [];
gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects2= [];


gdjs.evtsExt__Snippet___RenderCountdown.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595RenderCountdown_9546GDCountdownObjects1Objects = Hashtable.newFrom({"Countdown": gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1});
gdjs.evtsExt__Snippet___RenderCountdown.asyncCallback15710268 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Countdown"), gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects2);

{for(var i = 0, len = gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("C_Tween")).addObjectScaleTween3("CountSizeOut", 10, "easeOutQuad", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("C_Tween")).addObjectOpacityTween2("CountOpacity", 0, "easeOutQuad", 0.3, true);
}
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet___RenderCountdown.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1) asyncObjectsList.addObject("Countdown", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.evtsExt__Snippet___RenderCountdown.asyncCallback15710268(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet___RenderCountdown.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15708692);
}
if (isConditionTrue_0) {
gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Snippet___RenderCountdown.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595_9595RenderCountdown_9546GDCountdownObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 200, "UI");
}{for(var i = 0, len = gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(0.1);
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("CNumber"));
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("C_Tween")).addObjectScaleTween3("CountSizeOut", 1, "easeOutQuad", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("C_Tween")).addObjectOpacityTween2("CountOpacity", 255, "easeOutQuad", 0.3, false);
}
}
{ //Subevents
gdjs.evtsExt__Snippet___RenderCountdown.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Snippet___RenderCountdown.func = function(runtimeScene, Countdown, C_Tween, CNumber, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Countdown": Countdown
},
  _objectArraysMap: {
"Countdown": gdjs.objectsListsToArray(Countdown)
},
  _behaviorNamesMap: {
"C_Tween": C_Tween
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
if (argName === "CNumber") return CNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1.length = 0;
gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects2.length = 0;

gdjs.evtsExt__Snippet___RenderCountdown.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects1.length = 0;
gdjs.evtsExt__Snippet___RenderCountdown.GDCountdownObjects2.length = 0;


return;
}

gdjs.evtsExt__Snippet___RenderCountdown.registeredGdjsCallbacks = [];