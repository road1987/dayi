Ext.application({
		name: 'SP',
		autoCreateViewport : true,
		views : ['MainMenu','SubMenu'],
		controllers : ['Customers' , 'SystemMenu'],
		models : ['Customer'],
		stores : ['Customers' , 'SystemMenu']
});