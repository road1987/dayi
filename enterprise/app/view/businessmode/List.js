Ext.define('SP.view.businessmode.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.businessmodelist',
    
    id : 'businessModeMgrPanel',
    title: '渠道商等级',
	store: 'BusinessMode',
		 
    initComponent: function() {
    	this.tbar = Ext.create("Ext.Toolbar", {
    		
    	    items: ["->",{
    	    	action : "add",
    	        text: "添加",
    	        iconCls: 'icon-add'
    	    }, {
    	    	action : "edit",
    	        text: "编缉",
    	        iconCls: 'icon-edit'
    	    }]
    	});
        this.columns = [
            {header: 'ID' , dataIndex:'id' , flex : 1},
            {header: '类型',  dataIndex: 'value',  flex: 1},
            {header: '描述', dataIndex: 'description', flex: 1}
        ];

        this.callParent(arguments);
    }
});