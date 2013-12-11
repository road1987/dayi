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
           "channeltypelist button[action=add]": {
               click: this.addType
           },
           "channeltypelist button[action=edit]": {
               click: this.editType
           },
           "channeltypeedit button[action=back]": {
               click: this.showTypeList
           },
           "channeltypeadd button[action=back]": {
               click: this.showTypeList
           }
        });
    },
    
   	addType: function(grid, record) {
    	var mainPanel = this.getMainpanel();
    	mainPanel.getLayout().setActiveItem(this.getChannelTypeAdd());
    },
    
    editType : function(){
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
    	mainPanel.getLayout().setActiveItem(this.getChannelTypeList());    	
    }
});