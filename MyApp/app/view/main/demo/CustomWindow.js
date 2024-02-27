Ext.define(
  "MyApp.view.demo.CustomWindow",
  {
    extend: 'Ext.window.Window',
    xtype: 'customwindow',
    title: "This is a custom window",
    width: 520,
    height: 200,
    // autoShow: true,
    closable: true,
    // maximizable: true,
  },
  function () {
    var wd =  Ext.create({xtype:"customwindow"});
    wd.show();
    console.log(wd);

  }
);
