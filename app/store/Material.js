Ext.define('SP.store.Material', {
    extend: 'Ext.data.Store',
    requires : ['SP.model.Material'],
    model : 'SP.model.Material',
    pageSize : 50
});