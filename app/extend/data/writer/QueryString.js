Ext.define('SP.extend.data.writer.QueryString', {
    extend: 'Ext.data.writer.Writer',
    alternateClassName: 'Ext.data.QueryStringWriter',
    alias: 'writer.querystring',

    writeRecords: function(request, data) {
        request.params = data[0];
        return request;
    }
});