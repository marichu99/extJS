Ext.define("MyApp.view.testresult.TestResultView", {
  extend: "Ext.grid.Panel",
  width: 400,
  height: 600,
  title: "Summary Test",
  style: "padding: 20px",
  xtype: "testresultpanel",
  features: [
    {
      ftype: "summary",
    },
  ],
  store: Ext.create("MyApp.store.TestResults"),
  columns: [
    {
      dataIndex: "student",
      text: "Name",
      summaryType: "count",
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format(
          "{0} student{1}",
          value,
          value !== 1 ? "s" : ""
        );
      },
    },
    {
      dataIndex: "mark",
      text: "Mark",
      summaryType: "average",
    },
  ],
});
