Ext.define('SP.model.CustomerLevel', {
	requires : ['SP.extend.data.writer.QueryString'],
    extend: 'Ext.data.Model',
    fields: ['id', 
             'value' , 
             'description' ,
             {name: 'amount',   defaultValue: 0} ,
             {name: 'minamount',   defaultValue: 0},
             {name: 'maxamount',   defaultValue: 0}],
             
    proxy: {
        type: 'ajax',
        api : {
             read: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1001',
             create: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1002',
             update: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1003',
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