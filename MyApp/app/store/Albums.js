Ext.define("MyApp.store.Albums", {
    extend: "Ext.data.Store",
    alias: "store.albums",
    model: "MyApp.model.Album",
    proxy: {
      type: "rest",
      url: "http://localhost:3000/albums",
      reader: {
        type: "json",
        rootProperty: "rows",
        totalProperty: "totalCount",
      },
      writer: {
        type: "json",
        writeAllFields: true,
        rootProperty: "rows",
        encode: true,
      },
    },
  });
  