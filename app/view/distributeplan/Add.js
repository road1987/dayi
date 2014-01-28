Ext.define('SP.view.distributeplan.Add' ,{
	requires : ['SP.view.distributeplan.CreatePlan' ,
	            'SP.view.distributeplan.ChooseMaterial',
	            'SP.view.distributeplan.ChooseCustomer',
	            'SP.view.distributeplan.DistributeParam'],
    extend: 'Ext.panel.Panel',
    alias: 'widget.distributeplanadd',
    
    id : 'distributePlanAddPanel',
    title: '创建配货计划',
	layout : 'card',
	
    initComponent: function() {
    	var me = this;
    	this.tbar = [{
    	                action: 'move-prev',
    	                text: '上一步',
    	                disabled: true
    	            },
    	            '->', // greedy spacer so that the buttons are aligned to each side
    	            {
            	    	action : "move-next",
    	                text: '下一步'
			    	},{
			    		hidden : true,
				    	action : "finish",
			            text: '完成'
    				}];
    	this.items = [{
    		xtype : 'createplan'
    	},{
    		xtype : 'choosematerial'
    	},{
    		xtype : 'choosecustomer'
    	},{
    		xtype : 'distributeparam'
    	}];
        this.callParent(arguments);
    }
});