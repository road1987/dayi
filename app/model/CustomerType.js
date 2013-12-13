Ext.define('SP.model.CustomerType', {
	requires : ['SP.extend.data.writer.QueryString'],
    extend: 'Ext.data.Model',
    fields: ['id', 'value' , 'description'],
    proxy: {
        type: 'ajax',
        api : {
             read: 'platform/admin?actid=1011',
             create: 'platform/admin?actid=1012',
             update: 'platform/admin?actid=1013',
             destroy: ''
        },
        reader: {
            type: 'xml',
            root: 'data',
            record : 'CustomerType',
            successProperty: 'state'
        },
        writer : {
        	type : 'querystring'
        }
    }
});