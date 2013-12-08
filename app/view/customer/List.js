Ext.define('SP.view.customer.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlist',

    title: '客户信息',
	store: 'Customers',
		 
    initComponent: function() {
    	this.tbar = Ext.create("Ext.Toolbar", {
    	    items: ['文字', "-", {
    	        xtype: "splitbutton",
    	        text: "按钮"
    	    }, {
    	        text: "菜单"
    	    }]
    	});
        this.columns = [
            {header: '姓名',  dataIndex: 'name',  flex: 1},
            {header: '邮箱', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});