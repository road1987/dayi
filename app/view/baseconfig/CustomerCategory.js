Ext.define('SP.view.baseconfig.CustomerCategory' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerCategory',

    title: '客户分类',
	store: 'Customers',
		 
    initComponent: function() {

        this.columns = [
            {header: '姓名',  dataIndex: 'name',  flex: 1},
            {header: '邮箱', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});