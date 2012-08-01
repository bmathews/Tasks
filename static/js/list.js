define(["./listitem", "dojo/_base/declare", "dijit/_Widget", "dojo/dom", "dojo/dom-construct", "dojo/_base/connect", "dojo/_base/lang"], function (ListItem, declare, _Widget, dom, domConstruct, connect, lang) {
    return declare(_Widget, {

        buildRendering: function () {
            this.domNode = domConstruct.create("ul");
        },

        handleClick: function (item) {
            this.onDelete(item);
        },

        onDelete: function (item) { },

        render: function (items) {
            console.log(items);
            for (var i = 0; i < items.length; i += 1) {
                var item = new ListItem({item: items[i]});
                this.domNode.appendChild(item.domNode);
                connect.connect(item, "onClick", this, "handleClick");
            }
        }

        
    });
});
