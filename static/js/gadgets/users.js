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
    "js/widgets/user"
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
    User
) {
    return declare("js.gadgets.users", baseGadget, {
        title: "Users",
        iconClass: "icon-user",

        buildRendering: function () {
            this.inherited(arguments);
            xhr.get({
                url: "/users",
                load: lang.hitch(this, this.onLoad)
            });
        },

        onLoad: function (data) {
            var i;
                data = JSON.parse(data);
            for (i = 0; i < data.length; i += 1) {
                var user = new User(data[i]);
                this.containerNode.appendChild(user.domNode);
            }
        }
    });
});




