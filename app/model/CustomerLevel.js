Ext.define('SP.model.CustomerLevel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name' , 'description'],
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