Ext.define('SP.store.SystemMenu', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name' , 'description' ,'items'],
    autoLoad : true,
    data  : [
             {	 
            	 id : 'baseInfoMgr' , 
            	 name : '信息管理' , 
            	 items : [
            	      {id : 'retailerMgr' , name : '客户管理' , description: 'retailer manage(客户管理)'},
            	      {id : 'destributorMgr', name : '渠道服务商管理' , description : 'destributor manage(渠道服务商管理)'}
            	 ],
            	 description : 'base infomation manage (基础信息管理)'
             },
             {
            	 id : 'deliverGoodsMgr',
            	 name : '配货管理',
            	 description : 'deliver goods manager(配货管理)',
            	 items : [
            	       {id : 'createDeliverPlan' , name : '创建配货计划' , description : 'create deliver goods plan(创建配货计划)'},
            	       {id : 'queryDeliverPlan' , name : '配货计划查询' , description : 'deliver goods plan query(配货计划查询)'}
            	 ]
             },
             {
            	 id : 'supplementMgr',
            	 name : '补货管理',
            	 description : 'supplement manager(补货管理)',
            	 items : [
            	       {id : 'createSupplementPlan' , name : '创建补货计划' , description : 'create supplement plan(创建补货计划)'},
            	       {id : 'querySupplementPlan' , name : '补货计划查询' , description : 'supplement plan query(补货计划查询)'}
            	 ]
             },
             {
            	 id : 'systemConfigMgr',
            	 name : '系统配置',
            	 description : 'system menu (系统配置)',
            	 items : [
                	      {id : 'standardStore' , name : '标准店折算' , description: ''}
                 ]
             }
    ]
});