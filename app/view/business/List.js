Ext.define('SP.view.business.List' ,{
    extend: 'Ext.panel.Panel',
    requires : ['Ext.tab.Panel'],
    alias: 'widget.businesslist',

    id : 'businessMgrPanel',
    title: '渠道商信息',
	layout : 'border',
    initComponent: function() {
    	this.items = [{
        	xtype : 'panel',
        	itemId : 'complexQueryPanel',
            title : '复合查询',
        	region:'west',
            split:false,
            collapsible : true,
            collapsed : true,
            width: 320,
            layout: 'anchor',
            items : [{
    	        xtype : 'form',
    	        bodyPadding: 10,
        		anchor: '100%',
    	        buttonAlign: 'left',
    	        border : false,
	        	defaults : {
	        		xtype : 'textfield',
	        		flex : 1,
	        		padding : '0 60px 0 0',
	        		labelWidth : 80
	        	},
    	        items : [{
        	        	xtype : 'combobox',
        	        	editable: false, 
        	        	width : 300,
            	        fieldLabel: '渠道商类型',
            	        name: 'BusinessType',
            	        store : new SP.store.ChannelType(),
            	        displayField : 'value',
            	        valueField : 'id'
    	              },{
        	        	xtype : 'combobox',
        	        	width : 300,
        	        	editable: false, 
            	        fieldLabel: '渠道商级别',
            	        name: 'BusinessRank',
            	        allowBlank: true,
            	        store : new SP.store.ChannelLevel(),
            	        displayField : 'value',
            	        valueField : 'id'
        	        }]
    	 },{
    		xtype :'tabpanel',
    		margin : '0px 10px',
    		tabPosition : 'left',
    		anchor: '100% -120',
    		items : [{
    			title :'组织结构',
    			xtype : 'treepanel',
    			itemId : 'marketTree',
    			useArrows: true,
                model : 'SP.model.TreeNode',
                rootVisible: true
    		},{
    			title : '所属地区',
    			xtype : 'treepanel',
    			itemId : 'regionTree',
    			useArrows: true,
                model : 'SP.model.TreeNode',
                rootVisible: true        			
    		}]
    	 }]
    	},{
        	region : 'center',
        	xtype : 'grid',
        	store: 'Business',
        	plugins: [{
        		ptype: 'rowexpander',
        		rowBodyTpl : [
        		'<p>负责人：{manager}    店面名称:{name}</p>'
        		]
        	}],
        	tbar : {
        		rtl : false,
        	    items: ["->",{
        	    	width : 200,
        	    	name : "keyword",
            		xtype : "textfield",
            		emptyText: "授牌证号/负责人/店面名称"
        	    },{
        	    	text: "查询",
        	    	action : "queryByKeyword"
        	    },
        	    "->",{
        	    	action : "add",
        	        text: "添加"
        	    }, {
        	    	action : "edit",
        	        text: "编缉"
        	    },{
        	    	action : "remove",
        	    	text : "删除"
        	    }]
        	},
        	columns : [
        	            {header: '负责人',  dataIndex: 'manager',  flex: 1},
        	            {header: '店面名称', dataIndex: 'name', flex: 1},   
        	            {header: '授牌证号',  dataIndex: 'authorizationnumber',  flex: 1},            
        	            {header: '所属区域',  dataIndex: 'region_name',  flex: 1},
        	            {header: '所属市场部',  dataIndex: 'market_name',  flex: 1}, 
        	            {header: '地址',  dataIndex: 'address',  flex: 1},
        	            {header: '联系电话',  dataIndex: 'commonphone',  flex: 1},
        	            {header: '固定电话',  dataIndex: 'telphone',  flex: 1},
        	            {header: '传真',  dataIndex: 'fax',  flex: 1},        
        	            {header: '渠道商级别',  dataIndex: 'ServiceProviderRank_value',  flex: 1},
        	            {header: '备注', dataIndex: 'remark', flex: 1},
        	            {header: '渠道商类型', dataIndex: 'ServiceProviderType_value', flex: 1}
        	        ],
	        dockedItems : [{
	            xtype: 'pagingtoolbar',
	            store: 'Business',   // same store GridPanel is using
	            dock: 'bottom',
	            displayInfo: true
	        }]
    	}];
        this.callParent(arguments);
    }
});