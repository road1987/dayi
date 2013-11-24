Ext.define('SP.store.CurrentMenu', {
    extend: 'Ext.data.Store',
    model : 'SP.model.MenuItem',
    data  : [
             {	 
            	 id : 'baseInfoMgr' , 
            	 name : '信息管理' , 
            	 items : [
            	      {id : 'retailerMgr' , name : '客户管理' , description: 'retailer manage(客户管理)'},
            	      {id : 'destributorMgr', name : '渠道服务商管理' , description : 'destributor manage(渠道服务商管理)'}
            	 ],
            	 description : 'base infomation manage (基础信息管理)'
             }
    ]
});