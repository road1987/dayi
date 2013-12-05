Ext.define('SP.view.customer.Level' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlevel',

    id : 'customerLevelMgrPanel',
    title: '客户等级',
	store: 'CustomerLevel',
		 
    initComponent: function() {

        this.columns = [
            {header: 'ID' , dataIndex : 'id' , flex : 1},
            {header: '等级',  dataIndex: 'name',  flex: 1},
            {header: '描述', dataIndex: 'description', flex: 1}
        ];

        this.callParent(arguments);
    }
});