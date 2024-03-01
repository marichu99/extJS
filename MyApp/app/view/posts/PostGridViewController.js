Ext.define('MyApp.view.posts.PostGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',

    onAddPostClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        // Ext.create("MyApp.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "postformwindow",
        });
        wd.show();
    }
})