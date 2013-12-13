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
               click: this.showAddTypePanel
           },
           "customertypelist button[action=edit]": {
               click: this.showEditTypePanel
           },
           "customertypelist button[action=remove]": {
               click: this.removeType
           },
           "customertypeedit button[action=back]": {
               click: this.showTypeListPanel
           },
           "customertypeadd button[action=back]": {
               click: this.showTypeListPanel
           },
           
           "customertypeadd form  button[action=submit]": {
               click: this.addType
           },
           "customertypeedit form  button[action=submit]": {
               click: this.updateType
           }
        });
    },
    
   	showAddTypePanel: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	var customerTypeAddPanel = this.getCustomerTypeAdd();
   	    var formPanel = customerTypeAddPanel.down('form');
   	    
   	    formPanel.getForm().reset();
    	mainPanel.getLayout().setActiveItem(customerTypeAddPanel);
    },
    
    showEditTypePanel : function(){
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
    
    showTypeListPanel : function(){
    	var mainPanel = this.getMainpanel();
    	var typeList = this.getCustomerTypeList();
    	mainPanel.getLayout().setActiveItem(typeList);
    	typeList.getStore().load();
    },
    
    addType : function(){
   	 var customerTypeAdd = this.getCustomerTypeAdd();
	     var form = customerTypeAdd.down('form');
	     var customer = Ext.create( "SP.model.CustomerType" , form.getValues());
	   
	     customer.save({
	    	 success : function(){
	    		 Ext.Msg.alert("提示" ,"成功添加记录");
	    	 },
	    	 error : function(){
	    		 Ext.Msg.alert("提示" ,"添加记录失败,请重试");
	    	 }
	     });
   },
   
    updateType : function(){
	   	var customerTypeEdit = this.getCustomerTypeEdit();
	    var form = customerTypeEdit.down('form');
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
    }
});