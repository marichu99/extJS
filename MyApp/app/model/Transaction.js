Ext.define('MyApp.model.Transaction', {
    extend: 'MyApp.model.Base',
    fields: [
        {name: 'type', type: 'string'},
        {name: 'subtype', type: 'string'},
        {name: 'amount', type: 'number'},
        {name: 'currency', type: 'string'}
    ]
});