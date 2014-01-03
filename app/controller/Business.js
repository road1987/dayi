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
    	ref : 'businessEdit',
        selector : "viewport > #main > businessedit"
    },{
        ref : 'businessAdd',
        selector : "viewport > #main > businessadd"
    }],
    
    init: function() {
        this.control({
            "businesslist" : {
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
          
           "businessedit button[action=submit]" : {
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
    	var businessList = this.getBusinessList();
    	var selectedItems = businessList.getSelectionModel().getSelection();
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
    	businessList.getStore().load();
    },
    
    addBusiness : function(){
      	 var businessAddPanel = this.getBusinessAddPanel();
	     var form = businessAddPanel.down('form');
	     var business = Ext.create( "SP.model.Business" , form.getValues());
	   
	     business.save({
	    	 success : function(){
	    		 Ext.Msg.alert("提示" ,"成功添加记录");
	    	 },
	    	 error : function(){
	    		 Ext.Msg.alert("提示" ,"添加记录失败,请重试");
	    	 }
	     });    	
    },
    
    updateBusiness : function(){
    	alert(1);
	   	var businessEditPanel = this.getBusinessEdit();
	    var form = businessEditPanel.down('form');
        var record = form.getRecord();
        form.updateRecord(record);
        record.save({
	    	 success : function(){
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
    	        
    	        var businessList = me.getBusinessList(),
	      		selectedItems = businessList.getSelectionModel().getSelection(),
	      		businessEditPanel = me.getBusinessEdit(),
	    	    form = businessEditPanel.down('form').getForm(),
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
    	        
    	        var businessList = me.getBusinessList(),
	      		selectedItems = businessList.getSelectionModel().getSelection(),
	    		businessEditPanel = me.getBusinessEdit(),
	    	    form = businessEditPanel.down('form').getForm(),
	    	    regionField = form.findField("region");
    	    
	      	regionField.setValue(selectedItems[0].get('region'));
	      	form.isValid();
    	    }
    	});
    }
});