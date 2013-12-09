Ext.define('SP.store.CustomerLevel', {
    extend: 'Ext.data.Store',
    requires : 'SP.model.CustomerLevel',
    model : 'SP.model.CustomerLevel',
    autoLoad: true
});