Ext.define('SP.view.distributeplan.DistributeParam' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.distributeparam',

    title: '配货系数',
    itemId : 'distributeparam',
    initComponent: function() {
    	this.items = [{
    			border : false,
    			bodyPadding : "0 0 0 10px",
    			html : '<h3>④配货系数</h3>'
    		},/*{
	    		xtype : 'form',
		        bodyPadding: 10,
		        buttonAlign: 'left',
		        border : false,
		        width : '800px',
		        layout: {
		            type: 'vbox',
		            align: 'stretch'
		        }, 
		        defaults: {
		            xtype: 'container',
		            padding : '5px',
		            layout: {
		                type: 'hbox'
		            }
		        },
		        items : [{
		        	defaults : {
	    	        	xtype : 'textfield',
		        		flex : 1,
		        		padding : '0 60px 0 0'
		        	},
		        	items : [{
	        	        fieldLabel: '配货上限',
	        	        name: 'minamount',
	        	        allowBlank: false,
		        		editable: false
	    	        },{
	        	        fieldLabel: '配货下限',
	        	        name: 'maxamount',
	        	        allowBlank: false,
		        		editable: false
	    	        }]
		        }]
		},{
			html : '等级配额:',
    		border : false,
    		bodyPadding : "0 0 10px 15px",
		},*/{
			xtype : 'container',
			height : '300px',
			items : [{
					width : '710px',
					xtype : 'gridpanel',
					store: 'CustomerLevel',
					enableCtxMenu: false,
					style:'margin-left : 15px',
					plugins: [
					     Ext.create('Ext.grid.plugin.CellEditing', {
					              clicksToEdit: 1
					     })
					],
				    columns : [
				               {header: '等级',  dataIndex: 'value',  flex: 1},
				               {header: '配货数', dataIndex: 'amount', flex: 1 ,
				            	    editor: {
				            	        xtype: 'textfield',
				            	        allowBlank: false
				            	}},
					            {header: '最小量', dataIndex: 'minamount', flex: 1 ,
				            	    editor: {
				            	        xtype: 'textfield',
				            	        allowBlank: false
				            	 }},
						         {header: '最大量', dataIndex: 'maxamount', flex: 1 ,
					            	    editor: {
					            	        xtype: 'textfield',
					            	        allowBlank: false
					             }}
				    ]
			}]
		}];
        this.callParent(arguments);
    }
});