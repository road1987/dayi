Ext.define('SP.store.Business', {
    extend: 'Ext.data.Store',
    requires : ['SP.model.Business'],
    model : 'SP.model.Business',
    pageSize : 50
});