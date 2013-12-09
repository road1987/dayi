Ext.define('SP.store.CustomerLevel', {
    extend: 'Ext.data.Store',
    requires : 'SP.model.CustomerLevel',
    model : 'SP.model.CustomerLevel',
    autoLoad: true,
	
    proxy: {
        type: 'ajax',
        url: 'app/data/customer-level.xml',
        reader: {
            type: 'xml',
            root: 'customerlevel',
            record : 'level',
            successProperty: 'success'
        }
    }
});