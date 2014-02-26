Ext.define('SP.view.distributeplan.CreatePlan' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.createplan',

    title: '创建计划',
    itemId : 'createplan',
    initComponent: function() {
    	this.items = [{
    			border : false,
    			bodyPadding : "0 0 0 10px",
    			html : '<h3>①创建计划</h3>'
    		},{
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
		        		flex : 1,
		        		xtype : 'textfield',
		        		padding : '0 60px 0 0'
		        	},
		        	items : [{
						fieldLabel: '计划名称',
						name: 'name',
						allowBlank: false
					 },{
						name: 'type',
		        		xtype : 'hidden',
		        		value : '1',
						allowBlank: false
					 }]
		        },{
		        	defaults : {
		        		flex : 1,
		        		padding : '0 60px 0 0'
		        	},
		        	items : [{
	    	        	xtype : 'datetimefield',
	        	        fieldLabel: '开始时间',
	        	        name: 'starttime',
	        	        allowBlank: false,
		        		editable: false, 
	        	        format: 'Y-m-d'
	    	        },{
	    	        	xtype : 'datetimefield',
	        	        fieldLabel: '结束时间',
	        	        name: 'endtime',
	        	        allowBlank: false,
		        		editable: false, 
	        	        format: 'Y-m-d'
	    	        }]
		        },{
		        	defaults : {
		        		flex : 1,
		        		xtype : 'textarea',
		        		padding : '0 60px 0 0'
		        	},
		        	items : [{
						fieldLabel: '描述',
						name: 'description',
						allowBlank: true
					 }]
		        }]
		}];
        this.callParent(arguments);
    }
});