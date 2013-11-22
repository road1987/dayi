Ext.define('SP.view.Head' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.head',
		layout : 'column',
		items : [{	
				xtype : 'box',
				columnWidth : 0.25,
				html : "<h1>DAYI-SP</h1>"
			},{
				xtype : 'toolbar',
				width : 400,
				items : [{
					xtype : 'button',
					text : 'xxxx',
					height : 40
					}
						
				],
				columnWidth : 0.5	
			},{	
				xtype : 'box',
				columnWidth : 0.25
		}]
});