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
           "channellevellist button[action=add]": {
               click: this.addLevel
           },
           "channellevellist button[action=edit]": {
               click: this.editLevel
           },
           "channelleveledit button[action=back]": {
               click: this.showLevelList
           },
           "channelleveladd button[action=back]": {
               click: this.showLevelList
           }
        });
    },
    
   	addLevel: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	mainPanel.getLayout().setActiveItem(this.getChannelLevelAdd());
    },
    
    editLevel : function(){
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
    	mainPanel.getLayout().setActiveItem(this.getChannelLevelList());    	
    }
});