Ext.define('SP.store.DistributePlanFinished', {
    extend: 'Ext.data.Store',
	requires : ['SP.model.DistributePlan'],
    model : 'SP.model.DistributePlan',
    pageSize : 10,
	proxy: {
	    type: 'ajax',
        pageParam: 'page-index', 
        startParam: false, //to remove param "start"
        limitParam: 'page-size', //to remove param "limit"
        extraParams : {
        	status : '4'
        },
        actionMethods: {
            read: 'POST'
        },
	    api : {
	         read: 'platform/admin?actid=1106',
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