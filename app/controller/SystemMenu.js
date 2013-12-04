Ext.define('SP.controller.SystemMenu', {
    extend: 'Ext.app.Controller',
    stores : ['SystemMenu'],
    views : ['MainMenu' , 'SubMenu'],
    
    refs : [{
    	ref : 'mainmenu',
    	selector : "viewport > #header > mainmenuview"
    },{
    	ref : 'submenu',
    	selector : "viewport > #sidebar > submenuview"
    },{
    	ref : 'submenuitem',
    	selector : "viewport > #sidebar > dataview"
    }],
    
    init: function() {
    	var me = this;

    	
        this.control({
        	"mainmenuview": {
        		selectionchange: me.showSubMenu
        	},
        	
        	"submenuview > dataview": {
        		selectionchange: me.showContent
        	}       	
        });
    },
    
    onLaunch : function(){
    	this.getMainmenu().getSelectionModel().select(0);
    },
    
    showSubMenu : function(comp,record,evt) {
    	var index = record[0].index;
    	var subMenuView = this.getSubmenu();
    		subMenuView.getLayout().setActiveItem(index);
    		
    	var subMenuItem = subMenuView.getLayout().getActiveItem();
    		subMenuItem.getSelectionModel().select(0);
    		
    },
    
    showContent : function(comp,record,evt){
    	//alert(record[0].data.id);
    }
});