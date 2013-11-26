Ext.define('SP.view.Viewport' ,{
    extend: 'Ext.container.Viewport',
    requires: [
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
    		items : [{	
    				xtype : 'box',
    				columnWidth : 0.25,
    				html : "<h1>DAYI-SP</h1>"
    			},{
    				xtype : 'mainmenuview',
    				width : 400,
    				columnWidth : 0.5	
    			},{	
    				xtype : 'box',
    				columnWidth : 0.25
    		}]
    	}
        ,{
        		xtype : 'box',
        		region : 'south',
        		html : '<div style="text-align:center;">Copyright (c) 2013 重爻科技有限公司 </div>',
        		height : 20
        },{
        	xtype : 'container',
            region:'west',
            border: false,
            split:true,
            width: 290,
            minSize: 100,
            maxSize: 500,
            items : [{ xtype : 'submenuview'}]
        },{
        	region : 'center',
        	xtype : "customerlist"		
        }];
        this.callParent(arguments);
    }
});