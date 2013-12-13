Ext.application({
		name: 'SP',
		autoCreateViewport : true,
		controllers : ['Customers' , 'CustomerType' , 'CustomerLevel', 'SystemMenu','ChannelType','ChannelLevel'],
		models : ['Customer','CustomerType','CustomerLevel','ChannelType','ChannelLevel' , 'Region'],
		stores : ['Customers' , 'SystemMenu', 'CustomerType' , 'CustomerLevel', 'ChannelType', 'ChannelLevel', 'Region']
});