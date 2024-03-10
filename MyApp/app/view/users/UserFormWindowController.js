Ext.define("MyApp.view.users.UserFormWindowController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userformwindowcontroller",
  onSaveUser: function () {
    let window = this.getView();
    let references = window.getReferences();

    let form = references["userform"].getForm();
    if (form.isValid()) {
      let user = form.getRecord();
      form.submit({
        methos: "POST",
        url: "http://localhost:3000/users",

        success: function (record, operation) {
          Ext.Msg.alert(
            "Success",
            "User saved successfully.",
            action.result.msg
          );
          form.reset();
        },
        failure: function (record, operation) {
          Ext.Msg.alert("Error", "Failed to save user.", action.result.msg);
        },
      });
    }
  },
});
