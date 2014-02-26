Ext.define('SP.view.distributeplan.List' ,{
	requires : ['Ext.ux.grid.column.ActionButtonColumn'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.distributeplanlist',
    
    id : 'distributePlanListPanel',
    title: '配货计划查询',
	layout : 'border',
    initComponent: function() {
    	this.items = [{
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
	                	            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1},
	                	            {header : '操作' , xtype : 'actionbuttoncolumn',  width : 200, items : [{
	                	            		action : 'view-detail',
	                	            		text : '查看详细',
	                	                    handler: function(grid, rowIndex, colIndex) {
	                	                        this.up('grid').fireEvent('viewdetailbuttonclick', grid, rowIndex, colIndex);
	                	                    }
                	            		}]
	                	            }
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
	                	            		action : 'view-detail',
	                	            		text : '查看详细',
	                	                    handler: function(grid, rowIndex, colIndex) {
	                	                        this.up('grid').fireEvent('viewdetailbuttonclick', grid, rowIndex, colIndex);
	                	                    }
	                	            	},{
	                	            		action : 'action-audited',
	                	            		text : '审核通过',
	                	                    handler: function(grid, rowIndex, colIndex) {
	                	                        this.up('grid').fireEvent('changestatusbuttonclick', grid, rowIndex, colIndex , 'audited');
	                	                    }
	                	            	}]
	                	            }
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
	                	            {header : '操作' , xtype : 'actionbuttoncolumn',  width : 200, items : [{
                	            		action : 'view-detail',
                	            		text : '查看详细',
                	                    handler: function(grid, rowIndex, colIndex) {
                	                        this.up('grid').fireEvent('viewdetailbuttonclick', grid, rowIndex, colIndex);
                	                    }
	                	            	},{
	                	            		action : 'action-audited',
	                	            		text : '发布信息',
	                	                    handler: function(grid, rowIndex, colIndex) {
	                	                        this.up('grid').fireEvent('changestatusbuttonclick', grid, rowIndex, colIndex , 'publish');
	                	                    }
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
		                	            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1},
		                	            {header : '操作' , xtype : 'actionbuttoncolumn',  width : 200, items : [{
		                	            		action : 'view-detail',
		                	            		text : '查看详细',
		                	                    handler: function(grid, rowIndex, colIndex) {
		                	                        this.up('grid').fireEvent('viewdetailbuttonclick', grid, rowIndex, colIndex);
		                	                    }
		                	            	}]
		                	            }
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
		                	            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1},
		                	            {header : '操作' , xtype : 'actionbuttoncolumn',  width : 200, items : [{
	                	            		action : 'view-detail',
	                	            		text : '查看详细',
	                	                    handler: function(grid, rowIndex, colIndex) {
	                	                        this.up('grid').fireEvent('viewdetailbuttonclick', grid, rowIndex, colIndex);
	                	                    }
	                	            		}]
		                	            }
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