Ext.define('SP.view.SubMenu' ,{
    extend : 'Ext.container.Container',
    alias : 'widget.submenuview',
    stores : ['SystemMenu'],
        
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
        	var menuPanel = Ext.create("Ext.panel.Panel" , {
        		title : this.data.name,
        		items : subItems,
        		margin : '0px 0px 10px 0px',
        		height : '100px'
        	});
        	items.push(menuPanel);
        });
        		
        Ext.apply(this , {
        	items : items
        });

        this.callParent();
     }
});