Ext.define('SP.store.CustomerType', {
    extend: 'Ext.data.Store',
    requires : 'SP.model.CustomerType',
    model : 'SP.model.CustomerType',
    autoLoad: true,
	
    proxy: {
        type: 'ajax',
        url: 'app/data/customer-type.json',
        reader: {
            type: 'json',
            root: 'customertype',
            successProperty: 'success'
        }
    }    
});