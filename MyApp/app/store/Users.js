Ext.define("MyApp.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "MyApp.model.User",
  storeId:'users',
  autoSync: true,
  
});
