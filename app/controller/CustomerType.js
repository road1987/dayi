Ext.define('SP.controller.CustomerType', {
    extend: 'Ext.app.Controller',

    views : [
    	"customertype.List",
    	"customertype.Edit",
    	"customertype.Add"
    ],
    stores: [ 'CustomerType'],
    models : [ 'CustomerType' ],
    
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'customerTypeList',
        selector : "viewport > #main > customertypelist"
    },{
    	ref : 'customerTypeEdit',
        selector : "viewport > #main > customertypeedit"
    },{
        ref : 'customerTypeAdd',
        selector : "viewport > #main > customertypeadd"
    }],
    
    init: function() {
        this.control({
           "customertypelist button[action=add]": {
               click: this.addType
           },
           "customertypelist button[action=edit]": {
               click: this.editType
           },
           "customertypelist button[action=remove]": {
               click: this.removeType
           },
           "customertypeedit button[action=back]": {
               click: this.showTypeList
           },
           "customertypeadd button[action=back]": {
               click: this.showTypeList
           }
        });
    },
    
   	addType: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	mainPanel.getLayout().setActiveItem(this.getCustomerTypeAdd());
    },
    
    editType : function(){
    	var typeList = this.getCustomerTypeList();
    	var selectedItems = typeList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	var mainPanel = this.getMainpanel();
    	var customerTypeEdit = this.getCustomerTypeEdit();
    	customerTypeEdit.down('form').loadRecord(selectedItems[0]);
    	mainPanel.getLayout().setActiveItem(customerTypeEdit);
    },
    
    removeType : function(){
    	var typeList = this.getCustomerTypeList();
    	var selectedItems = typeList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	Ext.Msg.confirm("提示","数据删除后将不可恢复，是否确定删除？",function(isRemove){
    		if(isRemove === "yes"){
    			typeList.getStore().remove(selectedItems);
    		}
    	});
    },
    
    showTypeList : function(){
    	var mainPanel = this.getMainpanel();
    	mainPanel.getLayout().setActiveItem(this.getCustomerTypeList());    	
    }
});