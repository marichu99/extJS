Ext.define("MyApp.store.Employees", {
  extend: "Ext.data.Store",
  alias: "store.employee",
  model: "MyApp.model.Employee",
  fields: ["name", "seniority", "department"],
  groupField: "department",
  data: [
    { name: "Michael Scott", seniority: 7, department: "Management" },
    { name: "Dwight Schrute", seniority: 2, department: "Sales" },
    { name: "Jim Halpert", seniority: 3, department: "Sales" },
    { name: "Kevin Malone", seniority: 4, department: "Accounting" },
    { name: "Angela Martin", seniority: 5, department: "Accounting" },
    { name: "Pamela Beesly", seniority: 2, department: "Sales" },
    { name: "Oscar Sanchez", seniority: 5, department: "Accounting" },
    { name: "Robert carlifornia", seniority: 7, department: "Management" },
  ],
});
