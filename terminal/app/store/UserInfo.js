Ext.define('SPT.store.UserInfo', {
    extend: 'Ext.data.Store',
    requires : 'SPT.model.User',
    model : 'SPT.model.User',
    autoLoad: true,
		
    proxy: {
        type: 'ajax',
        url: 'resources/data/user.json',
        reader: {
            type: 'json',
            root: 'user',
            successProperty: 'success'
        }
    }
});