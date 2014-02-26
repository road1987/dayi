Ext.define('SPT.Application', {
    name: 'SPT',
    requires : ['SPT.store.SystemMenu'],
    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'SPT.controller.SystemMenu'
    ],

    stores: [
        // TODO: add stores here
        'SPT.store.SystemMenu',
        'SPT.store.UserInfo'
    ]
});
