Ext.define('SP.store.SystemMenu', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name' , 'description' ,'items'],
    autoLoad : true,
    data  : [
             {	 
            	 id : 'baseInfoMgr' , 
            	 name : '信息管理' , 
            	 items : [
                	  {id : 'materialMgr' , name : '物料管理' , description: 'material manage(物料管理)'},
            	      {id : 'customerMgr' , name : '客户管理' , description: 'retailer manage(客户管理)'},
            	      {id : 'businessMgr', name : '渠道服务商管理' , description : 'business manage(渠道服务商管理)'}
            	 ],
            	 description : 'base infomation manage (基础信息管理)'
             },
             {
            	 id : 'deliverGoodsMgr',
            	 name : '配货管理',
            	 description : 'deliver goods manager(配货管理)',
            	 items : [
               	       {id : 'distributePlanList' , name : '配货计划查询' , description : 'distribute plan query(配货计划查询)'},
            	       {id : 'distributePlanAdd' , name : '创建配货计划' , description : 'create distribute plan(创建配货计划)'}
            	 ]
             },
             {
            	 id : 'supplementMgr',
            	 name : '补货管理',
            	 description : 'supplement manager(补货管理)',
            	 items : [
               	       {id : 'querySupplementPlan' , name : '补货计划查询' , description : 'supplement plan query(补货计划查询)'},
            	       {id : 'createSupplementPlan' , name : '创建补货计划' , description : 'create supplement plan(创建补货计划)'}
            	 ]
             },
             {
            	 id : 'systemConfigMgr',
            	 name : '基础配置',
            	 description : 'system menu (系统配置)',
            	 items : [
            	          {id : 'customerTypeMgr', name : '客户分类' , description : 'customer type manage(客户分类管理)'},
                	      {id : 'customerLevelMgr', name : '客户等级' , description : 'customer level manage(客户等级管理)'},      
            	          {id : 'channelTypeMgr', name : '渠道服务商分类' , description : 'distributor type manage(渠道服务商分类管理)'},
                	      {id : 'channelLevelMgr', name : '渠道服务商等级' , description : 'distributor level manage(渠道服务商等级管理)'},            	      
                	      {id : 'regionMgr', name : '地区字典' , description : 'region manage(地区字典管理)'},
                	      {id : 'marketMgr', name : '市场部组织结构' , description : 'marketing organization manage(市场部组织管理)'},    
                	      {id : 'businessModeMgr' , name : '经营模式', description : 'business mode manage(客户经营模式管理)'}

                 ]
             }
    ]
});