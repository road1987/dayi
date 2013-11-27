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
    	this.buildSystemMenu();
    	alert();
    },
    
    showSubMenu : function(comp,evt) {
    	var systemMenuStore = this.getSystemMenuStore();
    	
    	systemMenuStore.each(function(){
    		alert(this.data.items[0].name);
    	});
    },
    
    buildSystemMenu : function(){

    }
    
});