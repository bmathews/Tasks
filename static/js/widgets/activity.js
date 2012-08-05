define([
    "dojo/_base/declare", 
    "dijit/_Widget", 
    "dijit/_Templated",
    "dojo/dom", 
    "dojo/dom-construct", 
    "dojo/dom-class", 
    "dojo/_base/connect", 
    "dojo/_base/lang"
], function (
    declare,
    _Widget,
    _Templated,
    dom, 
    domConstruct,
    domClass,
    connect, 
    lang
) {
    return declare("js.widgets.activity", [_Widget, _Templated], {
        templateString: 
            '<div>' +
                '<span class="label label-info">${!actor.displayName}</span> ${verb} <a href="#">${!object.displayName}</a> in <a href="#">${!target.displayName}</a>' +
            '</div>'

    });
});




