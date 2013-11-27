Ext.define('SP.view.Viewport' ,{
    extend: 'Ext.container.Viewport',
    requires: [
               	 'SP.view.UserInfo',
                 'SP.view.MainMenu',
                 'SP.view.SubMenu',
                 'SP.view.customer.List',
                 'SP.view.customer.Edit'
           ],

	layout : 'border',
    initComponent: function() {
    	this.items = [{
    		id : 'header',
	        xtype: 'container',
            region: 'north',
           	width: 300,
            height: 60,
        	layout : 'column',
        	style : 'border-bottom:1px solid #99BCE8; margin-bottom: 6px',
    		items : [{	
    				xtype : 'box',
    				columnWidth : 0.2,
    				html : "<h1>DAYI-SP</h1>"
    			},{
    				xtype : 'mainmenuview',
    				columnWidth : 0.6	
    			},{	
    				xtype : 'box',
    				columnWidth : 0.2
    		}]
    	}
        ,{
        	xtype : 'container',
            region:'west',
            border: false,
            split:true,
            width: 290,
            style : 'background: white',
            minSize: 100,
            maxSize: 500,
            items : [{
            	xtype : 'userinfoview'
            },{ 
            	xtype : 'submenuview'
             }]
        },{
        	region : 'center',
        	xtype : "customerlist"		
        },{
    		xtype : 'box',
    		region : 'south',
    		style : 'border-top : 1px solid #99BCE8; margin-top: 6px',
    		html : '<div style="text-align:center;">Copyright (c) 2013 重爻科技有限公司 </div>',
    		height : 22
        }];
        this.callParent(arguments);
    }
});