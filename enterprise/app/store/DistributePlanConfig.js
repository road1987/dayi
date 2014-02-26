Ext.define('SP.store.DistributePlanConfig', {
    extend: 'Ext.data.Store',
	requires : ['SP.model.DistributePlanConfig'],
    model : 'SP.model.DistributePlanConfig',
    pageSize : 50
});