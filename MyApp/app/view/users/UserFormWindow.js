Ext.define('MyApp.view.users.UserFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'userformwindow',
    controller: "userformwindowcontroller",
    title: 'Add User',
    closable: true,
    modal: true,
    autoShow:true,
    layout: 'fit',
    items: [{
      xtype: 'form',
      reference: 'userform',
      defaultType: 'textfield',
      items: [{
          fieldLabel: 'Username',
          name: 'username',
          allowBlank: false,
          bind: '{username}'
        },
        {
          fieldLabel: 'Email',
          name: 'email',
          vtype: 'email',
          allowBlank: false,
          bind: '{email}'
        },
        {
          fieldLabel: 'City',
          name: 'city',
          bind: '{city}'
        }
      ],
      buttons: [{
        text: 'Save',
        handler: 'onSaveUser'
      }, {
        text: 'Cancel',
        handler: function() {
          this.up('window').close();
        }
      }]
    }]
  });