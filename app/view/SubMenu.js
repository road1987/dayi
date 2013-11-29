Ext.define('SP.view.SubMenu' ,{
    extend : 'Ext.panel.Panel',
    alias : 'widget.submenuview',
    stores : ['SystemMenu'],
    layout : 'accordion',
    
    initComponent : function(){
        var me = this;
        var store = Ext.data.StoreManager.lookup('SystemMenu');
        var items = [];
        
        store.each(function(){
        	var subMenuData = this.data.items;
        	var subItems = [];
        	if(subMenuData){
	        	Ext.each(subMenuData , function(){
	        		subItems.push({
	        			xtype : 'button',
	        			width : '100%',
	        			height : '30px',
	        			text : this.name,
	        			id : this.id,
	        			toggleGroup : 'subMenu'
	        		});
	        	});
        	}
        	var menuPanel = {
        		title : this.data.name,
        		items : subItems
        	};
        	items.push(menuPanel);
        });
        		
        Ext.apply(this , {
        	items : items
        });

        this.callParent();
     }
});