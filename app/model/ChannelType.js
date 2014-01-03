Ext.define('SP.model.ChannelType', {
    extend: 'Ext.data.Model',
    requires : ['SP.extend.data.writer.QueryString'],
    fields: ['id','value', 'description'],
    proxy: {
        type: 'ajax',
        api : {
            read: 'platform/admin?actid=1031',
            create: 'platform/admin?actid=1032',
            update: 'platform/admin?actid=1033',
            destroy: ''
       },
        reader: {
            type: 'xml',
            root: 'data',
            record : 'ServiceProviderType',
            successProperty: 'state'
        },
        writer : {
        	type : 'querystring'
        }
    }
});