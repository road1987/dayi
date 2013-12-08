Ext.application({
		name: 'SP',
		autoCreateViewport : true,
		controllers : ['Customers' , 'CustomerType' , 'CustomerLevel', 'SystemMenu'],
		models : ['Customer','CustomerType','CustomerLevel'],
		stores : ['Customers' , 'SystemMenu', 'CustomerType' , 'CustomerLevel']
});