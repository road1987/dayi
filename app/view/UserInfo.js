Ext.define('SP.view.UserInfo' ,{
    extend : 'Ext.container.Container',
    alias : 'widget.userinfoview',
    stores : ['UserInfo'],
    cls : 'user-info-box',
        
    initComponent : function(){
    	var html = [
    	     '<img class="user-picture" src="resources/images/user-header.ico"/>' ,
    	     '<div class="user-info">',
    	     	'<div>administrator</div>',
    	     	'<div><a>退出系统</a></div>',
    	     '</div>'
    	].join("");
    	Ext.apply(this , {
    		html : html
    	});
        this.callParent();
     }
});