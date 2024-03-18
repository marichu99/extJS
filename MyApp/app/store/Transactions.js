Ext.define('MyApp.store.Transactions', {
  extend: 'Ext.data.Store',
  alias: 'store.transaction',
  model: 'MyApp.model.Transaction',
  fields: ["type", "subtype", "amount", "currency"],
  groupField: 'type',
  data: [
      {type: 'Assets', subtype: 'Current', amount: 10000, currency: 'USD'},
      {type: 'Assets', subtype: 'Non-current', amount: 20000, currency: 'USD'},
      {type: 'Liabilities', subtype: 'Current', amount: 5000, currency: 'USD'},
      {type: 'Liabilities', subtype: 'Non-current', amount: 3000, currency: 'USD'},
      {type: 'Equity', subtype: 'Current', amount: 12000, currency: 'USD'},
      {type: 'Equity', subtype: 'Non-current', amount: 15000, currency: 'USD'},
      {type: 'Assets', subtype: 'Current', amount: 5000, currency: 'USD'},
      {type: 'Assets', subtype: 'Non-current', amount: 10000, currency: 'USD'},
      {type: 'Liabilities', subtype: 'Current', amount: 2000, currency: 'USD'},
      {type: 'Liabilities', subtype: 'Non-current', amount: 4000, currency: 'USD'},
      {type: 'Equity', subtype: 'Current', amount: 8000, currency: 'USD'},
      {type: 'Equity', subtype: 'Non-current', amount: 11000, currency: 'USD'}
  ]
});