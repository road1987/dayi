Ext.define('SP.model.ChannelLevel', {
    extend: 'Ext.data.Model',
    requires : ['SP.extend.data.writer.QueryString'],
    fields: ['id', 'value', 'description'],
    proxy: {
        type: 'ajax',
        api : {
            read: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1021',
            create: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1022',
            update: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1023',
            destroy: ''
       },
        reader: {
            type: 'xml',
            root: 'data',
            record : 'ServiceProviderRank',
            successProperty: 'state'
        },
        writer : {
        	type : 'querystring'
        }
    }
});