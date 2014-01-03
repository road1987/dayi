Ext.define('SP.controller.Material', {
    extend: 'Ext.app.Controller',
    views : [
    	"material.List"
    ],
    stores: [ 'Material'],
    models : [ 'Material' ],
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'materialList',
        selector : "viewport > #main > materiallist"
    }],
    
    init: function() {
        this.control({
          "materiallist" : {
        	 render : function(comp){
        		 comp.getStore().load();
        	 }
           },
           "materialList button[action=add]": {
           },

           "materialList button[action=edit]": {
           },
          
           "materialList button[action=submit]" : {
           }
        });
    }//end of init
});