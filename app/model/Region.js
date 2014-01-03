Ext.define('SP.model.Region', {
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
                      //read: 'platform/admin?actid=1061',
                      create: 'platform/admin?actid=1062',
                      update: 'platform/admin?actid=1063'
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