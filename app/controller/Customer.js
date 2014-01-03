Ext.define('SP.controller.Customer', {
	
    extend: 'Ext.app.Controller',
    views : [
    	"customer.List",
    	"customer.Edit"
    ],
    stores: [ 'Customer'],
    models : [ 'Customer' ],
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'customerList',
        selector : "viewport > #main > customerlist"
    },{
    	ref : 'customerEdit',
        selector : "viewport > #main > customeredit"
    },{
        ref : 'customerAdd',
        selector : "viewport > #main > customeradd"
    }],
    
    init: function() {
        this.control({
           "customerlist" : {
        	 render : function(comp){
        		 comp.getStore().load();
        	 }
           },
           "customerlist button[action=add]": {
             	click : this.showAddCustomerPanel
           },

           "customerlist button[action=edit]": {
            	click : this.showEditCustomerPanel
           },
          
           "customeredit button[action=submit]" : {
          		click : this.addCustomer
           },
          
           "customeredit button[action=submit]" : {
           		click : this.updateCustomer
           },
         
           "customeredit treecombo[name=region]" : {
        	    render : this.loadRegionTree
           },
          
           "customeredit treecombo[name=market]" : {
       	   		render : this.loadMarketTree
           },
          
           "customeredit button[action=submit]" : {
          		click : this.updateCustomer
           },
          
           "customeradd button[action=back]" : {
          		click : this.showCustomerList
           },
           
           "customeredit button[action=back]" : {
         		click : this.showCustomerList
           },
           "customeradd treecombo[name=region]" : {
      	    render : this.loadRegionTree
           },
        
          "customeradd treecombo[name=market]" : {
     	   		render : this.loadMarketTree
           }
        });
    },//end of init
	
    showAddCustomerPanel : function(){
    	var mainPanel = this.getMainpanel();
    	var customerAddPanel = this.getCustomerAdd();
    	var formPanel = customerAddPanel.down('form');
   	    
   	    formPanel.getForm().reset();
    	mainPanel.getLayout().setActiveItem(customerAddPanel);
    },
    
    showEditCustomerPanel : function(){
    	var customerList = this.getCustomerList();
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
    	mainPanel.getLayout().setActiveItem(customerList);
    	customerList.getStore().load();
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
    	        
    	      	var customerList = me.getCustomerList(),
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
    	        
    	      	var customerList = me.getCustomerList(),
		      		selectedItems = customerList.getSelectionModel().getSelection(),
		    		customerEditPanel = me.getCustomerEdit(),
		    	    form = customerEditPanel.down('form').getForm(),
		    	    regionField = form.findField("region");
	    	    
    	      	regionField.setValue(selectedItems[0].get('region'));
    	      	form.isValid();
    	    }
    	});
    }
});