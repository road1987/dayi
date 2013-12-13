Ext.define('SP.view.region.ManagePanel' ,{
	requires : ['SP.store.Region'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.regionmanagepanel',
    
    id : 'regionMgrPanel',
    title: '地区字典',
	layout : 'column',
	
    initComponent: function() {
    	this.items = [{	
			xtype : 'treepanel',
			width : '400',
			height: '100%',
			columnWidth : 0.3,
			store : Ext.create('SP.store.Region',{
			    root: {
			    	text : '地区',
			        expanded: true
			    }
			})
		 },{
			xtype : 'container',
			title : '节点信息',
			height : '100%',
			columnWidth : 0.7	
		}];
        this.callParent(arguments);
    }
});