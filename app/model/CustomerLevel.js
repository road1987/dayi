Ext.define('SP.model.CustomerLevel', {
	requires : ['SP.extend.data.writer.QueryString'],
    extend: 'Ext.data.Model',
    fields: ['id', 'value' , 'description' ,'amount' , 'minamount'  , 'maxamount'],
    proxy: {
        type: 'ajax',
        api : {
             read: 'platform/admin?actid=1001',
             create: 'platform/admin?actid=1002',
             update: 'platform/admin?actid=1003',
             destroy: ''
        },
        reader: {
            type: 'xml',
            root: 'data',
            record : 'CustomerRank',
            successProperty: 'state'
        },
        writer : {
        	type : 'querystring'
        }
    }
});