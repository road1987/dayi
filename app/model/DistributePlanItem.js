Ext.define('SP.model.Customer', {
    extend: 'Ext.data.Model',
	fields: ['id', 
	         'name',
	         'startTime',
	         'endTime'
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
	         read: 'platform/admin?actid=1086',
	         create: 'platform/admin?actid=1082',
	         update: 'platform/admin?actid=1083',
	         destroy: ''
	    },
	    reader: {
	        type: 'xml',
	        root: 'data',
	        record : 'Customer',
	        successProperty: 'state',
	        totalProperty: 'record-number'
	    },
	    writer : {
	    	type : 'xml',
	    	documentRoot : 'data',
	    	record : 'Customer'
	    }
	}
});