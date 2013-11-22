Ext.define('SP.store.Customers', {
    extend: 'Ext.data.Store',
    
		model : 'SP.model.Customer',
		
		autoLoad: true,
		
    proxy: {
        type: 'ajax',
        url: 'app/data/customers.json',
        reader: {
            type: 'json',
            root: 'customers',
            successProperty: 'success'
        }
    }
    
});