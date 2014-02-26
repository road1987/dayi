Ext.define('SP.view.material.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.materiallist',

    id : 'materialMgrPanel',
    title: '物料信息',
	store: 'Material',
	plugins: [{
		ptype: 'rowexpander',
		rowBodyTpl : [
		'<p>物料名称：{name}</p>'
		]
	}],
	
    initComponent: function() {
    	this.tbar = Ext.create("Ext.Toolbar", {
    		rtl : false,
    	    items: ["->",{
    	    	action : "add",
    	        text: "添加"
    	    }, {
    	    	action : "edit",
    	        text: "编缉"
    	    },{
    	    	action : "remove",
    	    	text : "删除"
    	    }]
    	});
    	
        this.columns = [
            {header: 'ID',  dataIndex: 'id',  flex: 1},
            {header: '物料名称', dataIndex: 'name', flex: 1},   
            {header: '说明',  dataIndex: 'specification',  flex: 1},            
            {header: '简述',  dataIndex: 'abbreviation',  flex: 1},
            {header: '助记码',  dataIndex: 'mnemonic',  flex: 1}, 
            {header: '条码',  dataIndex: 'barcode',  flex: 1},      
            {header: '创建者',  dataIndex: 'creator',  flex: 1},
            {header: '创建时间',  dataIndex: 'creationTime',  flex: 1},
            {header: '修改者',  dataIndex: 'modifier',  flex: 1},
            {header: '修改时间',  dataIndex: 'modificationTime',  flex: 1},        
            {header: '版本',  dataIndex: 'version',  flex: 1},
            {header: '基本单位', dataIndex: 'baseUnit', flex: 1},
            {header: '重量单位', dataIndex: 'weightUnit', flex: 1},
            {header: '总重量', dataIndex: 'grossWeight', flex: 1},
            {header: '净重', dataIndex: 'netWeight', flex: 1}
        ];
        
        this.dockedItems = [{
            xtype: 'pagingtoolbar',
            store: 'Material',   // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        }];
        
        this.callParent(arguments);
    }
});