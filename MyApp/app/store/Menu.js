Ext.define("MyApp.store.Menu", {
  extend: "Ext.data.TreeStore",
  alias: "store.menu",
  root: {
    text: "Root",
    expanded: true,
    children: [
      {
        text: "Security",
        iconCls: "fas fa-users-cog",
        children: [
          {
            text: "Users",
            iconCls: "fa fa-users",
            className: "usergrid",
            leaf: true,
          },
          {
<<<<<<< HEAD
            text: "Todos",
            iconCls: "fas fa-user-secret",
            className: "todogrid",
            leaf: true,
=======
              text: 'Static Data',
              iconCls:'fa fa-database fa-lg',
              children: [
                  {
                      text: 'Posts',
                      iconCls: 'fa fa-users',
                      className: 'postgrid',
                      leaf: true
                  },
                  {
                      text: 'Personnel',
                      iconCls: 'fa fa-users',                      
                      className: 'mainlist',
                      leaf:true,
                  }
              ]

>>>>>>> 025af80... changes to the grids
          },
        ],
      },
      {
        text: "Static Data",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Users",
            iconCls: "fa fa-users",
            className: "parentpanel",
            leaf: true,
          },
          {
            text: "Posts",
            iconCls: "fa fa-users",
            className: "postgrid",
            leaf: true,
          },
          {
            text: "Todos",
            iconCls: "fa fa-users",
            leaf: true,
            className: "todogrid",
          },
          {
            text: "Personnel",
            iconCls: "fa fa-users",
            leaf: true,
            className: "mainlist",
          },
        ],
      },
    ],
  },
});
