Ext.define('SP.model.DistributePlanItem', {
    extend: 'Ext.data.Model',
	fields: ['id', 
	         'planid',
	         'materialid',
	         'exworksprice',
	         'TradePrice',
	         'maxamount',
	         'minamount',
	         'actualamount',
	         'terminalid',
	         'Terminaltype',
	         'status'
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
	         read: SP.GlobalConfig.getBaseUrl() + '/platform/admin?actid=1105',
	         create: '',
	         update: '',
	         destroy: ''
	    },
	    reader: {
	        type: 'xml',
	        root: 'data',
	        record : 'planitem',
	        successProperty: 'state',
	        totalProperty: 'record-number'
	    },
	    writer : {
	    	type : 'xml',
	    	documentRoot : 'data',
	    	record : 'planitem'
	    }
	}
});