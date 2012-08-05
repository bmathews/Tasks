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
    "js/widgets/activity"
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
    Activity
) {
    return declare("js.gadgets.activity", baseGadget, {
        title: "Recent Activity",
        iconClass: "icon-comment",

        buildRendering: function () {
            this.inherited(arguments);
            xhr.get({
                url: "/activities",
                load: lang.hitch(this, this.onLoad)
            });
        },

        onLoad: function (data) {
            var i;
                data = JSON.parse(data);
            for (i = 0; i < data.length; i += 1) {
                var activity = new Activity(data[i]);
                this.containerNode.appendChild(activity.domNode);
            }
        }
    });
});




