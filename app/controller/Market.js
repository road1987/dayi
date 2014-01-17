Ext.define('SP.controller.Market', {
	requires : [ 'SP.model.Market', 'SP.model.TreeNode' ],
	extend : 'Ext.app.Controller',
	views : [ 'market.ManagePanel' ],

	refs : [ {
		ref : 'mainpanel',
		selector : "viewport > #main"
	}, {
		ref : 'treepanel',
		selector : 'viewport > #main > marketmanagepanel > #tree'
	}, {
		ref : 'formpanel',
		selector : 'viewport > #main > marketmanagepanel form'
	} ],

	init : function() {
		var me = this;
		this.control({
			"marketmanagepanel > #tree" : {
				render : this.showMarketTree,
				selectionchange : this.showNodeDetail
			},

			"marketmanagepanel  button[action=add]" : {
				click : this.addMarketTreeNode
			},

			"marketmanagepanel  button[action=submit]" : {
				click : this.updatMarketTreeNode
			},
			"marketmanagepanel button[action=refresh]" : {
				click : this.showMarketTree
			}
		});
	},

	showMarketTree : function() {
		var treePanel = this.getTreepanel();
		Ext.Ajax.request({
			url : 'platform/admin?actid=1051',
			success : function(response) {
				var text = response.responseText;
				var rootNode = SP.extend.util.XmlParserToTreeData
						.getNodes(text);
				treePanel.setRootNode(rootNode);
				// treePanel.expandAll();
			}
		});
	},

	addMarketTreeNode : function() {
		var treePanel = this.getTreepanel();
		var selectItem = treePanel.getSelectionModel().getSelection();
		if (selectItem.length <= 0) {
			Ext.Msg.alert("提示", "未选中任何节点！");
			return false;
		}
		var nodeModel = Ext.create("SP.model.Market", {
			parentid : selectItem[0].data.id,
			value : '新节点',
			description : ''
		});

		nodeModel.save({
			success : function(node, request) {
				selectItem[0].data.leaf = false;
				var treeNode = Ext.create('SP.model.TreeNode', {
					id : node.data.id,
					value : node.data.value,
					text : node.data.value,
					description : node.data.description,
					parentid : node.data.parentid,
					leaf : true
				});
				selectItem[0].appendChild(treeNode);

				selectItem[0].expand();
				treePanel.getSelectionModel().select(treeNode);
			},
			failure : function() {
				Ext.Msg.alert("提示", "添加记录失败,请重试!");
			}
		});

	},

	updatMarketTreeNode : function() {
		var treePanel = this.getTreepanel(), selectItem = treePanel
				.getSelectionModel().getSelection(), formPanel = this
				.getFormpanel(), record = formPanel.getRecord();

		formPanel.updateRecord(record);
		var market = Ext.create('SP.model.Market', {
			id : record.data.id,
			value : record.data.value,
			parentid : record.data.parentid,
			description : record.data.description
		});

		market.save({
			success : function() {
				selectItem[0].data.text = market.data.value;
				selectItem[0].data.description = market.data.description;
				treePanel.getView().refresh();
				Ext.Msg.alert("提示", "成功修改记录!");
			},
			failure : function() {
				Ext.Msg.alert("提示", "修改记录失败,请重试!");
			}
		});
	},

	showNodeDetail : function() {
		var treePanel = this.getTreepanel(), selectItem = treePanel
				.getSelectionModel().getSelection(), formPanel = this
				.getFormpanel();

		if (selectItem[0].isRoot()) {
			formPanel.getForm().reset();
		} else {
			formPanel.getForm().loadRecord(selectItem[0]);
		}
	}
});