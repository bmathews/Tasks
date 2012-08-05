define([
    "dojo/_base/declare", 
    "dijit/_Widget", 
    "dojo/dom", 
    "dojo/dom-construct", 
    "dojo/dom-class", 
    "dojo/_base/connect", 
    "dojo/_base/lang"
], function (
    declare,
    _Widget, 
    dom, 
    domConstruct,
    domClass,
    connect, 
    lang
) {
    return declare("js.navigation", _Widget, {
        selectedNode: null,

        buildRendering: function () {
            var i;
            this.domNode = domConstruct.create("div", { className: "subnav" });
            this.containerNode = domConstruct.create("ul", { className: "nav nav-tabs"}, this.domNode);

            for (i = 0; i < this.items.length; i +=1 ) {
                this.createNavItem(this.items[i]);
            }
            this.selectedNode = this.containerNode.children[0];
            this.selectNavigation(this.items[0], this.containerNode.children[0]);
        },

        createNavItem: function (item) {
            var itemNode,
            itemNode = domConstruct.create("li", { innerHTML: "<a href='#'>" + item + "</a>" }, this.containerNode);
            itemNode.onclick = lang.hitch(this, function () {
                this.handleNavClick(item, itemNode);
            });
        },

        handleNavClick: function (itemName, itemNode) {
            this.selectNavigation(itemName, itemNode);
            this.onNavClick(itemName, itemNode); 
        },

        selectNavigation: function (itemName, itemNode) {
            domClass.remove(this.selectedNode, "active");
            domClass.add(itemNode, "active");
            this.selectedNode = itemNode;
        },

        onNavClick: function (itemName, itemNode) { }
        
    });
});

