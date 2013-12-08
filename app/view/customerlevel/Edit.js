Ext.define('SP.view.customerlevel.Edit' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.customerleveledit',

    title: '客户等级',
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
    	        url : "",
    	        items : [{
    	        	fieldLabel: '等级名称',
        	        name: 'name',
        	        allowBlank: false
        	    },{
        	        fieldLabel: '等级描述',
        	        name: 'description',
        	        allowBlank: false
    	        }],
    	        buttons : [{
        	        text: '重置',
        	        handler: function() {
        	            this.up('form').getForm().reset();
        	        }
        	    }, {
        	        text: '提交',
        	        formBind: true, //only enabled once the form is valid
        	        disabled: true,
        	        handler: function() {
        	            var form = this.up('form').getForm();
        	            if (form.isValid()) {
        	                form.submit({
        	                    success: function(form, action) {
        	                       Ext.Msg.alert('Success', action.result.msg);
        	                    },
        	                    failure: function(form, action) {
        	                        Ext.Msg.alert('Failed', action.result.msg);
        	                    }
        	                });
        	            }
        	        }
        	    }]
    	 }];
        this.callParent(arguments);
    }
});