Ext.define('SP.view.market.ManagePanel' ,{
	requires : ['SP.model.Market','SP.model.TreeNode','SP.store.Market','SP.extend.util.XmlParserToTreeData'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.marketmanagepanel',
    
    id : 'marketMgrPanel',
    title: '市场部',
	layout : 'border',
	
	initComponent: function() {
    	var me = this;
    	this.tbar = Ext.create("Ext.Toolbar", {
    	    items: [{
    	    	action : "add",
    	        text: "添加子节点"
    	    }]
    	});
    	this.items = [{	
    		region:'center',
            margin: '0 0 5 0',
            border: false,
			xtype : 'treepanel',
			itemId : 'tree',
			useArrows: true,
            model : 'SP.model.TreeNode',
            rootVisible: true,
            columns :[{
            	xtype: 'treecolumn', //this is so we know which column will show the tree
                text: '市场部',
                flex: 1,
                sortable: true,
                dataIndex: 'text'
            },{
                text: 'ID',
                flex: 1,
                dataIndex: 'id',
                sortable: true
            },{
                text: '描述',
                flex: 1,
                dataIndex: 'description',
                sortable: true
            }]
		 },{
	        region:'south',
	        border: false,
	        layout:'anchor',
			xtype : 'form',
	    	items : [{
    	        xtype : 'form',
    	        bodyPadding: 10,
    	        defaultType: 'textfield',
    	        buttonAlign: 'left',
    	        border : false,
    	        layout: {
                    type: 'hbox',
                    padding:'5',
                    align:'top'
                },
    	        items : [{
    	        	fieldLabel: 'ID',
    	        	xtype: 'hiddenfield',
        	        name: 'id',
        	        allowBlank: true
        	    },{
    	        	fieldLabel: 'PID',
    	        	xtype: 'hiddenfield',
        	        name: 'parentid',
        	        allowBlank: true
        	    },{
    	        	fieldLabel: '名称',
        	        name: 'value',
        	        allowBlank: false
        	    },{
        	        fieldLabel: '描述',
        	        name: 'description',
        	        allowBlank: true
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
    	 }]
		}];
        this.callParent(arguments);
    }
});