Ext.define('SP.controller.CustomerType', {
    extend: 'Ext.app.Controller',

    views : [
    	"customertype.List"
    ],
    stores: [ 'CustomerType'],
    models : [ 'CustomerType' ],
    
    
    init: function() {
        this.control({
           "customertypelist button[action=add]": {
                click: this.addType
           },
           "customertypelist button[action=edit]": {
               click: this.editType
           },
           "customertypelist button[action=remove]": {
               click: this.removeType
           },
        });
    },
    
   	addType: function(grid, record) {
   		alert("add action!");
    },
    
    editType : function(){
    	alert('edit action');
    },
    
    removeType : function(){
    	alert('remove action');
    }
});