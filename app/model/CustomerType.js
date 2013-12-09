Ext.define('SP.model.CustomerType', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name' , 'description'],
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