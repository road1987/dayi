Ext.define('SP.view.business.Add' ,{
	requires : ['SP.store.ChannelType', 'SP.store.BusinessMode', 'SP.store.ChannelLevel','SP.extend.ux.DateTimeField','SP.extend.ux.TreeCombo'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.businessadd',

    title: '渠道商信息',
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
            	        editable: false, 
            	        rootVisible: false,
            	        store : null
        	        },{
        	        	xtype : 'treecombo',
        	        	editable: false, 
            	        fieldLabel: '所属区域',
            	        name: 'region',
            	        allowBlank: false,
            	        rootVisible: false,
            	        store : null
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
            	        fieldLabel: '渠道商类型',
            	        name: 'ServiceProviderType',
            	        allowBlank: false,
            	        store : new SP.store.ChannelType(),
            	        displayField : 'value',
            	        valueField : 'id'
        	        },{
        	        	xtype : 'combobox',
        	        	editable: false, 
            	        fieldLabel: '渠道商级别',
            	        name: 'ServiceProviderRank',
            	        allowBlank: false,
            	        store : new SP.store.ChannelLevel(),
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
            	        fieldLabel: '传真',
            	        name: 'fax',
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
    	        },{
    	        	defaults : {
    	        		xtype : 'hiddenfield',
    	        		flex : 1,
    	        		padding : '0 60px 0 0'
    	        	},
    	        	items : [{
            	        name: 'status',
            	        value: '1'
        	        },{
            	        name: 'coefficient',
            	        value: '1'
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