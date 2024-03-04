Ext.define('MyApp.model.Post',{
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields:[
      'id','userId','title','body'
  ],
  proxy: {
      type: 'rest', 
      url: 'http://localhost:3000/posts',
      reader: {
          type: 'json',
      }
  } 
});