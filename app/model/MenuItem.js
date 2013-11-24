Ext.define('SP.model.MenuItem', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name' , 'description' , 'items'],
    hasMany : {model : 'SP.model.MenuItem' , name : 'items'}
});