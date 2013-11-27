Ext.define('SP.view.UserInfo' ,{
    extend : 'Ext.container.Container',
    alias : 'widget.userinfoview',
    stores : ['UserInfo'],
    style : 'background : white ; border : 1px solid green;',
    height : '80px',
    margin : '0px 0px 10px 0px',
        
    initComponent : function(){
    	Ext.apply(this , {
    		html : '<div>user info</div>'
    	});
        this.callParent();
     }
});