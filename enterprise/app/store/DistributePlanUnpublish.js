Ext.define('SP.store.DistributePlanUnpublish', {
    extend: 'Ext.data.Store',
	requires : ['SP.model.DistributePlan'],
    model : 'SP.model.DistributePlan',
    pageSize : 50,
	proxy: {
	    type: 'ajax',
        pageParam: 'page-index', 
        startParam: false, //to remove param "start"
        limitParam: 'page-size', //to remove param "limit"
        extraParams : {
        	status : '2'
        },
        actionMethods: {
            read: 'POST'
        },
	    api : {
	         read: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1106'
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