Ext.define('MsTraining.view.posts.PostFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',
    controller: "postformcontroller",
    title: "Add Post",
    height: 250,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items:[{
       xtype: 'form',
       reference:'postform',
       bodyPadding:10,
       items:[
           {
               allowBlank: false,
               xtype:'textfield',
               readOnly:true,
               fieldLabel: 'Post ID',
               name: 'id',
               emptyText: 'Post id'
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'User ID',
               name: 'userId',
               emptyText: 'user id'
           },
           {
               allowBlank: false,
               xtype: 'textareafield',
               fieldLabel: 'Body',
               name: 'body',
               emptyText: 'body'
           },
           {
               allowBlank: false,
               xtype: 'datefield',
               fieldLabel: 'Published Date',
               name: 'date',
               emptyText: 'date'
           },
       ],
      
    }],
    buttons: [
        { text: 'Cancel' ,handler:"onCancelClick"},
        { text: 'Save' ,handler: "onSaveClick"},
    ]
})