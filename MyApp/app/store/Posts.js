Ext.define('MyApp.store.Posts',{
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'MyApp.model.Post',
    requires: ['MyApp.model.Post'],
   
    sorters: ['id', 'title'],
    pageSize:25,
    /* filters: {
        property: 'userId',
        value: '10'
    } */
})