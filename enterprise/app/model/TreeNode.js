Ext.define('SP.model.TreeNode', {
    extend: 'Ext.data.Model',
    fields: [{'name':'id'}, 
             {'name':'text',mapping : 'text'} , 
             {'name':'value',mapping: 'text'},
             {'name':'description'},
             {'name':'parentid'}]
});