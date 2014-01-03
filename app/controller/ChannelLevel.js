Ext.define('SP.controller.ChannelLevel', {
    extend: 'Ext.app.Controller',

    views : [
    	"channellevel.List",
    	"channellevel.Edit"
    ],
    stores: [ 'ChannelLevel'],
    models : [ 'ChannelLevel' ],
    
    refs : [{
    	ref : 'mainpanel',
    	selector : "viewport > #main"
    },{
    	ref : 'channelLevelList',
        selector : "viewport > #main > channellevellist"
    },{
    	ref : 'channelLevelEdit',
        selector : "viewport > #main > channelleveledit"
    },{
        ref : 'channelLevelAdd',
        selector : "viewport > #main > channelleveladd"
    }],
    
    init: function() {
        this.control({
           "channellevellist" : {
              	 render : function(comp){
              		 comp.getStore().load();
              	 }
              },
           "channellevellist button[action=add]": {
               click: this.showAaddLevel
           },
           "channellevellist button[action=edit]": {
               click: this.showEditLevel
           },
           "channelleveledit button[action=back]": {
               click: this.showLevelList
           },
           "channelleveladd button[action=back]": {
               click: this.showLevelList
           },
           "channelleveladd form  button[action=submit]": {
               click: this.addLevel
           },
           "channelleveledit form  button[action=submit]": {
               click: this.updateLevel
           }
        });
    },
    
    showAaddLevel: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	var channelLevelAdd = this.getChannelLevelAdd();
   	    var formPanel = channelLevelAdd.down('form');
   	    
   	    	formPanel.getForm().reset();
	   	    mainPanel.getLayout().setActiveItem(channelLevelAdd);
    },
    
    showEditLevel : function(){
    	var levelList = this.getChannelLevelList();
    	var selectedItems = levelList.getSelectionModel().getSelection();
    	if(selectedItems.length <= 0 ){
    		Ext.Msg.alert("提示" ,"未选中任何数据！");
    		return false;
    	}
    	var mainPanel = this.getMainpanel();
    	var channelLevelEdit = this.getChannelLevelEdit();
    	channelLevelEdit.down('form').loadRecord(selectedItems[0]);
    	mainPanel.getLayout().setActiveItem(channelLevelEdit);
    },
    
    showLevelList : function(){
    	var mainPanel = this.getMainpanel();
    	var levelList = this.getChannelLevelList();
    	mainPanel.getLayout().setActiveItem(levelList);
    	levelList.getStore().load();    	
    },
    
    addLevel : function(){
      	 var channelLevelAdd = this.getChannelLevelAdd();
   	     var form = channelLevelAdd.down('form');
   	     var customer = Ext.create( "SP.model.ChannelLevel" , form.getValues());
   	   
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
	   	var channelLevelEdit = this.getChannelLevelEdit();
	    var form = channelLevelEdit.down('form');
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