Ext.define('SP.view.distributeplan.List' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.distributeplanlist',

    id : 'distributePlanListPanel',
    title: '配货计划查询',
	layout : 'border',
    initComponent: function() {
    	this.items = [{
            	xtype : 'panel',
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
                	        fieldLabel: '客户类型',
                	        name: 'CustomerType',
                	        store : new SP.store.CustomerType(),
                	        displayField : 'value',
                	        valueField : 'id'
        	              },{
        	        		xtype : 'combobox',
            	        	width : 300,
        	        		editable: false, 
                	        fieldLabel: '经营方式',
                	        name: 'BusinessMode',
                	        store : new SP.store.BusinessMode(),
                	        displayField : 'value',
                	        valueField : 'id'
            	           },{
            	        	xtype : 'combobox',
            	        	width : 300,
            	        	editable: false, 
                	        fieldLabel: '店面级别',
                	        name: 'CustomerRank',
                	        allowBlank: true,
                	        store : new SP.store.CustomerLevel(),
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
            	store: 'Customer',
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
                		xtype : "textfield",
                		emptyText: "授牌证号/负责人/店面名称"
            	    },{
            	    	text: "查询",
            	    	action : "search"
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
            	            {header: '负责人',  dataIndex: 'manager',  flex: 1 },
            	            {header: '店面名称', dataIndex: 'name', flex: 1},   
            	            {header: '授牌证号',  dataIndex: 'authorizationnumber',  flex: 1},            
            	            {header: '所属区域',  dataIndex: 'region_name',  flex: 1},
            	            {header: '所属市场部',  dataIndex: 'market_name',  flex: 1, hidden:true }, 
            	            {header: '经销商',  dataIndex: 'ServiceProvider_name',  flex: 1},      
            	            {header: '地址',  dataIndex: 'address',  flex: 1 , hidden:true },
            	            {header: '联系电话',  dataIndex: 'commonphone',  flex: 1, hidden:true },
            	            {header: '固定电话',  dataIndex: 'telphone',  flex: 1, hidden:true },
            	            {header: '自营/联营',  dataIndex: 'BusinessMode_value',  flex: 1, hidden:true },        
            	            {header: '店面级别',  dataIndex: 'CustomerRank_value',  flex: 1, hidden:true },
            	            {header: '授牌日期', dataIndex: 'authorizationdate', flex: 1, hidden:true },
            	            {header: '备注', dataIndex: 'remark', flex: 1, hidden:true },
            	            {header: '客户类型', dataIndex: 'CustomerType_value', flex: 1, hidden:true }
            	 ],
                 dockedItems : [{
                     xtype: 'pagingtoolbar',
                     store: 'Customer',   // same store GridPanel is using
                     dock: 'bottom',
                     displayInfo: true
                 }]
    	}];
        this.callParent(arguments);
    }
});