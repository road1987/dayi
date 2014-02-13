Ext.define('SP.view.distributeplan.List' ,{
	requires : ['Ext.ux.grid.column.ActionButtonColumn'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.distributeplanlist',
    
    id : 'distributePlanListPanel',
    title: '配货计划查询',
	layout : 'border',
    initComponent: function() {
    	this.items = [/*{
            	xtype : 'panel',
                title : '复合查询',
            	region: 'west',
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
            },*/{
	            	region : 'center',
	            	xtype :'tabpanel',
	        		tabPosition : 'left',
                	tbar : {
                		rtl : false,
                	    items: ["->",{
                	    	width : 200,
                    		xtype : "textfield",
                    		emptyText: "计划名称"
                	    },{
                	    	text: "查询",
                	    	action : "search"
                	    },
                	    "->"/*,{
                	    	action : "add",
                	        text: "添加"
                	    }, {
                	    	action : "edit",
                	        text: "编缉"
                	    },{
                	    	action : "remove",
                	    	text : "删除"
                	    }*/]
                	},
	            	items : [{
	            		title : '所有计划',
	            		xtype : 'grid',
	                	store: 'DistributePlan',
	                	columns : [
	                	            {header: '计划名称',  dataIndex: 'name',  flex: 1 },
	                	            //{header: '类型', dataIndex: 'type', flex: 1},   
	                	            {header: '状态',  dataIndex: 'status',  flex: 1},            
	                	            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1}
	                	 ],
	                     dockedItems : [{
	                         xtype: 'pagingtoolbar',
	                         store: 'DistributePlan',   // same store GridPanel is using
	                         dock: 'bottom',
	                         displayInfo: true
	                     }]
	            	},{
	            		title : '待审核',
	            		xtype : 'grid',
	                	store: 'DistributePlanDraft',
	                	columns : [
	                	            {header: '计划名称',  dataIndex: 'name',  flex: 1 },
	                	            //{header: '类型', dataIndex: 'type', flex: 1},   
	                	            {header: '状态',  dataIndex: 'status',  flex: 1},            
	                	            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1},
	                	            {header : '操作' , xtype : 'actionbuttoncolumn',  width : 200, items : [{
	                	            		iconCls:'icon-edit',
	                	            		action : 'view-detail',
	                	            		text : '查看详细',
	                	                    handler: function(grid, rowIndex, colIndex) {
	                	                        this.up('grid').fireEvent('viewdetailbuttonclick', grid, rowIndex, colIndex);
	                	                    }
	                	            	},{
	                	            		action : 'action-audited',
	                	            		text : '审核通过',
	                	                    handler: function(grid, rowIndex, colIndex) {
	                	                        this.up('grid').fireEvent('changestatusbuttonclick', grid, rowIndex, colIndex);
	                	                    }
	                	            	}]
	                	            },
	                	 ],
	                     dockedItems : [{
	                         xtype: 'pagingtoolbar',
	                         store: 'DistributePlanDraft',   // same store GridPanel is using
	                         dock: 'bottom',
	                         displayInfo: true
	                     }]
	            	},{
	            		title : '待执行',
	            		xtype : 'grid',
	                	store: 'DistributePlanUnpublish',
	                	columns : [
	                	            {header: '计划名称',  dataIndex: 'name',  flex: 1 },
	                	            //{header: '类型', dataIndex: 'type', flex: 1},   
	                	            {header: '状态',  dataIndex: 'status',  flex: 1},            
	                	            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1},
	                	            {header : '操作' , xtype : 'actioncolumn' , width : 200, 
	                	            	items : [{
			                	            altText : '<a href="javascript:void(0)">sdf</a>',
			                	            icon : 'icon-baseInfoMgr'
	                	            	}]
	                	             }
	                	 ],
	                     dockedItems : [{
	                         xtype: 'pagingtoolbar',
	                         store: 'DistributePlanUnpublish',   // same store GridPanel is using
	                         dock: 'bottom',
	                         displayInfo: true
	                     }]
	            	},{
	            		title : '执行中',
		            	xtype : 'grid',
		                store: 'DistributePlanInProcess',
		                columns : [
		                	            {header: '计划名称',  dataIndex: 'name',  flex: 1 },
		                	            //{header: '类型', dataIndex: 'type', flex: 1},   
		                	            {header: '状态',  dataIndex: 'status',  flex: 1},            
		                	            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1}
		                ],
		                dockedItems : [{
		                         xtype: 'pagingtoolbar',
		                         store: 'DistributePlanInProcess',   // same store GridPanel is using
		                         dock: 'bottom',
		                         displayInfo: true
		                 }]
	            	},{
	            		title : '已完成',
		            	xtype : 'grid',
		                store: 'DistributePlanFinished',
		                columns : [
		                	            {header: '计划名称',  dataIndex: 'name',  flex: 1 },
		                	            //{header: '类型', dataIndex: 'type', flex: 1},   
		                	            {header: '状态',  dataIndex: 'status',  flex: 1},            
		                	            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1}
		                ],
		                dockedItems : [{
		                         xtype: 'pagingtoolbar',
		                         store: 'DistributePlanFinished',   // same store GridPanel is using
		                         dock: 'bottom',
		                         displayInfo: true
		                 }]
	            	}]
            	}];
        this.callParent(arguments);
    }
});