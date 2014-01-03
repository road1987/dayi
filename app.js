Ext.application({
		name: 'SP',
		autoCreateViewport : true,
		controllers : ['Customer' , 'CustomerType' , 'CustomerLevel', 'SystemMenu','ChannelType','ChannelLevel','BusinessMode','Region','Market','Business','Material'],
		models : ['Customer','CustomerType','CustomerLevel','ChannelType','ChannelLevel','BusinessMode','Region','Market','Business','Material'],
		stores : ['Customer' , 'SystemMenu', 'CustomerType' , 'CustomerLevel', 'ChannelType', 'ChannelLevel','BusinessMode','Region','Market','Business','Material']
});