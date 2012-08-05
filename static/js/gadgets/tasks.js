define([
    "dojo/_base/declare", 
    "js/gadgets/baseGadget", 
    "dojo/dom", 
    "dojo/dom-construct", 
    "dojo/dom-class", 
    "dojo/_base/connect", 
    "dojo/_base/lang",
    "dojo/string",
    "dojo/_base/xhr",
    "js/widgets/task"
], function (
    declare,
    baseGadget,
    dom,
    domConstruct,
    domClass,
    connect, 
    lang,
    string,
    xhr,
    Task
) {
    return declare("js.gadgets.tasks", baseGadget, {
        title: "Current Tasks",
        iconClass: "icon-tasks",

        buildRendering: function () {
            this.inherited(arguments);
            xhr.get({
                url: "/tasks",
                load: lang.hitch(this, this.onLoad)
            });
        },

        onLoad: function (data) {
            var i;
                data = JSON.parse(data);
            for (i = 0; i < data.length; i += 1) {
                var task = new Task(data[i]);
                this.containerNode.appendChild(task.domNode);
            }
        }
    });
});




