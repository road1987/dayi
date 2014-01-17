Ext.define('SP.controller.BusinessMode', {
    extend: 'Ext.app.Controller',

    views : [
    	"businessmode.List",
    	"businessmode.Edit"
    ],
    stores: [ 'BusinessMode'],
    models : [ 'BusinessMode' ],
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'businessModeList',
        selector : "viewport > #main > businessmodelist"
    },{
    	ref : 'businessModeEdit',
        selector : "viewport > #main > businessmodeedit"
    },{
        ref : 'businessModeAdd',
        selector : "viewport > #main > businessmodeadd"
    }],
    
    init: function() {
        this.control({
           "businessmodelist" : {
           	 render : function(comp){
           		 comp.getStore().load();
           	 }
           },
           "businessmodelist button[action=add]": {
               click: this.showAaddMode
           },
           "businessmodelist button[action=edit]": {
               click: this.showEditMode
           },
           "businessmodeedit button[action=back]": {
               click: this.showModeList
           },
           "businessmodeadd button[action=back]": {
               click: this.showModeList
           },
           "businessmodeadd form  button[action=submit]": {
               click: this.addMode
           },
           "businessmodeedit form  button[action=submit]": {
               click: this.updateMode
           }
        });
    },
    
    showAaddMode: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	var businessModeAdd = this.getBusinessModeAdd();
   	    var formPanel = businessModeAdd.down('form');
   	    
   	    	formPanel.getForm().reset();
	   	    mainPanel.getLayout().setActiveItem(businessModeAdd);
    },
    
    showEditMode : function(){
    	var ModeList = this.getBusinessModeList();
    	var selectedItems = ModeList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	var mainPanel = this.getMainpanel();
    	var businessModeEdit = this.getBusinessModeEdit();
    	businessModeEdit.down('form').loadRecord(selectedItems[0]);
    	mainPanel.getLayout().setActiveItem(businessModeEdit);
    },
    
    showModeList : function(){
    	var mainPanel = this.getMainpanel();
    	var ModeList = this.getBusinessModeList();
    	mainPanel.getLayout().setActiveItem(ModeList);
    	ModeList.getStore().load();    	
    },
    
    addMode : function(){
      	 var businessModeAdd = this.getBusinessModeAdd();
   	     var form = businessModeAdd.down('form');
   	     var mode = Ext.create( "SP.model.BusinessMode" , form.getValues());
   	   
   	     mode.save({
   	    	 success : function(){
   	    		 Ext.Msg.alert("提示" ,"成功添加记录");
   	    		 form.reset();
   	    	 },
   	    	 failure : function(){
   	    		 Ext.Msg.alert("提示" ,"添加记录失败,请重试");
   	    	 }
   	     });
    },
    
    updateMode : function(){
	   	var businessModeEdit = this.getBusinessModeEdit();
	    var form = businessModeEdit.down('form');
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
    }
});