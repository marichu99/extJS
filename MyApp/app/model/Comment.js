Ext.define('MyApp.model.Comment', {
    extend: 'Ext.data.Model',
    requires: ['MyApp.model.Post'],
    fields: [
        {
            name: 'postId', reference: 'Post', type: 'int'
        },
        'id', 'name', 'body'
    ],
    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/comments',
        reader: {
            type: 'json'
        }
    },
    validators: {
       
        name: [ { type: 'length', min: 7 }],
    }



}, function () {
    //traverse
    MyApp.model.Post.load(1, {
        callback: function (post) {
            // console.log('Post: ' + post.get('title'));
            post.comments(function (comments) {
                comments.each(function (comment) {
                    //console.log('Comment: ' + comment.get('name') + "commentId" + comment.get("id"));
                });
            });
        }
    });
    //inverse relationship
    MyApp.model.Comment.load(1, {
        callback: function (comment) {
            comment.getPost(function (post) {
                console.log('Got post from comment: ' + post.get('title'));
            });
        }
    });
   

})