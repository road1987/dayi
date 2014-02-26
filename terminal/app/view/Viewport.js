Ext.define('SPT.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires : [ 'SPT.view.UserInfo', 
	             'SPT.view.MainMenu',
	             'SPT.view.SubMenu' 
	],

    layout: {
        type: 'border'
    },
    
    initComponent: function() {
    		this.items = [{
					id : 'header',
					xtype : 'container',
					region : 'north',
					height : 90,
					layout : 'column',
					items : [ {
						xtype : 'box',
						columnWidth : 0.2,
						html : "<h1>DAYI-SP-TERMINAL</h1>"
					}, {
						xtype : 'mainmenuview',
						columnWidth : 0.6
					}, {
						xtype : 'userinfoview',
						columnWidth : 0.2
					} ]
				},
				{
					id : 'sidebar',
					xtype : 'container',
					region : 'west',
					border : false,
					split : true,
					width : 260,
					minSize : 100,
					maxSize : 500,
					items : [ {
						xtype : 'submenuview'
					} ]
				},
				{
					id : 'main',
					region : 'center',
					xtype : 'container',
					layout : {
						type : 'card',
						deferredRender : true
					},
					items : [{

					}]
				},
				{
					id : 'footer',
					xtype : 'box',
					region : 'south',
					html : '<div style="text-align:center;">Copyright (c) 2013 重爻科技有限公司 </div>'
			}];
    		this.callParent();
    }
});
