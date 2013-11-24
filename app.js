Ext.application({
		name: 'SP',
		autoCreateViewport : true,
		controllers : ['Customers' , 'SystemMenu'],
		models : ['Customer' , 'MenuItem'],
		stores : ['Customers' , 'CurrentMenu' , 'SystemMenu']

});