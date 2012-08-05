define([
    "dojo/_base/declare", 
    "dijit/_Widget", 
    "dojo/dom", 
    "dojo/dom-construct", 
    "dojo/dom-class", 
    "dojo/_base/connect", 
    "dojo/_base/lang",
    "dojo/string"
], function (
    declare,
    _Widget, 
    dom, 
    domConstruct,
    domClass,
    connect, 
    lang
) {
    return declare("js.workspaces.baseWorkspace", _Widget, {

        buildRendering: function () {
            this.inherited(arguments);
        },

        activate: function () {
            
        },
    });
});


