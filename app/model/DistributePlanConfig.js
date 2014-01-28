Ext.define('SP.model.DistributePlanConfig', {
    extend: 'Ext.data.Model',
	fields: ['id', 
	         'distributePlan_id',
	         'material_id',
	         'maxamount',
	         'minamount'
	],
	associations: [
	     { type: 'hasOne' , model: 'Material'},
	     { type: 'hasOne' , model: 'DistributePlan' },
	     { type: 'hasMany' , model: 'Customer' , name : 'customers'},
	     { type: 'hasMany', model: 'CustomerLevel' , name:'rankamounts'}
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
	         read: '',
	         create: 'platform/admin?actid=1102',
	         update: 'platform/admin?actid=1103',
	         destroy: ''
	    },
	    reader: {
	        type: 'xml',
	        root: 'data',
	        record : 'DistributePlanConfig',
	        successProperty: 'state',
	        totalProperty: 'record-number'
	    },
	    writer : {
	    	type : 'xml',
	    	documentRoot : 'data',
	    	record : 'DistributePlanConfig'
	    }
	}
});