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
    return declare("js.gadgets.baseGadget", [_Widget, _Templated], {
        templateString: 
            '<div class="span4">' +
                '<div>' +
                    '<h5><i class="${iconClass}"></i> ${title}</h5>' +
                '</div>' +
                '<div class="well" data-dojo-attach-point="containerNode">' +
                '</div>' +
            '</div>'
    });
});
