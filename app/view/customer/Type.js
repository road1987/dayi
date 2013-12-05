Ext.define('SP.view.customer.Type' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.customertype',
    
    id : 'customerTypeMgrPanel',
    title: '客户分类',
	store: 'CustomerType',
		 
    initComponent: function() {

        this.columns = [
            {header: 'ID' , dataIndex:'id' , flex : 1},
            {header: '类型',  dataIndex: 'name',  flex: 1},
            {header: '描述', dataIndex: 'description', flex: 1}
        ];

        this.callParent(arguments);
    }
});