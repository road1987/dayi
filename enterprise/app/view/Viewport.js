Ext.define('SP.view.Viewport' ,{
    extend: 'Ext.container.Viewport',
    requires: [
               	 'SP.view.UserInfo',
                 'SP.view.MainMenu',
                 'SP.view.SubMenu',
                 'SP.view.customer.List',
                 'SP.view.customer.Edit',
                 'SP.view.customer.Add',
                 'SP.view.customertype.List',  
                 'SP.view.customertype.Edit',  
                 'SP.view.customertype.Add',  
                 'SP.view.customerlevel.List',  
                 'SP.view.customerlevel.Edit',    
                 'SP.view.customerlevel.Add',
                 'SP.view.channeltype.List',
                 'SP.view.channeltype.Edit',
                 'SP.view.channeltype.Add',
                 'SP.view.channellevel.List',
                 'SP.view.channellevel.Edit',
                 'SP.view.channellevel.Add',
                 'SP.view.businessmode.List',
                 'SP.view.businessmode.Edit',
                 'SP.view.businessmode.Add',
                 'SP.view.region.ManagePanel',
                 'SP.view.market.ManagePanel',
                 'SP.view.business.List',
                 'SP.view.business.Edit',
                 'SP.view.business.Add',
                 'SP.view.material.List',
                 'SP.view.distributeplan.Add',
                 'SP.view.distributeplan.List',
                 'SP.view.distributeplan.ItemList'
           ],

	layout : 'border',
    initComponent: function() {
    	this.items = [{
    		id : 'header',
	        xtype: 'container',
            region: 'north',
            height: 90,
        	layout : 'column',
    		items : [{	
    				xtype : 'box',
    				columnWidth : 0.2,
    				html : "<h1>DAYI-SP</h1>"
    			},{
    				xtype : 'mainmenuview',
    				columnWidth : 0.6	
    			},{	
    				xtype : 'userinfoview',
    				columnWidth : 0.2
    		}]
    	}
        ,{
        	id : 'sidebar',
        	xtype : 'container',
            region:'west',
            border: false,
            split:true,
            width: 260,
            minSize: 100,
            maxSize: 500,
            items : [{ 
            	xtype : 'submenuview'
             }]
        },{
        	id : 'main' ,
        	region : 'center',
        	xtype : 'container',
        	layout : { 
        		type : 'card',
        		deferredRender: true
        	},
        	items : [{
        		xtype : 'customerlevellist'
        	},{
        		xtype : 'customerleveledit'
        	},{
        		xtype : 'customerleveladd'
        	},{
                xtype : 'customerlist' //build
        	},{
        		xtype : 'customeredit' 
        	},{
        		xtype : 'customeradd'
        	},{
        		xtype : 'customertypelist'
        	},{
        		xtype : 'customertypeedit'
        	},{
        		xtype : 'customertypeadd'
        	},{
        		xtype : 'channeltypelist'
        	},{
        		xtype : 'channeltypeedit'
        	},{
        		xtype : 'channeltypeadd'
        	},{
        		xtype : 'channellevellist'
        	},{
        		xtype : 'channelleveledit'
        	},{
        		xtype : 'channelleveladd'
        	},{
        		xtype : 'businessmodelist'
        	},{
        		xtype : 'businessmodeedit'
        	},{
        		xtype : 'businessmodeadd'
        	},{
        		xtype : 'regionmanagepanel'
        	},{
        		xtype : 'marketmanagepanel'
        	},{
        		xtype : 'businesslist'
        	},{
        		xtype : 'businessedit'
        	},{
        		xtype : 'businessadd'
        	},{
            	xtype : 'materiallist'
        	},{
        		xtype : 'distributeplanadd' //build
        	},{
        		xtype : 'distributeplanlist'
        	},{
        		xtype : 'distributeplanitemlist'
        	}]
        },{
        	id : 'footer',
    		xtype : 'box',
    		region : 'south',
    		html : '<div style="text-align:center;">Copyright (c) 2013 重爻科技有限公司 </div>'
        }];
        this.callParent(arguments);
    }
});