Ext.define('SP.view.distributeplan.ChooseMaterial' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.choosematerial',

    title: '选择商品',
    layout: 'anchor',
    itemId : 'choosematerial',
    initComponent: function() {
    	this.items = [{
    			border : false,
    			bodyPadding : "0 0 0 10px",
    			html : '<h3>②选择商品</h3>'
    		},{
    			xtype : 'gridpanel',
    			anchor: '100% -46',
    			store: 'Material',
    			plugins: [{
    				ptype: 'rowexpander',
    				rowBodyTpl : [
    				'<p>物料名称：{name}</p>'
    				]
    			}],
    		    columns : [
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
    		    ],
    		    dockedItems : [{
    		                       xtype: 'pagingtoolbar',
    		                       store: 'Material',   // same store GridPanel is using
    		                       dock: 'bottom',
    		                       displayInfo: true
    		    }]
		}];
    	
        this.callParent(arguments);
    }
});