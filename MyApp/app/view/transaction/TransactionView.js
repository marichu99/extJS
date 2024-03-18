Ext.define('MyApp.view.transaaction.TransactionView', {
    extend: 'Ext.grid.Panel',
    xtype: 'transactionview',
    title: 'Transaction',
    store: Ext.create("MyApp.store.Transactions"),
    columns: [
        {text: 'Type', dataIndex: 'type', width: 100},
        {text: 'Subtype', dataIndex: 'subtype', width: 100},
        {text: 'Amount', dataIndex: 'amount', width: 100, align: 'right'},
        {text: 'Currency', dataIndex: 'currency', width: 100}
    ],
    
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            text: 'Add Transaction',
            handler: 'onAddBalance'
        }]
    }],
    features: [{
        ftype: 'grouping',

    }]
});