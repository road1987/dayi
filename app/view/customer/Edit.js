Ext.define('SP.view.customer.Edit' ,{
	requires : ['SP.store.CustomerType',
	            'SP.store.Business',
	            'SP.store.BusinessMode', 
	            'SP.store.CustomerLevel',
	            'SP.extend.ux.DateTimeField',
	            'SP.extend.ux.TreeCombo'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.customeredit',

    title: '客户信息',
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
    	        buttonAlign: 'left',
    	        border : false,
    	        width : '800px',
    	        layout: {
    	            type: 'vbox',
    	            align: 'stretch'
    	        }, 
    	        defaults: {
    	            xtype: 'container',
    	            padding : '5px',
    	            layout: {
    	                type: 'hbox'
    	            }
    	        },
    	        items : [{
    	        	defaults : {
    	        		xtype : 'textfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
						fieldLabel: '负责人',
						name: 'manager',
						allowBlank: false
					 },{
						fieldLabel: '店面名称',
						name: 'name',
						allowBlank: false
					}]
    	        },{
    	        	defaults : {
    	        		xtype : 'textfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
            	        fieldLabel: '授牌证号',
            	        name: 'authorizationnumber',
            	        allowBlank: false
        	        },{
        	        	xtype : 'datetimefield',
            	        fieldLabel: '授牌日期',
            	        name: 'authorizationdate',
            	        allowBlank: false,
            	        format: 'Y-m-d',
        	        }]
    	        },{ 
    	        	defaults : {
    	        		xtype : 'textfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
        	        	xtype : 'treecombo',
            	        fieldLabel: '所属市场部',
            	        name: 'market',
            	        allowBlank: false,
            	        store : null,
                        rootVisible: false
        	        },{
        	        	xtype : 'treecombo',
        	        	editable: false, 
            	        fieldLabel: '所属区域',
            	        name: 'region',
            	        allowBlank: false,
            	        store : null,
                        rootVisible: false
        	        }]
    	        },{
    	        	defaults : {
    	        		xtype : 'textfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
    	        		xtype : 'combobox',
            	        fieldLabel: '经销商',
            	        hideTrigger: true, 
            	        typeAhead: true ,
            	        name: 'ServiceProvider',
            	        allowBlank: false,
    	        		store: new SP.store.Business(),
            	        displayField : 'name',
            	        valueField : 'id',
            	        minChars: 1
        	        },{
        	        	xtype : 'combobox',
        	        	editable: false, 
            	        fieldLabel: '客户类型',
            	        name: 'CustomerType',
            	        allowBlank: false,
            	        store : new SP.store.CustomerType(),
            	        displayField : 'value',
            	        valueField : 'id'
        	        }]
    	        },{
    	        	defaults : {
    	        		xtype : 'textfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
    	        		xtype : 'combobox',
    	        		editable: false, 
            	        fieldLabel: '自营/联营',
            	        name: 'BusinessMode',
            	        allowBlank: false,
            	        store : new SP.store.BusinessMode(),
            	        displayField : 'value',
            	        valueField : 'id'
        	        },{
        	        	xtype : 'combobox',
        	        	editable: false, 
            	        fieldLabel: '店面级别',
            	        name: 'CustomerRank',
            	        allowBlank: false,
            	        store : new SP.store.CustomerLevel(),
            	        displayField : 'value',
            	        valueField : 'id'
        	        }]
    	        },{
    	        	defaults : {
    	        		xtype : 'textfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
            	        fieldLabel: '联系电话',
            	        name: 'commonphone',
            	        allowBlank: false
        	        },{
            	        fieldLabel: '固定电话',
            	        name: 'telphone',
            	        allowBlank: false
        	        }]
    	        },{
    	        	defaults : {
    	        		xtype : 'textfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
            	        fieldLabel: '地址',
            	        name: 'address',
            	        allowBlank: false
        	        }]
    	        },{
    	        	defaults : {
    	        		xtype : 'textfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
            	        fieldLabel: '备注',
            	        name: 'remark',
            	        allowBlank: true
        	        }]
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