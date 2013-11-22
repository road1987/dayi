Ext.define('SP.view.customer.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlist',

    title: 'All Customers',
		
		store: 'Customers',
		 
    initComponent: function() {

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});