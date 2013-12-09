Ext.define('SP.store.CustomerType', {
    extend: 'Ext.data.Store',
    requires : 'SP.model.CustomerType',
    model : 'SP.model.CustomerType',
    autoLoad: true,
	
    proxy: {
        type: 'ajax',
        url: 'app/data/customer-type.xml',
        reader: {
            type: 'xml',
            root: 'customertype',
            record : 'type',
            successProperty: 'success'
        }
    }    
});