Ext.define('SP.model.Province',{
	extend: 'Ext.data.Model',
	fields: ['id','name','leaf'],
	belongsTo: 'SP.model.Area'
});