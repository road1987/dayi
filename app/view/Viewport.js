Ext.define('SP.view.Viewport' ,{
    extend: 'Ext.container.Viewport',
    requires: [
               	 'SP.view.UserInfo',
                 'SP.view.MainMenu',
                 'SP.view.SubMenu',
                 'SP.view.customer.List',
                 'SP.view.customer.Edit',
                 'SP.view.customertype.List',                 
                 'SP.view.customerlevel.List',  
                 'SP.view.customerlevel.Edit',    
                 'SP.view.customerlevel.Add'   
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
            width: 280,
            minSize: 100,
            maxSize: 500,
            items : [{ 
            	xtype : 'submenuview'
             }]
        },{
        	id : 'main' ,
        	region : 'center',
        	xtype : 'container',
        	layout : 'card',
        	items : [{
        		xtype : 'customerlevellist'
        	},{
        		xtype : 'customerleveledit'
        	},{
        		xtype : 'customerleveladd'
        	},{
        		xtype : 'customerlist'
        	},{
        		xtype : 'customertypelist'
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