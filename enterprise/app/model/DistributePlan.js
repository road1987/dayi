Ext.define('SP.model.DistributePlan', {
    extend: 'Ext.data.Model',
	fields: ['id', 
	         'name',
	         'type',
	         'status',
	         'creationTime',
	         'startTime',
	         'endTime',
	         'description'
	],
	
	   
	proxy: {
	    type: 'ajax',
        pageParam: 'page-index', 
        startParam: false, //to remove param "start"
        limitParam: 'page-size', //to remove param "limit"
        actionMethods: {
            read: 'POST'
        },
	    api : {
	         read: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1101',
	         create: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1102',
	         update: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1103',
	         destroy: ''
	    },
	    reader: {
	        type: 'xml',
	        root: 'data',
	        record : 'plan',
	        successProperty: 'state',
	        totalProperty: 'record-number'
	    },
	    writer : {
	    	type : 'xml',
	    	documentRoot : 'data',
	    	record : 'plan'
	    }
	}
});