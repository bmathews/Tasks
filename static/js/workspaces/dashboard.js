define([
    "dojo/_base/declare", 
    "dojo/dom", 
    "dojo/dom-construct", 
    "dojo/dom-class", 
    "dojo/_base/connect", 
    "dojo/_base/lang",
    "js/workspaces/baseWorkspace",
    "js/gadgets/tasks",
    "js/gadgets/activity",
    "js/gadgets/users",
], function (
    declare,
    dom, 
    domConstruct,
    domClass,
    connect, 
    lang,
    baseWorkspace,
    Tasks,
    Activity,
    Users
) {
    return declare("js.workspaces.dashboard", baseWorkspace, {

        buildRendering: function () {
            this.inherited(arguments);
            this.domNode = domConstruct.create("div", { className: "container" });
            this.containerNode = domConstruct.create("div", { className: "row-fluid" }, this.domNode);
        },

        activate: function () {
            var tasks = new Tasks(),
                activity = new Activity(),
                users = new Users();
            this.containerNode.appendChild(tasks.domNode); 
            this.containerNode.appendChild(activity.domNode); 
            this.containerNode.appendChild(users.domNode); 
        },

        destroy: function () {
            this.inherited(arguments);
        }
    });
});


