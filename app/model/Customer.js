Ext.define('SP.model.Customer', {
    extend: 'Ext.data.Model',
	fields: ['id', 
	         {name : 'region' , mapping : 'region@id'} , 
	         {name : 'region_name' , mapping : 'region@name'} , 	         
	         {name : 'market', mapping : 'market@id'},
	         {name : 'market_name' , mapping : 'market@name'} , 
	         {name : 'chargemarket' , mapping : 'chargemarket@id'} , 
	         {name : 'chargemarket_name' , mapping : 'chargemarket@name'} , 	         
	         {name : 'name' , mapping : '>name'} , 
	         'manager',
	         'address',
	         'commonphone',
	         'telphone',
	         'BusinessMode',
	         {name : 'BusinessMode' , mapping : 'BusinessMode > id'},
	         {name : 'BusinessMode_value' , mapping : 'BusinessMode > value'},
	         {name : 'CustomerRank' , mapping : 'CustomerRank > id'},
	         {name : 'CustomerRank_value' , mapping : 'CustomerRank > value'},
	         {name : 'CustomerType' , mapping : 'CustomerType > id'},
	         {name : 'CustomerType_value' , mapping : 'CustomerType > value'},
	         {name : 'ServiceProvider' , mapping : 'ServiceProvider > id'},
	         {name : 'ServiceProvider_name' , mapping : 'ServiceProvider > name'},
	         'authorizationnumber',
	      //   'authorizationdate',
	         {name : 'authorizationdate' , mapping : 'authorizationdate'},	         
	         'status',
	         'coefficient',
	         'remark',
	         'StandardAmount'
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