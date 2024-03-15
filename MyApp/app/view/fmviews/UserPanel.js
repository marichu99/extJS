Ext.define('MyApp.view.fmviews.UserPanel',{
    extend:'Ext.panel.Panel',
    xtype:'userpanel',
    items:[
        {
            xtype:'usergrid',
           
        },
        {
            xtype:'userdetailstab',
            scrollable:true,
           
        }
    ]
})