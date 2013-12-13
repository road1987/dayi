Ext.define('SP.controller.Customers', {
    extend: 'Ext.app.Controller',

    views : [
    	"customer.List",
    	"customer.Edit"
    ],
    stores: [ 'Customers'],
    models : [ 'Customer' ],
    
    init: function() {
        this.control({
        	//"viewport" : { render : function(){ alert("viewport render") }}	,
           "customerlist": {
             //   itemdblclick: this.editUser
           },
           
           "customeredit button[action=save]" : {
           		click : this.updateCustomer
           }
        });
    },
    
    
    updateCustomer : function(button){
	   var  win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(),
	        values = form.getValues();
	
	    record.set(values);
	    win.close();
    }
});