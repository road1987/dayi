Ext.define('SP.view.customer.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlist',

    id : 'customerMgrPanel',
    title: '客户信息',
	store: 'Customers',
		 
    initComponent: function() {
    	this.tbar = Ext.create("Ext.Toolbar", {
    		rtl : false,
    	    items: ["->",{
    	    	action : "add",
    	        text: "添加"
    	    }, {
    	    	action : "edit",
    	        text: "编缉"
    	    },{
    	    	action : "remove",
    	    	text : "删除"
    	    }]
    	});
        this.columns = [
            {header: '负责人',  dataIndex: 'manager',  flex: 1},
            {header: '店面名称', dataIndex: 'storename', flex: 1},   
            {header: '授牌证号',  dataIndex: 'authorizeid',  flex: 1},            
            {header: '所属区域',  dataIndex: 'area',  flex: 1},
            {header: '所属市场部',  dataIndex: 'marketdept',  flex: 1},
            {header: '地区', dataIndex: 'location', flex: 1},            
            {header: '经销商',  dataIndex: 'channel',  flex: 1},      
            {header: '地址',  dataIndex: 'address',  flex: 1},
            {header: '联系电话',  dataIndex: 'mobilephone',  flex: 1},
            {header: '固定电话',  dataIndex: 'telphone',  flex: 1},
            {header: '自营/联营',  dataIndex: 'runmode',  flex: 1},        
            {header: '店面级别',  dataIndex: 'level',  flex: 1},
            {header: '授牌日期', dataIndex: 'authorizedate', flex: 1},
            {header: '备注', dataIndex: 'description', flex: 1},
            {header: '客户类型', dataIndex: 'customertype', flex: 1}
        ];

        this.callParent(arguments);
    }
});