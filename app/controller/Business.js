Ext.define('SP.controller.Business', {
    extend: 'Ext.app.Controller',

    views : [
    	"business.List",
    	"business.Edit"
    ],
    stores: [ 'Business'],
    models : [ 'Business' ],
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'businessList',
        selector : "viewport > #main > businesslist"
    },{
    	ref : 'complexQueryPanel',
    	selector : "viewport > #main > businesslist > panel[itemId=complexQueryPanel]"
    },{
    	ref : 'businessListGrid',
        selector : "viewport > #main > businesslist > grid"
    },{
    	ref : 'businessEdit',
        selector : "viewport > #main > businessedit"
    },{
        ref : 'businessAdd',
        selector : "viewport > #main > businessadd"
    }],
    
    init: function() {
        this.control({
        	"businesslist  treepanel[itemId=marketTree]" : {
        		render : function(comp){
        			this.loadMarketTreeData(function(rootNode){
        				comp.setRootNode(rootNode);
        			});
        		}
        	},           

        	"businesslist  treepanel[itemId=regionTree]" : {
        		render : function(comp){
        			this.loadRegionTreeData(function(rootNode){
        				comp.setRootNode(rootNode);
        			});
        		}
        	},
        	//register event for complex query
        	"businesslist panel[itemId=complexQueryPanel] treepanel" : {
        		selectionchange : this.queryBusinessByComplex
        	},
        	//register event for complex query
        	"businesslist panel[itemId=complexQueryPanel] treepanel" : {
        		selectionchange : this.queryBusinessByComplex
        	},
        	//register event for complex query
        	"businesslist panel[itemId=complexQueryPanel] combobox" : {
        		change : this.queryBusinessByComplex,
        		render : function(comp){
        			var store = comp.getStore();
        			store.on('load', function(store, records, options ){   
	                    var data ={ "id": "", "value": "不限"};   
	                    store.insert(0,[data]);  
	                    comp.setValue("");
        			});
        			store.load();
        		}
        	},
            "businesslist > grid" : {
            	 render : function(comp){
            		 comp.getStore().load();
            	 }
            },
            
           "businesslist button[action=add]": {
             	click : this.showAddBusinessPanel
           },

           "businesslist button[action=edit]": {
            	click : this.showEditBusinessPanel
           },
           "businesslist > grid button[action=queryByKeyword]": {
          	 	click : this.queryBusinessByKeyword
           },
           
           "businesslist > grid textfield[name=keyword]": {
           	specialkey : function(comp , e){
           		if(e.getKey()==e.ENTER){  
           			this.queryBusinessByKeyword(comp);
           		}
           	}
           },
          
           "businessadd button[action=submit]" : {
          		click : this.addBusiness
           },
          
           "businessedit button[action=submit]" : {
           		click : this.updateBusiness
           },
           
           "businessadd button[action=back]" : {
          		click : this.showBusinessList
           },
           
           "businessedit button[action=back]" : {
         		click : this.showBusinessList
           },
          
           "businessedit treecombo[name=region]" : {
      	   		render : this.loadRegionTree
           },
        
           "businessedit treecombo[name=market]" : {
     	   		render : this.loadMarketTree
           },
           "businessadd treecombo[name=region]" : {
     	   		render : this.loadRegionTree
           },
       
           "businessadd treecombo[name=market]" : {
    	   		render : this.loadMarketTree
           }
        });
    },//end of init
	
    showAddBusinessPanel : function(){
    	var mainPanel = this.getMainpanel();
    	var businessAddPanel = this.getBusinessAdd();
    	var formPanel = businessAddPanel.down('form');
   	    
   	    formPanel.getForm().reset();
    	mainPanel.getLayout().setActiveItem(businessAddPanel);
    },
    
    showEditBusinessPanel : function(){
    	var selectedItems = this.getBusinessListGrid().getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	var mainPanel = this.getMainpanel();
    	var businessEditPanel = this.getBusinessEdit();
    	businessEditPanel.down('form').loadRecord(selectedItems[0]);
    	mainPanel.getLayout().setActiveItem(businessEditPanel);   	
    },
    
    showBusinessList : function(){
    	var mainPanel = this.getMainpanel();
    	var businessList = this.getBusinessList();
    	mainPanel.getLayout().setActiveItem(businessList);
    	this.getBusinessListGrid().getStore().load();
    },
    
    addBusiness : function(){
      	 var businessAddPanel = this.getBusinessAdd();
	     var form = businessAddPanel.down('form');
	     var business = Ext.create( "SP.model.Business" , form.getValues());
	   
	     business.save({
	    	 success : function(){
	    		 Ext.Msg.alert("提示" ,"成功添加记录");
	    	 },
	    	 failure : function(){
	    		 Ext.Msg.alert("提示" ,"添加记录失败,请重试");
	    	 }
	     });    	
    },
    
    updateBusiness : function(){
	   	var businessEditPanel = this.getBusinessEdit();
	    var form = businessEditPanel.down('form');
        var record = form.getRecord();
        form.updateRecord(record);
        record.save({
	    	 success : function(){
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
    	    url: 'platform/admin?actid=1051',
    	    success: function(response){
    	        var text = response.responseText;
    	        var rootNode = SP.extend.util.XmlParserToTreeData.getNodes(text);
    	        comp.tree.setRootNode(rootNode);
    	        
	      		selectedItems = me.getBusinessListGrid().getSelectionModel().getSelection(),
	      		businessEditPanel = me.getBusinessEdit(),
	    	    form = businessEditPanel.down('form').getForm(),
	    	    marketField = form.findField("market");
	    	    
    	        if(selectedItems[0] == null){
    	        	marketField.setValue('');
    	        }else{
    	        	marketField.setValue(selectedItems[0].get('market'));
    	        }
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
    	        
	      		selectedItems = me.getBusinessListGrid().getSelectionModel().getSelection(),
	    		businessEditPanel = me.getBusinessEdit(),
	    	    form = businessEditPanel.down('form').getForm(),
	    	    regionField = form.findField("region");
    	        
    	        if(selectedItems[0] == null){
    	        	regionField.setValue('');
    	        }else{
    	        	regionField.setValue(selectedItems[0].get('region'));
    	        }
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
    loadRegionTreeForBusinessQuery : function(comp){
    	this.loadRegionTreeData(function(rootNode){
    		comp.tree.setRootNode(rootNode);
    	});
    },
    
    loadMarketTreeForBusinessQuery : function(comp){
    	this.loadMarketTreeData(function(rootNode){
    		comp.tree.setRootNode(rootNode);
    	});
    },
    
    queryBusinessByKeyword : function(comp){
    	var grid = this.getBusinessListGrid();
    	var keyword = grid.down("textfield[name=keyword]").getValue();
    	var store = grid.getStore();
    	store.getProxy().api.read = "platform/admin?actid=1076";
    	store.getProxy().extraParams = {
    		"search-data" : keyword
    	};
    	store.loadPage(1);
    },
    
    queryBusinessByComplex : function(comp){
    	var panel = this.getComplexQueryPanel(),
    		tabPanel = panel.down("tabpanel"),
    		activeTree = tabPanel.getActiveTab(),
    		businessRank = panel.down("combobox[name=BusinessRank]").getValue(),
    		businessType = panel.down("combobox[name=BusinessType]").getValue(),
    		treeType = activeTree.itemId === 'marketTree' ? 2 : 1,
    		selectedNode = activeTree.getSelectionModel().getSelection(),
    		selectedNodeId = selectedNode[0] ? selectedNode[0].data.id : -1;
    		
    	var grid = this.getBusinessListGrid();	
    	var store = grid.getStore();
    	store.getProxy().api.read = "platform/admin?actid=1077";
    	store.getProxy().extraParams = {
    		"treetype" : treeType,
    		"treeid" : selectedNodeId,
    		"serviceproviderrank" : businessRank,
    		"serviceprovidertype" : businessType
    	};
    	store.loadPage(1);	
    }
});