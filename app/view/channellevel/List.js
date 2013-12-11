Ext.define('SP.view.channellevel.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.channellevellist',
    
    id : 'channelLevelMgrPanel',
    title: '渠道商等级',
	store: 'ChannelLevel',
		 
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
            {header: '类型',  dataIndex: 'name',  flex: 1},
            {header: '描述', dataIndex: 'description', flex: 1}
        ];

        this.callParent(arguments);
    }
});