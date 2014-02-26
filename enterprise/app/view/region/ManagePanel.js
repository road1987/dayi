Ext.define('SP.view.region.ManagePanel' ,{
	requires : ['SP.model.Region','SP.model.TreeNode','SP.store.Region','SP.extend.util.XmlParserToTreeData'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.regionmanagepanel',
    
    id : 'regionMgrPanel',
    title: '地区字典',
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
            region:'west',
            border: false,
			xtype : 'treepanel',
			itemId : 'tree',
			useArrows: true,
            width: 320,
            bodyPadding :10,
            model : 'SP.model.TreeNode',
            rootVisible: true
		 },{
	        region:'center',
	        border: false,
			xtype : 'form',
	    	items : [{
    	        xtype : 'form',
    	        bodyPadding: 10,
    	        defaultType: 'textfield',
    	        buttonAlign: 'left',
    	        border : false,
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