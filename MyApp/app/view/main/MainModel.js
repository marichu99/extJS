/**
 * This class is the view model for the Main view of the application.
 */
Ext.define("MyApp.view.main.MainModel", {
  extend: "Ext.app.ViewModel",

  alias: "viewmodel.main",

  data: {
    name: "MyApp",

    footer: "&copy Mabera " + new Date().getFullYear(),
  },

  //TODO - add data, formulas and/or methods to support your view
});
