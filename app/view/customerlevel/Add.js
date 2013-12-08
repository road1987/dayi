Ext.define('SP.view.customerlevel.Add' ,{
    extend: 'Ext.form.Panel',
    alias: 'widget.customerleveladd',

    title: '客户等级添加',
    defaultType: 'textfield',
    
    initComponent: function() {
    	this.items = [{
    	        fieldLabel: '等级名称',
    	        name: 'level-name',
    	        allowBlank: false
    	    },{
    	        fieldLabel: '等级描述',
    	        name: 'level-description',
    	        allowBlank: false
    	    }],
        this.callParent(arguments);
    }
});