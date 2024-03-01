EXt.define("MyApp.view.posts.PostFormController",{
    extend:"Ext.app.ViewController",
    alias: "controller.postformcontroller",
    init:function(){

    },
    onCacnelClick: function(btn,e,eOpts){

    },onSaveClick: function (button, e, opts) {

        let window = this.getView();
        console.log(window)
        let  references = window.getReferences();
        console.log(references);
        let form = references["postform"].getForm();
        console.log(form);

        if(form.isValid()){
            form.submit({
                method:"POST",
                url:"https://jsonplaceholder.typicode.com/posts",
                success:function(form,action){
                    Ext.Msg.alert('Failed', action.result.msg);
                },
                failure: function(form,action){
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            })
        }else{
            Ext.msg.alert("Error","Please correct the errors in the form");
        }
        {
            success:true
            msg:'Successfully added post'
        }
    }
})