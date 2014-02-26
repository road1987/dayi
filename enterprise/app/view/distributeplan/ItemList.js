Ext.define('SP.view.distributeplan.ItemList' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.distributeplanitemlist',
    
    id : 'distributePlanItemListPanel',
    title: '计划详细',
	store: 'DistributePlanItem',
		 
    initComponent: function() {
    	this.tbar = Ext.create("Ext.Toolbar", {
    		
    	    items: [{
    	    	action : "back",
    	    	text : "返回"
    	    },"->"/*,{
    	    	action : "add",
    	        text: "添加"
    	    }, {
    	    	action : "edit",
    	        text: "编缉"
    	    },{
    	    	action : "remove",
    	    	text : "删除"
    	    }*/]
    	});
        this.columns = [
            {header: 'ID' , dataIndex:'id' , flex : 1},
            {header: '所属计划',  dataIndex: 'planid',  flex: 1},
            {header: '物料', dataIndex: 'materialid', flex: 1},
            {header: '出厂价', dataIndex:'exworksprice', flex:1},
            {header: '一批价', dataIndex:'Tradeprice' , flex : 1 },
            {header : '最大量' , dataIndex : 'maxamount' , flex : 1} ,
            {header : '最小量' , dataIndex : 'minamount' , flex : 1},
            {header : '实际量' , dataIndex : 'actualamount' , flex : 1},
            {header : '客户' , dataIndex : 'Terminalid' , flex : 1},
            {header : '客户类型' , dataIndex : 'Terminaltype' , flex : 1},
            {header : '状态', dataIndex:'status' , flex : 1}
        ];
        
        this.dockedItems = [{
            xtype: 'pagingtoolbar',
            store: 'DistributePlanItem',   // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        }];

        this.callParent(arguments);
    }
});