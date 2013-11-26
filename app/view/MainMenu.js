Ext.define('SP.view.MainMenu' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.mainmenuview',
    
    initComponent : function(){
    	Ext.apply(this , {
    		defaults : {
    			xtype : 'button',
    			margin : '10',
    			scale   : 'large'
    		},
    		items : [{
    			id : 'baseInfoMgr',
    			text : '信息管理',
    		},{
    			id : 'deliverGoodsMgr',
    			text : '配货管理'
    		},{
    			id : 'supplementMgr',
    			text : '补货管理'
    		}]
    	});
    	
    	this.callParent();
    }
});