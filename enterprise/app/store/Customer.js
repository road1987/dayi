Ext.define('SP.store.Customer', {
    extend: 'Ext.data.Store',
    requires : ['SP.model.CustomerModel'],
    model : 'SP.model.CustomerModel',
    pageSize : 50
});