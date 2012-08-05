define([
    "dojo/_base/declare", 
    "dojo/dom", 
    "dojo/dom-construct", 
    "dojo/dom-class", 
    "dojo/_base/connect", 
    "dojo/_base/lang",
    "js/workspaces/baseWorkspace"
], function (
    declare,
    dom, 
    domConstruct,
    domClass,
    connect, 
    lang,
    baseWorkspace
) {
    return declare("js.workspaces.reports", baseWorkspace, {

        buildRendering: function () {
            this.inherited(arguments);
            this.domNode = domConstruct.create("div", { className: "container" });
            this.containerNode = domConstruct.create("div", { className: "row-fluid" }, this.domNode);
        },

        activate: function () {
        },

        destroy: function () {
            this.inherited(arguments);
        }
    });
});


