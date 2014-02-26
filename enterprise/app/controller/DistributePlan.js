Ext.define('SP.controller.DistributePlan', {	
    extend: 'Ext.app.Controller',
    views : [
    	"distributeplan.List",
    	"distributeplan.Add"
    ],
    stores: [ 'DistributePlan' , 'DistributePlanItem'],
    models : [ 'DistributePlan' , 'DistributePlanItem'],
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'distributePlanList',
        selector : "viewport > #main > distributeplanlist"
    },{
    	ref : 'distributePlanItemList',
    	selector : "viewport > #main > distributeplanitemlist"
    }],
    
    init: function() {
    	var me = this;
        this.control({
           "distributeplanlist grid" : {
        	   viewdetailbuttonclick : this.showDistributePlanItems,
        	   
        	   changestatusbuttonclick : this.changeDistributePlanStatus
           },
           "distributeplanlist tabpanel" : {
        	   tabchange : function(tabpanel, newcard, oldcard, eOpts){
        		   newcard.getStore().reload();
        	   }
           },
           "distributeplanitemlist button[action=back]" : {
        	   click  : this.showDistributePlanList
           }
        });
    },//end of init
    
    showDistributePlanList : function(){
    	var mainPanel = this.getMainpanel();
    	var planList = this.getDistributePlanList();
    	mainPanel.getLayout().setActiveItem(planList);
    	return true;
    },
    
    showDistributePlanItems : function(grid, rowIndex, colIndex){
    	//detail page
    	var mainPanel = this.getMainpanel();
    	var planItemList = this.getDistributePlanItemList();
    	var record = grid.getStore().getAt(rowIndex);
    	
    	mainPanel.getLayout().setActiveItem(planItemList);
    	planItemList.getStore().getProxy().extraParams = {
    		   id : record.get('id') //treetype {1 : "地区", 2 : "组织结构"}
	    };
    	planItemList.getStore().loadPage(1);
    },
	
    changeDistributePlanStatus : function(grid, rowIndex, colIndex, action){
    	//parameter audited : 审核通过
    	var record = grid.getStore().getAt(rowIndex);
    	var status = null;
    	switch(action){
    		case 'audited':
    			status = 2;
    			break;
    		case 'publish':
    			status = 3;
    			break;
    		case 'inprocess':
    			status = 4;
    			break;
    		default : 
    			break;
    	}
		Ext.Ajax.request({
	    	   url: 'platform/admin?actid=1107',
	    	   params : {
	    		   id : record.get('id'),
	    		   status : status
	    	   },
	    	   success: function(response){
	    		   var responseXml = response.responseXML;
	    		   var isSuccess = responseXml.getElementsByTagName('state')[0].childNodes[0].nodeValue;
	    		   if(isSuccess == 'true'){
	    			   Ext.Msg.alert("提示" ,"操作成功!");
	    			   grid.getStore().reload();
	    		   }else{
	    			   var reason = responseXml.getElementsByTagName('reason')[0].childNodes[0].nodeValue;
	    			   Ext.Msg.alert("提示" ,"操作失败,[原因：" + reason +   "],请重试!");    
	    		   }
	    	   },
	    	   failure : function(){
		    		 Ext.Msg.alert("提示" ,"请求过程中出现错误,请重试！");    		   
	    	   }
	    });
    }
});