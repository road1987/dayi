Ext.define('SP.model.Region', {
	requires : ['SP.extend.data.writer.QueryString'],
    extend: 'Ext.data.Model',
    fields: [{'name':'id'}, {'name':'text' , 'mapping':'@text'} , {'name':'description'}],
    proxy: {
        type: 'ajax',
        api : {
             read: 'app/data/region.xml',
             create: 'platform/admin?actid=1002',
             update: 'platform/admin?actid=1003',
             destroy: ''
        },
        reader: {
            type: 'xml',
            root: 'regions',
            record : 'region',
            successProperty: 'state'
        },
        writer : {
        	type : 'querystring'
        }
    }
});