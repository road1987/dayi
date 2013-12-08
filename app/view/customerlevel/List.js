Ext.define('SP.view.customerlevel.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlevellist',

    id : 'customerLevelMgrPanel',
    title: '客户等级',
	store: 'CustomerLevel',
		 
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
            {header: 'ID' , dataIndex : 'id' , flex : 1},
            {header: '等级',  dataIndex: 'name',  flex: 1},
            {header: '描述', dataIndex: 'description', flex: 1}
        ];

        this.callParent(arguments);
    }
});