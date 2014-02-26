Ext.define('SP.store.DistributePlan', {
    extend: 'Ext.data.Store',
	requires : ['SP.model.DistributePlan'],
    model : 'SP.model.DistributePlan',
    pageSize : 50,
	proxy: {
	    type: 'ajax',
        pageParam: 'page-index', 
        startParam: false, //to remove param "start"
        limitParam: 'page-size', //to remove param "limit"
        actionMethods: {
            read: 'POST'
        },
	    api : {
	         read: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1101'
	    },
	    reader: {
	        type: 'xml',
	        root: 'data',
	        record : 'plan',
	        successProperty: 'state',
	        totalProperty: 'record-number'
	    }
	}
});