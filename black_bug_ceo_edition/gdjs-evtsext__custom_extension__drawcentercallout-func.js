
if (typeof gdjs.evtsExt__Custom_Extension__DrawCenterCallout !== "undefined") {
  gdjs.evtsExt__Custom_Extension__DrawCenterCallout.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__DrawCenterCallout = {};
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1= [];
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects2= [];
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects3= [];
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects4= [];
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects5= [];
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects6= [];
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7= [];


gdjs.evtsExt__Custom_Extension__DrawCenterCallout.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595DrawCenterCallout_9546GDCenterTextObjects1Objects = Hashtable.newFrom({"CenterText": gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1});
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20344444 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CenterText"), gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("center_tween7", -(7), "easeOutQuad", 0.2, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("center_tween8", 10, "easeOutQuad", 0.3, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2("center_tween9", 0, "easeOutQuad", 0.3, true);
}
}}
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects6) asyncObjectsList.addObject("CenterText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20344444(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20343580 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CenterText"), gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects6);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects6.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects6[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("center_tween6", 7, "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects5) asyncObjectsList.addObject("CenterText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20343580(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20342716 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CenterText"), gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects5);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects5.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("center_tween5", -(5), "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList2 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects4) asyncObjectsList.addObject("CenterText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20342716(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20341852 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CenterText"), gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects4);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("center_tween4", 5, "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList2(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList3 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects3) asyncObjectsList.addObject("CenterText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20341852(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20340852 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CenterText"), gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects3);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("center_tween3", -(3), "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList3(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList4 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects2) asyncObjectsList.addObject("CenterText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20340852(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20340012 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CenterText"), gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects2);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("center_tween2", 3, "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList4(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1) asyncObjectsList.addObject("CenterText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__DrawCenterCallout.asyncCallback20340012(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19946580);
}
if (isConditionTrue_0) {
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Custom_Extension__DrawCenterCallout.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595DrawCenterCallout_9546GDCenterTextObjects1Objects, 240, 480, "UI");
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("TextOfCenterText"));
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(0.4);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(255);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1[i].setCenterPositionInScene(240,480);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("center_tween1", 1, "easeOutQuad", 0.3, false, true);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Custom_Extension__DrawCenterCallout.func = function(runtimeScene, CenterText, Scale, Text, Tween, TextOfCenterText, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"CenterText": CenterText
},
  _objectArraysMap: {
"CenterText": gdjs.objectsListsToArray(CenterText)
},
  _behaviorNamesMap: {
"Scale": Scale
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
if (argName === "TextOfCenterText") return TextOfCenterText;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects3.length = 0;
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects4.length = 0;
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects5.length = 0;
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects6.length = 0;
gdjs.evtsExt__Custom_Extension__DrawCenterCallout.GDCenterTextObjects7.length = 0;

gdjs.evtsExt__Custom_Extension__DrawCenterCallout.eventsList6(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__DrawCenterCallout.registeredGdjsCallbacks = [];