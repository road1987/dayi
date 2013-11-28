Ext.define('SP.view.MainMenu' ,{
	requires : ['SP.store.SystemMenu'],
    extend: 'Ext.view.View',
    alias: 'widget.mainmenuview',
	store : 'SystemMenu',
	cls : 'menu-main',
	
    initComponent : function(){
    	var me = this;
    	var tpl = '<ul><tpl for=".">' + 
    				'<li id="{id}">' +
    					'<a>' +
    						'<span class="icon-{id}"></span>{name}' +
    					'</a>' +
    				'</li>' + 
    			  '</tpl></ul>';
    	
    	Ext.apply(this, {
    		tpl : tpl,
    		itemSelector : ''
    	});
    	
    	/*
    	var store = Ext.data.StoreManager.lookup('SystemMenu');
    	var items = [];
    	store.each(function(){
    		items.push({
    			xtype : 'button',
    			margin : '10',
    			scale   : 'large',
    			height : 60,
    			id : this.data.id ,
    			text : this.data.name,
    			cls : 'btn-mainmenu',
    			toggleGroup : 'systemMenu'
    		})
    	});
    		
    	Ext.apply(this , {
    		items : items
    	});
*/
    	this.callParent();
    }
});