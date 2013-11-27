Ext.define('SP.view.MainMenu' ,{
	requires : ['SP.store.SystemMenu'],
    extend: 'Ext.container.Container',
    alias: 'widget.mainmenuview',
	stores : ['SystemMenu'],
    style : 'text-align : center ',
	
    initComponent : function(){
    	var me = this;
    	var store = Ext.data.StoreManager.lookup('SystemMenu');
    	var items = [];
    	store.each(function(){
    		items.push({
    			xtype : 'button',
    			margin : '10',
    			scale   : 'large',
    			id : this.data.id ,
    			text : this.data.name,
    			toggleGroup : 'systemMenu'
    		})
    	});
    		
    	Ext.apply(this , {
    		items : items
    	});

    	this.callParent();
    }
});