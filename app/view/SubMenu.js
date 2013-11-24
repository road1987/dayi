Ext.define('SP.view.SubMenu' ,{
    extend : 'Ext.view.View',
    alias : 'widget.submenu',
    store : 'CurrentMenu', 

    initComponent: function() {
    	Ext.apply(this , {
    		cls  : 'submenu',
    	    tpl : '<tpl for="items"><div class="menuitem">{name}</div></tpl>',
    	    itemSelector : '.menuitem'
    	});
        this.callParent();
    }
});