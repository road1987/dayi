Ext.define('SP.model.Market', {
	requires : ['SP.extend.data.writer.QueryString'],
    extend: 'Ext.data.Model',
    fields: [{'name':'id' , 'mapping' : '@id'}, 
             {'name':'text','mapping' : '@text'} , 
             {'name':'value','mapping': '@text'},
             {'name':'description' , 'mapping' : '@description'},
             {'name':'parentid' , 'mapping' : '@parentid' }],
    proxy: {
                 type: 'ajax',
                 api : {
                      //read: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1061',
                      create: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1052',
                      update: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1053'
                      //destroy: ''
                 },
                 reader: {
                     type: 'xml',
                     root: 'data',
                     record : 'node',
                     successProperty: 'state'
                 },
                 writer : {
                 	type : 'querystring'
                 }
     }
});