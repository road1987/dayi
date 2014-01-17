Ext.define('SP.model.Business', {
    extend: 'Ext.data.Model',
	fields: ['id', 
	         {name : 'region' , mapping : 'region@id'} , 
	         {name : 'region_name' , mapping : 'region@name'} , 	         
	         {name : 'market', mapping : 'market@id'},
	         {name : 'market_name' , mapping : 'market@name'} ,
	         'name',
	         'manager',
	         'address',
	         'commonphone',
	         'telphone',
	         'fax',
	         {name : 'ServiceProviderRank' , mapping : 'ServiceProviderRank > id'},
	         {name : 'ServiceProviderRank_value' , mapping : 'ServiceProviderRank > value'},
	         {name : 'ServiceProviderType' , mapping : 'ServiceProviderType > id'},
	         {name : 'ServiceProviderType_value' , mapping : 'ServiceProviderType > value'},
	         'authorizationnumber',
	         'status',
	         'coefficient',
	         'remark'
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
	         read: 'platform/admin?actid=1076',
	         create: 'platform/admin?actid=1072',
	         update: 'platform/admin?actid=1073',
	         destroy: ''
	    },
	    reader: {
	        type: 'xml',
	        root: 'data',
	        record : 'ServiceProvider',
	        successProperty: 'state',
		    totalProperty: 'record-number'
	    },
	    writer : {
	    	type : 'xml',
	    	documentRoot : 'data',
	    	record : 'ServiceProvider',
	    }
	}
});