
if (typeof gdjs.evtsExt__Snippet__BGLoadAnimation !== "undefined") {
  gdjs.evtsExt__Snippet__BGLoadAnimation.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Snippet__BGLoadAnimation = {};
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects1= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects2= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects3= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects4= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects5= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects6= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects1= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects2= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects3= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects4= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects5= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects6= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects1= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects2= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects3= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects4= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects5= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects6= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects1= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects2= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects3= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects4= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects5= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects6= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects1= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects2= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects3= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects4= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects5= [];
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects6= [];


gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDBGObjects1Objects = Hashtable.newFrom({"BG": gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects1});
gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDPlaceholderObjects1Objects = Hashtable.newFrom({"Placeholder": gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects1});
gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDBGObjects2Objects = Hashtable.newFrom({"BG": gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects2});
gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDCounterObjects2Objects = Hashtable.newFrom({"Counter": gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects2});
gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDCounterObjects3Objects = Hashtable.newFrom({"Counter": gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects3});
gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDCounterObjects4Objects = Hashtable.newFrom({"Counter": gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects4});
gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDSberLogoObjects5Objects = Hashtable.newFrom({"SberLogo": gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects5});
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__Snippet__BGLoadAnimation.asyncCallback15666940 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(eventsFunctionContext.getObjects("SberLogo"), gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects5);
{
}
{ //Subevents
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Snippet__BGLoadAnimation.asyncCallback15666940(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__BGLoadAnimation.asyncCallback15666868 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Counter"), gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects4);

{gdjs.evtsExt__Snippet___RenderCountdown.func(runtimeScene, gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDCounterObjects4Objects, eventsFunctionContext.getBehaviorName("Counter_tween"), "1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList2 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects3) asyncObjectsList.addObject("Counter", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Snippet__BGLoadAnimation.asyncCallback15666868(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__BGLoadAnimation.asyncCallback15666436 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Counter"), gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects3);

{gdjs.evtsExt__Snippet___RenderCountdown.func(runtimeScene, gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDCounterObjects3Objects, eventsFunctionContext.getBehaviorName("Counter_tween"), "2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList2(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList3 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects2) asyncObjectsList.addObject("Counter", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Snippet__BGLoadAnimation.asyncCallback15666436(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__BGLoadAnimation.asyncCallback15665252 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BG"), gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("Counter"), gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Road"), gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects2);
{gdjs.evtsExt__Snippet___BGRenderPosters.func(runtimeScene, gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDBGObjects2Objects, eventsFunctionContext.getBehaviorName("BG_Tween"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Road_Tween")).addObjectHeightTween2("scaleroad", 1460, "linear", 3, false);
}
}{gdjs.evtsExt__Snippet___RenderCountdown.func(runtimeScene, gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDCounterObjects2Objects, eventsFunctionContext.getBehaviorName("Counter_tween"), "3", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList3(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects1) asyncObjectsList.addObject("BG", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Snippet__BGLoadAnimation.asyncCallback15665252(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15664836);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BG"), gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Placeholder"), gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects1);
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDBGObjects1Objects);
}{gdjs.evtsExt__Snippet___BGBlinkPlaceHolders.func(runtimeScene, gdjs.evtsExt__Snippet__BGLoadAnimation.mapOfGDgdjs_9546evtsExt_9595_9595Snippet_9595_9595BGLoadAnimation_9546GDPlaceholderObjects1Objects, eventsFunctionContext.getBehaviorName("PH_Tween"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
if (isConditionTrue_0) {
}

}


};

gdjs.evtsExt__Snippet__BGLoadAnimation.func = function(runtimeScene, BG, BG_Tween, Placeholder, PH_Tween, Road, Road_Tween, Counter, Counter_tween, SberLogo, SberLogo_Tween, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"BG": BG
, "Placeholder": Placeholder
, "Road": Road
, "Counter": Counter
, "SberLogo": SberLogo
},
  _objectArraysMap: {
"BG": gdjs.objectsListsToArray(BG)
, "Placeholder": gdjs.objectsListsToArray(Placeholder)
, "Road": gdjs.objectsListsToArray(Road)
, "Counter": gdjs.objectsListsToArray(Counter)
, "SberLogo": gdjs.objectsListsToArray(SberLogo)
},
  _behaviorNamesMap: {
"BG_Tween": BG_Tween
, "PH_Tween": PH_Tween
, "Road_Tween": Road_Tween
, "Counter_tween": Counter_tween
, "SberLogo_Tween": SberLogo_Tween
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects6.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects6.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects6.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects6.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects6.length = 0;

gdjs.evtsExt__Snippet__BGLoadAnimation.eventsList5(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDBGObjects6.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDPlaceholderObjects6.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDRoadObjects6.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDCounterObjects6.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects1.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects2.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects3.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects4.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects5.length = 0;
gdjs.evtsExt__Snippet__BGLoadAnimation.GDSberLogoObjects6.length = 0;


return;
}

gdjs.evtsExt__Snippet__BGLoadAnimation.registeredGdjsCallbacks = [];