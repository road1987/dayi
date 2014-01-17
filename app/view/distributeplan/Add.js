Ext.define('SP.view.distributeplan.Add' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.distributeplanadd',
    
    id : 'distributePlanAddPanel',
    title: '创建配货计划',
	layout : 'card',
	
    initComponent: function() {
    	var me = this;
    	this.tbar = [
    	            {
    	                id: 'move-prev',
    	                text: '上一步',
    	                handler: function(btn) {
    	                    navigate(btn.up("panel"), "prev");
    	                },
    	                disabled: true
    	            },
    	            '->', // greedy spacer so that the buttons are aligned to each side
    	            {
    	                id: 'move-next',
    	                text: '下一步',
    	                handler: function(btn) {
    	                    navigate(btn.up("panel"), "next");
    	                }
    	}];
    	this.items = [{
    		html : 'first step'
    	},{
    		html : 'second step'
    	}];
        this.callParent(arguments);
    }
});