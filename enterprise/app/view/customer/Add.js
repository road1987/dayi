Ext.define('SP.view.customer.Add' ,{
	requires : ['SP.store.CustomerType',
	            'SP.store.Business',
	            'SP.store.BusinessMode', 
	            'SP.store.CustomerLevel',
	            'SP.extend.ux.DateTimeField',
	            'SP.extend.ux.TreeCombo'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.customeradd',

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
    	        		editable: false, 
            	        format: 'Y-m-d'
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
    	        		editable: false, 
            	        name: 'market',
            	        allowBlank: false,
            	        store : null,
                        rootVisible: false
        	        },{
    	        		xtype : 'combobox',
            	        fieldLabel: '经销商',
                		emptyText: "授牌证号/负责人/店面名称",
            	        hideTrigger: false, 
            	       // typeAhead: true ,
            	        name: 'ServiceProvider',
            	        allowBlank: false,
    	        		store: new SP.store.Business(),//parameter could be {pageSize:10} etc.....
            	        displayField : 'name',
            	        valueField : 'id',
    	        		editable: false, 
            	        //minChars: 1,
            	        listConfig: {
            	                loadingText: 'Searching...',
            	                emptyText: 'No matching posts found.',

            	                // Custom rendering template for each item
            	                getInnerTpl: function() {
            	                    return '<div style="border-bottom:1px dotted gray;"><div>负责人:{manager}</div>' + '<div>{name}</div></div>';
            	                }
            	        }
            	       // queryParam : 'search-data',
            	       // pageSize: true
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
            	        fieldLabel: '客户类型',
            	        name: 'CustomerType',
            	        allowBlank: false,
            	        store : new SP.store.CustomerType(),
            	        displayField : 'value',
            	        valueField : 'id'
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
    	        		editable: false, 
            	        fieldLabel: '经营方式',
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
    	        },{
    	        	defaults : {
    	        		xtype : 'hiddenfield'
    	        	},
    	        	items : [{
            	        name: 'status',
            	        value: '1'
        	        },{
            	        name: 'coefficient',
            	        value: '1'
        	        },{
            	        name: 'StandardAmount',
            	        value: '1'
        	        },{
        	        	name : 'chargemarket',
        	        	value : '0'
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