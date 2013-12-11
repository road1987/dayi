Ext.define('SP.model.ChannelType', {
    extend: 'Ext.data.Model',
    fields: [{name: 'id', mapping: 'channel-id'},{name: 'name', mapping: 'channel-name'}, 'description'],
    proxy: {
        type: 'ajax',
        url: 'app/data/channel-type.xml',
        reader: {
            type: 'xml',
            root: 'types',
            record : 'type',
        }
    }
});