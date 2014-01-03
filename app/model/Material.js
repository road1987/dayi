Ext.define('SP.model.Material', {
    extend: 'Ext.data.Model',
	fields: ['id', 
	         'name',
	         'specification',
	         'abbreviation',
	         'mnemonic',
	         'barcode',
	         'creator',
	         'creationTime',
	         'modifier',
	         'modificationTime',
	         'version',
	         'baseUnit',
	         'weightUnit',
	         'grossWeight',
	         'netWeight'
	],
	
	   
	proxy: {
	    type: 'ajax',
        pageParam: 'page-index', 
        startParam: false, //to remove param "start"
        limitParam: 'page-size', //to remove param "limit"
	    api : {
	         read: 'platform/admin?actid=1091'
	    },
	    reader: {
	        type: 'xml',
	        root: 'data',
	        record : 'Material',
	        successProperty: 'state',
	        totalProperty: 'record-number'
	    },
	    writer : {
	    	type : 'xml',
	    	documentRoot : 'data',
	    	record : 'Material'
	    }
	}
});