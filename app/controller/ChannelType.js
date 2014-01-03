Ext.define('SP.controller.ChannelType', {
    extend: 'Ext.app.Controller',

    views : [
    	"channeltype.List",
    	"channeltype.Edit",
    	"channeltype.Add"
    ],
    stores: [ 'ChannelType'],
    models : [ 'ChannelType' ],
    
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'channelTypeList',
        selector : "viewport > #main > channeltypelist"
    },{
    	ref : 'channelTypeEdit',
        selector : "viewport > #main > channeltypeedit"
    },{
        ref : 'channelTypeAdd',
        selector : "viewport > #main > channeltypeadd"
    }],
    
    init: function() {
        this.control({
            "channeltypelist" : {
             	 render : function(comp){
             		 comp.getStore().load();
             	 }
             },
           "channeltypelist button[action=add]": {
               click: this.showAddType
           },
           "channeltypelist button[action=edit]": {
               click: this.showEditType
           },
           "channeltypeedit button[action=back]": {
               click: this.showTypeList
           },
           "channeltypeadd button[action=back]": {
               click: this.showTypeList
           },
           "channeltypeadd form  button[action=submit]": {
               click: this.addType
           },
           "channeltypeedit form  button[action=submit]": {
               click: this.updateType
           }
        });
    },
    
    showAddType: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	var channelTypeAddPanel = this.getChannelTypeAdd();
    	var formPanel = channelTypeAddPanel.down('form');
   	    
   	    formPanel.getForm().reset();
    	mainPanel.getLayout().setActiveItem(channelTypeAddPanel);
    },
    
    showEditType : function(){
    	var typeList = this.getChannelTypeList();
    	var selectedItems = typeList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	var mainPanel = this.getMainpanel();
    	var channelTypeEdit = this.getChannelTypeEdit();
    	channelTypeEdit.down('form').loadRecord(selectedItems[0]);
    	mainPanel.getLayout().setActiveItem(channelTypeEdit);
    },
    
    showTypeList : function(){
    	var mainPanel = this.getMainpanel();
    	var typeList = this.getChannelTypeList();
    	mainPanel.getLayout().setActiveItem(typeList);
    	typeList.getStore().load();    	
    },
   
    addType : function(){
      	 var channelTypeAdd = this.getChannelTypeAdd();
   	     var form = channelTypeAdd.down('form');
   	     var customer = Ext.create( "SP.model.ChannelType" , form.getValues());
   	   
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
	   	var channelTypeEdit = this.getChannelTypeEdit();
	    var form = channelTypeEdit.down('form');
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
      }
});