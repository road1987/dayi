Ext.define('SP.controller.DistriutePlan', {
	
    extend: 'Ext.app.Controller',
    views : [
    	"distributeplan.List",
    	"distributeplan.Edit"
    ],
    stores: [ 'Customer'],
    models : [ 'Customer' ],
    
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
    }],
    
    init: function() {
        this.control({
           "distributeplanlist > grid" : {
        	 render : function(comp){
        		 comp.getStore().load();
        	 }
           }
        });
    },//end of init
	
    navigateWizard : function(){
    	var mainPanel = this.getMainpanel();
    	var customerAddPanel = this.getCustomerAdd();
    	var formPanel = customerAddPanel.down('form');
   	    
   	    formPanel.getForm().reset();
    	mainPanel.getLayout().setActiveItem(customerAddPanel);
    },
    
    showEditCustomerPanel : function(){
    	var customerList = this.getCustomerListGrid();
    	var selectedItems = customerList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	var mainPanel = this.getMainpanel();
    	var customerEditPanel = this.getCustomerEdit();
    	mainPanel.getLayout().setActiveItem(customerEditPanel);   
    	customerEditPanel.down('form').loadRecord(selectedItems[0]);
    },
    
    showCustomerList : function(){
    	var mainPanel = this.getMainpanel();
    	var customerList = this.getCustomerList();
    	var customerListGrid = this.getCustomerListGrid();
    	
    	mainPanel.getLayout().setActiveItem(customerList);
    	customerListGrid.getStore().load();
    },
    
    addCustomer : function(){
      	 var customerAddPanel = this.getCustomerAddPanel();
	     var form = customerAddPanel.down('form');
	     var customer = Ext.create( "SP.model.Customer" , form.getValues());
	   
	     customer.save({
	    	 success : function(){
	    		 Ext.Msg.alert("提示" ,"成功添加记录");
	    	 },
	    	 error : function(){
	    		 Ext.Msg.alert("提示" ,"添加记录失败,请重试");
	    	 }
	     });    	
    },
    
    updateCustomer : function(){
	   	var customerEditPanel = this.getCustomerEdit();
	    var form = customerEditPanel.down('form');
        var record = form.getRecord();
        form.updateRecord(record);
        record.save({
	    	 success : function(record ,request ,success){
	    		 Ext.Msg.alert("提示" ,"成功修改记录!");
	    	 },
	    	 error : function(){
	    		 Ext.Msg.alert("提示" ,"修改记录失败,请重试!");
	    	 }
	     });    	
    },
    
    loadMarketTree : function(comp){
    	var me = this;
		Ext.Ajax.request({
    	    url: 'platform/admin?actid=1051',
    	    success: function(response){
    	        var text = response.responseText;
    	        var rootNode = SP.extend.util.XmlParserToTreeData.getNodes(text);
    	        comp.tree.setRootNode(rootNode);
    	        
    	      	var customerList = me.getCustomerListGrid(),
    	      		selectedItems = customerList.getSelectionModel().getSelection(),
    	    		customerEditPanel = me.getCustomerEdit(),
    	    	    form = customerEditPanel.down('form').getForm(),
    	    	    marketField = form.findField("market");
    	    	    
    	    	marketField.setValue(selectedItems[0].get('market'));
    	    	form.isValid();
    	    }
    	});    	
    },
    
    loadRegionTree : function(comp){
    	var me = this;
		Ext.Ajax.request({
    	    url: 'platform/admin?actid=1061',
    	    success: function(response){
    	        var text = response.responseText;
    	        var rootNode = SP.extend.util.XmlParserToTreeData.getNodes(text);
    	        comp.tree.setRootNode(rootNode);
    	        
    	      	var customerList = me.getCustomerListGrid(),
		      		selectedItems = customerList.getSelectionModel().getSelection(),
		    		customerEditPanel = me.getCustomerEdit(),
		    	    form = customerEditPanel.down('form').getForm(),
		    	    regionField = form.findField("region");
	    	    
    	      	regionField.setValue(selectedItems[0].get('region'));
    	      	form.isValid();
    	    }
    	});
    },
    
    loadRegionTreeData : function(callback){
    	var me = this;
		Ext.Ajax.request({
    	    url: 'platform/admin?actid=1061',
    	    success: function(response){
    	        var text = response.responseText;
    	        var rootNode = SP.extend.util.XmlParserToTreeData.getNodes(text);
    	        if(callback && typeof callback == "function"){
    	        	callback(rootNode);
    	        }
    	    }
		});
    },
    
    loadMarketTreeData : function(callback){
    	var me = this;
		Ext.Ajax.request({
    	    url: 'platform/admin?actid=1051',
    	    success: function(response){
    	        var text = response.responseText;
    	        var rootNode = SP.extend.util.XmlParserToTreeData.getNodes(text);
    	        if(callback && typeof callback == "function"){
    	        	callback(rootNode);
    	        }
    	    }
    	});    	
    },
    
    loadRegionTreeForCustomerQuery : function(comp){
    	this.loadRegionTreeData(function(rootNode){
    		comp.tree.setRootNode(rootNode);
    	});
    },
    
    loadMarketTreeForCustomerQuery : function(comp){
    	this.loadMarketTreeData(function(rootNode){
    		comp.tree.setRootNode(rootNode);
    	});
    }
});