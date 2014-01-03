Ext.define('SP.view.business.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.businesslist',

    id : 'businessMgrPanel',
    title: '渠道商信息',
	store: 'Business',
	plugins: [{
		ptype: 'rowexpander',
		rowBodyTpl : [
		'<p>负责人：{manager}    店面名称:{name}</p>'
		]
	}],
	
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
        ];
        this.dockedItems = [{
            xtype: 'pagingtoolbar',
            store: 'Business',   // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        }];
        this.callParent(arguments);
    }
});