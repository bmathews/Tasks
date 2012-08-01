define(["dojo/_base/declare", "dijit/_Widget", "dojo/dom", "dojo/dom-construct", "dojo/_base/lang"], function (declare, _Widget, dom, domConstruct, lang) {
    return declare(_Widget, {
        onClick: function (item) { },

        buildRendering: function () {
            this.domNode = domConstruct.create("li");
            this.domNode.innerHTML = "<span style='font-weight: 700'>" + this.item.title + "</span> - <span style='color: #666'>" + this.item.text + "</span>"
            this.domNode.onclick = lang.hitch(this, function () { 
                this.onClick(this.item) 
            });
        },
    });
});
