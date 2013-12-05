Ext.application({
		name: 'SP',
		autoCreateViewport : true,
		controllers : ['Customers' , 'SystemMenu'],
		models : ['Customer','CustomerType','CustomerLevel'],
		stores : ['Customers' , 'SystemMenu', 'CustomerType' , 'CustomerLevel']
});