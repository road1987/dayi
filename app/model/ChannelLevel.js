Ext.define('SP.model.ChannelLevel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name' , 'description'],
    proxy: {
        type: 'ajax',
        url: 'app/data/channel-level.xml',
        reader: {
            type: 'xml',
            root: 'customerlevel',
            record : 'level',
            successProperty: 'success'
        }
    }
});