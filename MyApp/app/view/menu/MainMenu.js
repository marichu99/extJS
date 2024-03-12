Ext.define('MyApp.view.menu.MainMenu',{
  extend:'Ext.tree.Panel',
  xtype:'mainmenu',
  itemId:'mainmenu',
  rootVisible: false,
  useArrows: true,
  
  store:{
      type:'menu'
  },
  listeners:{
      itemclick: 'onMainMenuItemClick'
  }
})