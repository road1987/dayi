Ext.define('SP.controller.DistributePlanConfig', {	
    extend: 'Ext.app.Controller',
    views : [
    	"distributeplan.List",
    	"distributeplan.Add"
    ],
    stores: [ 'DistributePlan' , 'DistributePlanConfig'],
    models : [ 'DistributePlan' , 'DistributePlanConfig'],
    
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
    }],
    
    init: function() {
    	var me = this;
    	this.distributePlanConfig = new SP.model.DistributePlanConfig();
    	this.distributePlan = new SP.model.DistributePlan();
    	this.material = new SP.model.Material();
    	this.customers = [];
    	this.maxamount = 0;
    	this.minamount = 0;
    	this.customerRanks = [];
    	
        this.control({
           "distributeplanlist > grid" : {
        	 render : function(comp){
        		 comp.getStore().load();
        	 }
           },
           
           "distributeplanadd  button[action=move-prev]" : {
        	   click : this.navigateWizard
           },
           
           "distributeplanadd  button[action=move-next]" : {
        	   click : this.navigateWizard
           },
           
           "distributeplanadd  button[action=finish]" : {
        	   click : this.addDistributePlanConfig
           },
           
           "distributeplanadd > choosecustomer grid" : {
        	   render : function(comp){
        		   comp.getStore().on("load",function(store, records, successful, eOpts){
        	    		if(successful){
        	    			Ext.each(this.customers , function(customer , index){
        	    				var selectedItem = store.get(customer.id);
        	    				if(selectedItem){
        	    					alert("sss");
        	    				}
        	    			});
        	    		}
        	    		
        		   });
        	   }
           },
           
           "distributeplanadd > choosecustomer grid checkcolumn" : {
        	   checkchange : function(column, recordIndex, checked){
        		    var view = me.getChooseCustomerGrid().getView(),
        	            record = view.getRecord(view.getNode(recordIndex));

    	    	   var customer = {
        	    		   id : record.get('id'),
        	    		   CustomerRank : record.get('CustomerRank')
        	       };
        	       if(checked){
        	    	   for(var i = 0 , len = this.customers.length ; i < len ; i++){
        	    		   var item = this.customers[i];
        	    		   if(item.id == customer.id){
        	    			   Ext.Array.remove(this.customers , item);
        	    			   break;
        	    		   }
        	    	   }
        	       }else{
        	    	   for(var i = 0 , len = this.customers.length ; i < len ; i++){
        	    		   var item = this.customers[i];
        	    		   if(item.id == customer.id){
        	    			  return ;
        	    		   }
        	    	   }
        	    	   Ext.Array.push(this.customers , customer);
        	       }
        	   }
           }
        });
    },//end of init
	
    navigateWizard : function(comp){
    	var action = comp.action.split("-")[1];
    	var distributePlanAddPanel = this.getDistributePlanAdd(),
    		layout = distributePlanAddPanel.getLayout(),
    		activeItem = layout.getActiveItem();
 
    	switch(activeItem.itemId){
    		case 'createplan':
    			var form = activeItem.down('form');
    			this.distributePlan =  Ext.create( "SP.model.DistributePlan" , form.getValues());
    			break;
    		case 'choosematerial':
    			var selectedItems = this.getChooseMaterialGrid().getSelectionModel().getSelection();
    	    	if(selectedItems.length <= 0 ){
    	    		Ext.Msg.alert("提示" ,"未选中任何物料,请重试！");
    	    		return false;
    	    	}
    	    	this.material.set('id', selectedItems[0].get('id'));
    			break;
    		case 'choosecustomer':
    			//deal with event;
    			break;
    		case 'distributeparam':
    			//var form = activeItem.down('form');
    			var grid = activeItem.down('grid');
    			//this.maxamount =  form.getValues().maxamount;
    			//this.minamount = form.getValues().minamount;
    			this.customerRanks = grid.getStore().data.items;
    			break;
    		default : break;
    	}
    	layout[action]();
    	distributePlanAddPanel.down('button[action=move-prev]').setDisabled(!layout.getPrev());
    	if(layout.getNext()){
    		distributePlanAddPanel.down('button[action=finish]').hide();
    		distributePlanAddPanel.down('button[action=move-next]').show();
    	}else{
    		distributePlanAddPanel.down('button[action=finish]').show();
    		distributePlanAddPanel.down('button[action=move-next]').hide();
    	}
    },
    
    addDistributePlanConfig : function(){
    	 var data = this.buildAddRequestData();
    	 
	     this.distributePlanConfig.save({
	    	 success : function(){
	    		 Ext.Msg.alert("提示" ,"成功添加记录");
	    	 },
	    	 failure : function(){
	    		 Ext.Msg.alert("提示" ,"添加记录失败,请重试");
	    	 }
	     });  
	     
		Ext.Ajax.request({
	    	   url: 'platform/admin?actid=1102',
	    	   xmlData : data,
	    	   success: function(response){
	    		   alert("finish");
	    	   }
	    });
    	
    },
    
    buildAddRequestData : function(){
    	var distributePlanAddPanel = this.getDistributePlanAdd(),
			layout = distributePlanAddPanel.getLayout(),
			activeItem = layout.getActiveItem();

		//var form = activeItem.down('form');
		var grid = activeItem.down('grid');
		//this.maxamount =  form.getValues().maxamount;
		//this.minamount = form.getValues().minamount;
		this.customerRanks = grid.getStore().data.items;
		
		var distributePlanConfigXml = [];
		
		distributePlanConfigXml.push('<distributePlanConfig>');
		distributePlanConfigXml.push('<plan>');	
		distributePlanConfigXml.push('	<id>' + this.distributePlan.get('id') + '</id>');
		distributePlanConfigXml.push('	<name>' + this.distributePlan.get('name') + '</name>');
		distributePlanConfigXml.push('	<type>' + this.distributePlan.get('type') + '</type>');
		distributePlanConfigXml.push('	<description>' + this.distributePlan.get('description') + '</description>');
		distributePlanConfigXml.push('</plan>');	
		
		distributePlanConfigXml.push('<material>');
		distributePlanConfigXml.push('	<id>' + this.material.get('id')  + '</id>');		
		distributePlanConfigXml.push('</material>');
		//distributePlanConfigXml.push('<minamount>' + this.minamount + '</minamount>');
		//distributePlanConfigXml.push('<maxamount>' + this.maxamount + '</maxamount>');
		
		//customer
		distributePlanConfigXml.push('<excludeCustomers>');
		Ext.each(this.customers , function(){
			distributePlanConfigXml.push('<customer>');
			distributePlanConfigXml.push('	<id>' + this['id']  + '</id>');
			distributePlanConfigXml.push('	<rank>' + this['CustomerRank']  + '</rank>');			
			distributePlanConfigXml.push('</customer>');		
		});
		distributePlanConfigXml.push('</excludeCustomers>');
		
		//rank
		distributePlanConfigXml.push('<CustomerRankAmount>');
		Ext.each(this.customerRanks , function(){
			distributePlanConfigXml.push('<CustomerRank>');
			distributePlanConfigXml.push('	<id>' + this.get('id')  + '</id>');
			distributePlanConfigXml.push('	<amount>' + this.get('amount')  + '</amount>');			
			distributePlanConfigXml.push('	<minamount>' + this.get('minamount')  + '</minamount>');		
			distributePlanConfigXml.push('	<maxamount>' + this.get('maxamount')  + '</maxamount>');		
			distributePlanConfigXml.push('</CustomerRank>');		
		});
		distributePlanConfigXml.push('</CustomerRankAmount>');
		distributePlanConfigXml.push('</distributePlanConfig>');		
		return distributePlanConfigXml.join('');
    }
});