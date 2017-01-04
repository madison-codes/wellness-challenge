import Ember from 'ember';


export default Ember.Component.extend({

  title: "",

  actions:{
    submitTasks(model){
      console.log('title', model);

    //   //Create the comment
    //   const comment = this.store.createRecord('comment',{
    //     comment: comment,
    //     author: author
    //   });
    //   //Get our post
    //   const post = this.controller.get('model');
    //   //Add our comment to our existing post
    //   post.get('comments').pushObject(comment);
    //   //Save the child then the parent
    //   comment.save().then(() => post.save());
    }
  }
});
