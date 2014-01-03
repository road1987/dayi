Ext.define('SP.store.Customer', {
    extend: 'Ext.data.Store',
    requires : ['SP.model.Customer'],
    model : 'SP.model.Customer',
    pageSize : 50
});