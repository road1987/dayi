Ext.define('SP.controller.CustomerLevel', {
    extend: 'Ext.app.Controller',

    views : [
    	"customerlevel.List",
    	"customerlevel.Edit"
    ],
    stores: [ 'CustomerLevel'],
    models : [ 'CustomerLevel' ],
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'customerLevelList',
        selector : "viewport > #main > customerlevellist"
    },{
    	ref : 'customerLevelEdit',
        selector : "viewport > #main > customerleveledit"
    },{
        ref : 'customerLevelAdd',
        selector : "viewport > #main > customerleveladd"
    }],
    
    init: function() {
        this.control({
           "customerlevellist" : {
           	 render : function(comp){
           		 comp.getStore().load();
           	 }
           },
           "customerlevellist button[action=add]": {
               click: this.showAddLevelPanel
           },
           "customerlevellist button[action=edit]": {
               click: this.showEditLevelPanel
           },
           "customerlevellist button[action=remove]": {
               click: this.removeLevel
           },
           "customerleveledit button[action=back]": {
               click: this.showLevelListPanel
           },
           "customerleveladd button[action=back]": {
               click: this.showLevelListPanel
           },
           
           "customerleveladd form  button[action=submit]": {
               click: this.addLevel
           },
           "customerleveledit form  button[action=submit]": {
               click: this.updateLevel
           }
        });
    },
    
   	showAddLevelPanel: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	var customerLevelAdd = this.getCustomerLevelAdd();
   	    var formPanel = customerLevelAdd.down('form');
   	    
   	    	formPanel.getForm().reset();
	   	    mainPanel.getLayout().setActiveItem(customerLevelAdd);
    },
    
    showEditLevelPanel : function(){
    	var levelList = this.getCustomerLevelList();
    	var selectedItems = levelList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	var mainPanel = this.getMainpanel();
    	var customerLevelEdit = this.getCustomerLevelEdit();
    	customerLevelEdit.down('form').loadRecord(selectedItems[0]);
    	mainPanel.getLayout().setActiveItem(customerLevelEdit);
    },
    
    showLevelListPanel : function(){
    	var mainPanel = this.getMainpanel();
    	var levelList = this.getCustomerLevelList();
    	mainPanel.getLayout().setActiveItem(levelList);
    	levelList.getStore().load();
    },
    
    addLevel : function(){
      	 var customerLevelAdd = this.getCustomerLevelAdd();
   	     var form = customerLevelAdd.down('form');
   	     var customer = Ext.create( "SP.model.CustomerLevel" , form.getValues());
   	   
   	     customer.save({
   	    	 success : function(){
   	    		 Ext.Msg.alert("提示" ,"成功添加记录");
   	    		 form.reset();
   	    	 },
   	    	 error : function(){
   	    		 Ext.Msg.alert("提示" ,"添加记录失败,请重试");
   	    	 }
   	     });
    },
    
    updateLevel : function(){
	   	var customerLevelEdit = this.getCustomerLevelEdit();
	    var form = customerLevelEdit.down('form');
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
    
    removeLevel : function(){
    	var levelList = this.getCustomerLevelList();
    	var selectedItems = levelList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	Ext.Msg.confirm("提示","数据删除后将不可恢复，是否确定删除？",function(isRemove){
    		if(isRemove === "yes"){
    			levelList.getStore().remove(selectedItems);
    		}
    	});
    }
});