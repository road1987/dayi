Ext.define('SP.controller.SystemMenu', {
    extend: 'Ext.app.Controller',
    stores : ['SystemMenu'],
    refs: [
           {ref: 'SubMenuView', selector: 'submenu'}
    ],
       
    init: function() {
    	var me = this;
        this.control({
        	"mainmenu": {
        		selectionchange: me.onMainMenuSelectionChange
        	}
        });
    },
    
   	onMainMenuSelectionChange : function(view , records) {
        if (records.length) {
        	var subMenuView = this.getSubMenuView();
        	//var store = subMenuView.getStore().loadData(records[0].data.items);
        	//subMenuView.bindStore(store);
            alert(records[0].data.items[0].name);
        }
    }
});