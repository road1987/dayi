Ext.define('SP.model.BusinessMode', {
    extend: 'Ext.data.Model',
    requires : ['SP.extend.data.writer.QueryString'],
    fields: ['id', 'value', 'description'],
    proxy: {
        type: 'ajax',
        api : {
            read: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1041',
            create: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1042',
            update: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1043',
            destroy: ''
       },
        reader: {
            type: 'xml',
            root: 'data',
            record : 'BusinessMode',
            successProperty: 'state'
        },
        writer : {
        	type : 'querystring'
        }
    }
});