Ext.define('SP.extend.util.XmlParserToTreeData', {
    statics: {
        getNodes: function (text) {
            var me = this,
                root = {},
                xml = null,
                valid = false;

            try {
                if (window.DOMParser) {
                    xml = new DOMParser().parseFromString(text, "text/xml");
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = false;
                    xml.loadXML(text);
                }
                valid = true;
            } catch (e) {
                Ext.Msg.alert('Error', e.message);
            }

            if (!xml || !valid) return;
            
            var data = xml.documentElement.getElementsByTagName('data')[0];

            if(!data){
            	 Ext.Msg.alert('Error', '未找到节点data,请重试!');
            }
            
            var nodes = data.childNodes;
            root.id = 0;
            root.expanded = true;
            root.children = [];
            Ext.each(nodes , function(node){
                if (node.nodeName == 'node') {
                    var n = {};
                    root.children.push(n);
                    me.fillNode(n, node);
                }
            });
            return root;
        },
        fillNode: function (parent, element) {
            var me = this;
            parent.id = element.getAttribute("id");
            parent.text = element.getAttribute("text");
            parent.description = element.getAttribute("description");
            if (!element.childNodes.length) {
                parent.leaf = true;
            } else {
                parent.children = [];
            }

            Ext.each(element.childNodes, function (el) {
                if (el.nodeName == 'children') {
                    Ext.each(el.childNodes, function (ch) {
                        if (ch.nodeName == 'node') {
                            var n = {};
                            parent.children.push(n);
                            me.fillNode(n, ch);
                        }
                    });
                }
            });
        }
    }
});