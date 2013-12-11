Ext.application({
		name: 'SP',
		autoCreateViewport : true,
		controllers : ['Customers' , 'CustomerType' , 'CustomerLevel', 'SystemMenu','ChannelType','ChannelLevel'],
		models : ['Customer','CustomerType','CustomerLevel','ChannelType','ChannelLevel'],
		stores : ['Customers' , 'SystemMenu', 'CustomerType' , 'CustomerLevel', 'ChannelType', 'ChannelLevel']
});