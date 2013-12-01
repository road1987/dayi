Ext.define('SP.view.SubMenu' ,{
    extend : 'Ext.panel.Panel',
    alias : 'widget.submenuview',
    stores : ['SystemMenu'],
    //layout : 'accordion',
    
    initComponent : function(){
        var me = this;
        var store = Ext.data.StoreManager.lookup('SystemMenu');
        var items = [];
        
        store.each(function(){
        	var subMenuData = this.data.items;
        	var menuListTpl = new Ext.XTemplate('<tpl for="."><div class="item">{name}</div></tpl>');
        	var menuPanel = {
        		title : this.data.name,
        		html : menuListTpl.apply(subMenuData),
        		itemSelector : '.item'
        	};
        	items.push(menuPanel);
        });
        		
        Ext.apply(this , {
        	items : items
        });

        this.callParent();
     }
});