Ext.define("MyApp.view.employee.EmployeeWindow", {
    extend: "Ext.grid.Panel",
    title: "Employees",
    xtype: "employeewindow",
    store: Ext.create("MyApp.store.Employees"),
    columns: [
      { text: "Name", dataIndex: "name", flex: 1 },
      { text: "Seniority", dataIndex: "seniority", flex: 1 },
    ],
    features: [{
      ftype: "grouping",
    }],
})  