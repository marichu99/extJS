/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("MyApp.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",
  routes: {
    home: "onHomeRoute",
    "users|reviewpanel|mainlist|postgrid|todogrid": {
      action: "onRoute",
      before: "onBeforeRoute",
    },
  },

  onHomeRoute: function () {
    let mainPanel = this.getMainPanel();
    if (mainPanel) {
      mainPanel.setActiveTab(0);
    }
  },
  onRoute: function () {
    var me = this,
      hash = Ext.util.History.getToken(),
      mainMenu = me.getMainMenu();
    me.locateMenuItem(mainMenu, hash);
  },

  onBeforeRoute: function (action) {
    var hash = Ext.util.History.getToken();

    //TODO: Make Ajax request to the server
    //TODO: Check if the user has permissions to navigate to this path
    //TODO: on success => action.resume()
    //TODO: on failure => action.stop()

    var hasAccessToUsers = localStorage.getItem("hasAccessToUsers");
    console.log("The has access to users", hasAccessToUsers);
    if (hasAccessToUsers) {
      action.resume();
    } else {
      Ext.Msg.show({
        title: "Failure",
        msg: "You do not have permission to access: /" + hash,
        buttons: Ext.Msg.OK,
        icon: Ext.Msg.ERROR,
      });
      action.stop();
    }
  },
  locateMenuItem: function (mainMenu, className) {
    let rootNode = mainMenu.getRootNode();
    let record = rootNode.findChild("className", className, true);
    this.openTab(record);
    mainMenu.getSelectionModel().select(record);
  },

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },
  onLogout: function () {
    // Remove the localStorage key/value
    localStorage.removeItem("MsAppLoggedIn");

    // Remove Main View
    this.getView().destroy();

    // Add the Login Window
    Ext.widget("login");
  },
  getMainMenu: function () {
    return Ext.ComponentQuery.query("mainmenu")[0];
  },

  getMainPanel: function () {
    return Ext.ComponentQuery.query("mainpanel")[0];
  },
  onMainMenuItemClick: function (view, record, item, index, e, eOpts) {
    this.redirectTo(record.get("className"));
  },
  openTab: function (record) {
    if (record) {
      let mainPanel = this.getMainPanel();
      let activeTab = mainPanel.items.findBy(
        (tabItem) => tabItem.title === record.get("text")
      );
      if (!activeTab && record.get("leaf")) {
        //create new tab using details from the record
        activeTab = mainPanel.add({
          closable: true,
          xtype: record.get("className"),
          title: record.get("text"),
          iconCls: record.get("iconCls"),
        });
      }
      mainPanel.setActiveTab(activeTab);
    }
  },
});
