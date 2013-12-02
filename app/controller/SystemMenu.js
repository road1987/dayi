Ext.define('SP.controller.SystemMenu', {
    extend: 'Ext.app.Controller',
    stores : ['SystemMenu'],
    views : ['MainMenu' , 'SubMenu'],
    refs : [{
    	ref : 'submenu',
    	selector : "viewport > #sidebar > submenuview"
    },{
    	ref : 'mainmenu',
    	selector : "viewport > #header > mainmenuview"
    }],
    
    init: function() {
    	var me = this;

    	
        this.control({
        	"mainmenuview": {
        		selectionchange: me.showSubMenu
        	},
        	
        	"submenuview panel" : {
        		click : function(){
        			alert(this.className);
        		}
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
    }
});