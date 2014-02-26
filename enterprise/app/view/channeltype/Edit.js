Ext.define('SP.view.channeltype.Edit' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.channeltypeedit',

    title: '渠道商分类',
    initComponent: function() {
    	this.tbar = Ext.create("Ext.Toolbar", {
    	    items: [{
    	    	action : "back",
    	        text: "返回"
    	    }]
    	});
    	this.items = [{
    	        xtype : 'form',
    	        bodyPadding: 10,
    	        defaultType: 'textfield',
    	        buttonAlign: 'left',
    	        border : false,
    	        items : [{
    	        	fieldLabel: '分类名称',
        	        name: 'value',
        	        allowBlank: false
        	    },{
        	        fieldLabel: '分类描述',
        	        name: 'description',
        	        allowBlank: false
    	        }],
    	        buttons : [/*{
        	        text: '重置',
        	        handler: function() {
        	            this.up('form').getForm().reset();
        	        }
        	    },*/ {
        	    	text: '提交',
        	        formBind: true, //only enabled once the form is valid
        	        disabled: true,
        	        action : "submit"
        	    }]
    	 }];
        this.callParent(arguments);
    }
});