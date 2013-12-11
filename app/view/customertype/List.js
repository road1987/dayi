Ext.define('SP.view.customertype.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.customertypelist',
    
    id : 'customerTypeMgrPanel',
    title: '客户类型',
	store: 'CustomerType',
		 
    initComponent: function() {
    	this.tbar = Ext.create("Ext.Toolbar", {
    		
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
            {header: 'ID' , dataIndex:'id' , flex : 1},
            {header: '类型',  dataIndex: 'name',  flex: 1},
            {header: '描述', dataIndex: 'description', flex: 1}
        ];

        this.callParent(arguments);
    }
});