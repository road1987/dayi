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
           "customerlevellist button[action=add]": {
               click: this.addLevel
           },
           "customerlevellist button[action=edit]": {
               click: this.editLevel
           },
           "customerlevellist button[action=remove]": {
               click: this.removeLevel
           },
           "customerleveledit button[action=back]": {
               click: this.showLevelList
           }
        });
    },
    
   	addLevel: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	mainPanel.getLayout().setActiveItem(this.getCustomerLevelAdd());
   		alert("add action!");
    },
    
    editLevel : function(){
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
    
    removeLevel : function(){
    	var levelList = this.getCustomerLevelList();
    	var selectedItems = levelList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	levelList.getStore().remove(selectedItems);
    },
    
    showLevelList : function(){
    	var mainPanel = this.getMainpanel();
    	mainPanel.getLayout().setActiveItem(this.getCustomerLevelList());    	
    }
});