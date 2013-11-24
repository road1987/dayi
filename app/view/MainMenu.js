Ext.define('SP.view.MainMenu' ,{
    extend: 'Ext.view.View',
    alias: 'widget.mainmenu',
	store : 'SystemMenu',
	cls  : 'mainmenu',
    tpl : '<tpl for="."><div id="{id}" class="menuitem">{name}</div></tpl>',
    itemSelector : '.menuitem'
});