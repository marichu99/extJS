Ext.define('MyApp.store.Posts',{
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'MyApp.model.Post',
    requires: ['MyApp.model.Post'],
    autoLoad:true,
    sorters: ['id', 'title'],
    // listeners: {
    //     load: function(store, records, successful, operation, eOpts){
    //         if(successful){
    //             console.log('Response:', records);
    //         } else {
    //             console.log('Error:', operation.getError());
    //         }
    //     }
    // }
});