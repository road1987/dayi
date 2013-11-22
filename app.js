Ext.application({
    name: 'SP',
 		requires: ['Ext.container.Viewport' , 'SP.view.Head'],
    
 	  controllers: [
        'Customers'
    ],
    
    launch: function() {
 			 Ext.create('Ext.container.Viewport', {
	        layout: 'border',
	        items: [{
		          xtype: 'head',
	            region: 'north',
	           	width: 300,
	            height: 60
        	}
	        ,{
	        		xtype : 'box',
	        		id : 'footer',
	        		region : 'south',
	        		html : '<div style="text-align:center;">Copyright (c) 2013 重爻科技有限公司 </div>',
	        		height : 20
	        },{
	        		xtype : 'panel',
	            region:'west',
	            title: '菜单',
	            border: false,
	            split:true,
	            width: 290,
	            minSize: 100,
	            maxSize: 500,
	            layout: 'accordion',
              items: [{
                    title: '信息管理',
                    iconCls: 'nav' // see the HEAD section for style used
                }, {
                    title: '计划管理',
                    html: '<p>Some settings in here.</p>',
                    iconCls: 'settings'
                }]
	        },{
	        	region : 'center',
	        	xtype : "customerlist"		
	        }]
    	 });
		}
});