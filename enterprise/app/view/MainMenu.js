Ext.define('SP.view.MainMenu' ,{
	requires : ['SP.store.SystemMenu'],
    extend: 'Ext.view.View',
    alias: 'widget.mainmenuview',
	store : 'SystemMenu',
	cls : 'menu-main',
	
    initComponent : function(){
    	var me = this;
    	var tpl = '<ul><tpl for=".">' + 
    				'<li id="{id}" class="js-main-menuitem">' +
    					'<a href="#">' +
    						'<span class="icon-{id}"></span>{name}' +
    					'</a>' +
    				'</li>' + 
    			  '</tpl></ul>';
    	
    	Ext.apply(this, {
    		tpl : tpl,
            selModel: {
                deselectOnContainerClick: false
            },
    		itemSelector : 'li.js-main-menuitem'
    	});

    	this.callParent();
    }
});