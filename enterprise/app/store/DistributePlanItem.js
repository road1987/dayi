Ext.define('SP.store.DistributePlanItem', {
    extend: 'Ext.data.Store',
	requires : ['SP.model.DistributePlanItem'],
    model : 'SP.model.DistributePlanItem',
    pageSize : 50
});