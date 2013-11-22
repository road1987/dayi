Ext.define('SP.view.Menu' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.menu',

    title: 'All Customers',
		
		store: 'Customers',
		 
    initComponent: function() {

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});


Ext.application({
    name: 'SP',
 		requires: ['Ext.container.Viewport'],
 		
 	  controllers: [
        'Customers'
    ],
    
    launch: function() {
 			 Ext.create('Ext.container.Viewport', {
	        layout: 'border',
	        title: 'DAYI SP',
	        items: [{
	            xtype: 'box',
	            id: 'header',
	            region: 'north',
	            html: '<h1>DAYI SP</h1>',
	            height: 60
	        },{
	        		xtype : 'box',
	        		id : 'footer',
	        		region : 'south',
	        		html : '<div style="text-align:center;">Copyright (c) 2013 重爻科技有限公司 </div>',
	        		height : 20
	        },{
	        		xtype : 'panel',
	            region:'west',
	            title: 'All Customers',
	            border: false,
	            split:true,
	            width: 290,
	            minSize: 100,
	            maxSize: 500,
	            layout: 'accordion',
              items: [{
                    title: '基础信息维护',
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