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
    	ref : 'complexQueryPanel',
    	selector : "viewport > #main > customerlist > panel[itemId=complexQueryPanel]"
    },{
    	ref : 'customerListGrid',
        selector : "viewport > #main > customerlist > grid"
    },{
    	ref : 'customerEdit',
        selector : "viewport > #main > customeredit"
    },{
        ref : 'customerAdd',
        selector : "viewport > #main > customeradd"
    }],
    
    init: function() {
    	var me = this;
        this.control({
           "customerlist  treepanel[itemId=marketTree]" : {
        	   render : function(comp){
        	    	this.loadMarketTreeData(function(rootNode){
        	    		comp.setRootNode(rootNode);
        	    	});
        	    }
           },           

           "customerlist  treepanel[itemId=regionTree]" : {
        	   render : function(comp){
        	    	this.loadRegionTreeData(function(rootNode){
        	    		comp.setRootNode(rootNode);
        	    	});
        	    }
           },
           //register event for complex query
           "customerlist panel[itemId=complexQueryPanel] treepanel" : {
        	   selectionchange : this.queryCustomerByComplex
           },

           //register event for complex query
           "customerlist panel[itemId=complexQueryPanel] combobox" : {
        	   //change : this.queryCustomerByComplex,
        	   render : function(comp){
        		   var store = comp.getStore();
        		   store.on('load', function(store, records, options ){   
    	                    var data ={ "id": "", "value": "不限"};   
    	                    store.insert(0,[data]);  
    	                    comp.setValue("");
        		   });
        		   store.load(function(){
        			   comp.on('change' , me.queryCustomerByComplex , me);
        		   });
        	   }
           },
           
           "customerlist > grid" : {
	          render : function(comp){
	          		 comp.getStore().load();
	          }
           },
             
           "customerlist > grid button[action=add]": {
             	click : this.showAddCustomerPanel
           },

           "customerlist > grid button[action=edit]": {
            	click : this.showEditCustomerPanel
           },
          
           "customerlist > grid button[action=queryByKeyword]": {
           	 	click : this.queryCustomerByKeyword
            },
            
            "customerlist > grid textfield[name=keyword]": {
            	specialkey : function(comp , e){
            		if(e.getKey()==e.ENTER){  
            			this.queryCustomerByKeyword(comp);
            		}
            	}
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
       	   		render : this.loadMarketTree,
         		change : function(comp){
         			var form = comp.up("form"),
         				serviceProvider = form.down("combobox[name=ServiceProvider]");
         			
         			serviceProvider.setValue(null);
         			var serviceProviderStore = serviceProvider.getStore();
         			serviceProviderStore.getProxy().api.read = SP.GlobalConfig.getBaseUrl() + "/platform/admin?actid=1077";
         			serviceProviderStore.getProxy().extraParams = {
         	    		"treetype" : 2, //treetype {1 : "地区", 2 : "组织结构"}
         	    		"treeid" : comp.value
         	    	};
         			serviceProviderStore.load();	
         		}
           },

           "customeredit button[action=submit]" : {
          		click : this.updateCustomer
           },
          
           
           "customeredit button[action=back]" : {
         		click : this.showCustomerList
           },
           
           
           "customeradd button[action=back]" : {
          		click : this.showCustomerList
           },

           "customeradd button[action=submit]" : {
         		click : this.addCustomer
            },
           
           "customeradd treecombo[name=region]" : {
        	    render : this.loadRegionTree
           },
        
          "customeradd treecombo[name=market]" : {
     	   		render : this.loadMarketTree,
         		change : function(comp){
         			var form = comp.up("form"),
         				serviceProvider = form.down("combobox[name=ServiceProvider]");
         			
         			serviceProvider.setValue(null);
         			var serviceProviderStore = serviceProvider.getStore();
         			serviceProviderStore.getProxy().api.read = SP.GlobalConfig.getBaseUrl() + "/platform/admin?actid=1077";
         			serviceProviderStore.getProxy().extraParams = {
         	    		"treetype" : 2, //treetype {1 : "地区", 2 : "组织结构"}
         	    		"treeid" : comp.value
         	    	};
         			serviceProviderStore.load();	
         		}
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
      	 var customerAddPanel = this.getCustomerAdd();
	     var form = customerAddPanel.down('form');
	     var customer = Ext.create( "SP.model.Customer" , form.getValues());

	     customer.save({
	    	 success : function(){
	    		 Ext.Msg.alert("提示" ,"成功添加记录");
	    	 },
	    	 failure : function(){
	    		 Ext.Msg.alert("提示" ,"添加记录失败,请重试");
	    	 }
	     });    	
    },
    
    updateCustomer : function(){
	   	var customerEditPanel = this.getCustomerEdit();
	    var form = customerEditPanel.down('form');
        var record = form.getRecord();
        	form.updateRecord(record);

        var date = Ext.util.Format.date(record.get('authorizationdate'), 'Y-m-d H:i:s'); 
        record.set('authorizationdate' , date);
        record.save({
	    	 success : function(record ,request ,success){
	    		 Ext.Msg.alert("提示" ,"成功修改记录!");
	    	 },
	    	 failure : function(){
	    		 Ext.Msg.alert("提示" ,"修改记录失败,请重试!");
	    	 }
	     });    	
    },
    
    loadMarketTree : function(comp){
    	var me = this;
		Ext.Ajax.request({
    	    url: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1051',
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
    	    url: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1061',
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
    	    url: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1061',
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
    	    url: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1051',
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
    },
    
    queryCustomerByKeyword : function(comp){
    	var grid = this.getCustomerListGrid();
    	var keyword = grid.down("textfield[name=keyword]").getValue();
    	var store = grid.getStore();
    	store.getProxy().api.read = SP.GlobalConfig.getBaseUrl() + "/platform/admin?actid=1086";
    	store.getProxy().extraParams = {
    		"search-data" : keyword
    	};
    	store.loadPage(1);
    },
    
    queryCustomerByComplex : function(comp){
    	var panel = this.getComplexQueryPanel(),
    		tabPanel = panel.down("tabpanel"),
    		activeTree = tabPanel.getActiveTab(),
    		businessMode = panel.down("combobox[name=BusinessMode]").getValue(),
    		customerRank = panel.down("combobox[name=CustomerRank]").getValue(),
    		customerType = panel.down("combobox[name=CustomerType]").getValue(),
    		treeType = activeTree.itemId === 'marketTree' ? 2 : 1,
    		selectedNode = activeTree.getSelectionModel().getSelection(),
    		selectedNodeId = selectedNode[0] ? selectedNode[0].data.id : -1;
    		
    	var grid = this.getCustomerListGrid();	
    	var store = grid.getStore();
    	store.getProxy().api.read = SP.GlobalConfig.getBaseUrl() + "/platform/admin?actid=1087";
    	store.getProxy().extraParams = {
    		"treetype" : treeType,
    		"treeid" : selectedNodeId,
    		"businessmode" : businessMode,
    		"customerrank" : customerRank,
    		"customertype" : customerType
    	};
    	store.loadPage(1);
    }
});