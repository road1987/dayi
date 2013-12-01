Ext.define('SP.controller.SystemMenu', {
    extend: 'Ext.app.Controller',
    stores : ['SystemMenu'],
    views : ['MainMenu' , 'SubMenu'],
       
    init: function() {
    	var me = this;
        this.control({
        	"mainmenuview button": {
        		click: me.showSubMenu
        	}
        });
    },
    
    onLaunch : function(){
    	var mainMenu = this.getMainMenuView();

    },
    
    showSubMenu : function(comp,evt) {

    }
    
});