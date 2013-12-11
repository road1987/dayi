Ext.define('SP.store.Customers', {
    extend: 'Ext.data.Store',
    fields: ['id', 
             'area' , 
             'location',
             'marketdept' ,
             'channel',
             'storename',
             'authorizeid',
             'authorizedate',
             'manager',
             'address',
             'telphone',
             'mobilephone',
             'runmode',
             'level',
             'description',
             'customertype'
    ],
    autoLoad: true,
		
    proxy: {
        type: 'ajax',
        url: 'app/data/customers.xml',
        reader: {
            type: 'xml',
            root: 'customers',
            record : 'customer',
            successProperty: 'success'
        }
    }
});