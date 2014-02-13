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
    	ref : 'distributePlanListGrid',
        selector : "viewport > #main > distributeplanlist > grid"
    },{
    	ref : 'distributePlanAdd',
        selector : "viewport > #main > distributeplanadd"
    },{
        ref : 'chooseCustomer',
        selector : "viewport > #main > distributeplanadd > choosecustomer"
    },{
        ref : 'chooseCustomerGrid',
        selector : "viewport > #main > distributeplanadd > choosecustomer  grid"
    },{
        ref : 'chooseMaterial',
        selector : "viewport > #main > distributeplanadd > choosematerial"
    },{
        ref : 'chooseMaterialGrid',
        selector : "viewport > #main > distributeplanadd > choosematerial > grid"
    },{
        ref : 'distributeParamGrid',
        selector : "viewport > #main > distributeplanadd > distributeparam  grid"
    }],
    
    init: function() {
    	var me = this;
        this.control({
           "distributeplanlist grid" : {
        	   viewdetailbuttonclick : this.showDistributePlanItems,
        	   
        	   changestatusbuttonclick : this.changeDistributePlanStatus
           }
        });
    },//end of init
    
    showDistributePlanItems : function(){
    	//detail page
    	alert('show items');
    },
	
    changeDistributePlanStatus : function(){
    	alert('change status');
    },
});