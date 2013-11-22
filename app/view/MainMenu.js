Ext.define('SP.view.MainMenu' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.menu',

    title: 'All Customers',
		 
    initComponent: function() {

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});