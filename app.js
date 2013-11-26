Ext.application({
		name: 'SP',
		autoCreateViewport : true,
		controllers : ['Customers' , 'SystemMenu'],
		models : ['Customer'],
		stores : ['Customers' , 'SystemMenu']
});