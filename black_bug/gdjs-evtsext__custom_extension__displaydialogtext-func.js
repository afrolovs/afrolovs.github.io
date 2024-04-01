
if (typeof gdjs.evtsExt__Custom_Extension__DisplayDialogText !== "undefined") {
  gdjs.evtsExt__Custom_Extension__DisplayDialogText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Custom_Extension__DisplayDialogText = {};
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1= [];
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects2= [];
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects3= [];
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1= [];
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects2= [];
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects3= [];


gdjs.evtsExt__Custom_Extension__DisplayDialogText.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595DisplayDialogText_9546GDDialogTextObjects1Objects = Hashtable.newFrom({"DialogText": gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1});
gdjs.evtsExt__Custom_Extension__DisplayDialogText.asyncCallback20261876 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("DialogText"), gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects3);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs.evtsExt__Custom_Extension__DisplayDialogText.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects2) asyncObjectsList.addObject("DialogText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__DisplayDialogText.asyncCallback20261876(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__DisplayDialogText.asyncCallback20260892 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("DialogText"), gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects2);

{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2("dialog_dissapear", 0, "easeFromTo", 0.5, true);
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__DisplayDialogText.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__Custom_Extension__DisplayDialogText.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1) asyncObjectsList.addObject("DialogText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.evtsExt__Custom_Extension__DisplayDialogText.asyncCallback20260892(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Custom_Extension__DisplayDialogText.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20258156);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1);
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Custom_Extension__DisplayDialogText.mapOfGDgdjs_9546evtsExt_9595_9595Custom_9595Extension_9595_9595DisplayDialogText_9546GDDialogTextObjects1Objects, (( gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1[0].getPointX("")) - 50, (( gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1[0].getPointY("")) - 30, "");
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("TextToType"));
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1[i].setX((( gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1[0].getPointX("")) - 50);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1[i].setZOrder(999);
}
}{for(var i = 0, len = gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutotextTypeBehavior")).StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Custom_Extension__DisplayDialogText.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__Custom_Extension__DisplayDialogText.func = function(runtimeScene, DialogText, AutotextTypeBehavior, Tween, Player, TextToType, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"DialogText": DialogText
, "Player": Player
},
  _objectArraysMap: {
"DialogText": gdjs.objectsListsToArray(DialogText)
, "Player": gdjs.objectsListsToArray(Player)
},
  _behaviorNamesMap: {
"AutotextTypeBehavior": AutotextTypeBehavior
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
if (argName === "TextToType") return TextToType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDDialogTextObjects3.length = 0;
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects2.length = 0;
gdjs.evtsExt__Custom_Extension__DisplayDialogText.GDPlayerObjects3.length = 0;

gdjs.evtsExt__Custom_Extension__DisplayDialogText.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Custom_Extension__DisplayDialogText.registeredGdjsCallbacks = [];