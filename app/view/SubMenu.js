Ext.define('SP.view.SubMenu' ,{
    extend : 'Ext.panel.Panel',
    alias : 'widget.submenuview',
    stores : ['SystemMenu'],
    layout : 'card',
    
    initComponent : function(){
        var me = this;
        var store = Ext.data.StoreManager.lookup('SystemMenu');
        var items = [];
        
        store.each(function(){
        	var subMenuData = this.data.items;
        	var tpl = ['<div class="menulist">',
        	           	'<tpl for=".">',
        	           		'<a class="menuitem" href="#">',
        	           		 '<div>{name}</div>',
        	           		 '</a>',
        	           	'</tpl>',
        	           	'</div>'].join("");
        	
        	var menuListTpl = new Ext.XTemplate(tpl);
//        	var menuPanel = {
//        		//title : this.data.name,
//        		html : menuListTpl.apply(subMenuData),
//        		xtype : 'container',
//        		itemSelector : '.item'
//        	};
        	var menu = Ext.create("Ext.view.View",{
        		tpl : tpl ,
        		store : new Ext.data.Store({
            	    fields: ['id', 'name' , 'description' ,'items'],
        			data : this.data.items
        		}),
        		itemSelector : '.menuitem'
        	});
        	items.push(menu);
        });
        		
        Ext.apply(this , {
        	items : items
        });

        this.callParent();
     }
});