import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  // model(){
  //   // var userData = JSON.parse(localStorage.getItem('ember_simple_auth-session'));
  //   // var studentName = userData.authenticated.profile.name;
  //   return this.store.findRecord('student');
  // },
  model() {
    return this.store.findRecord('student', 'D59CF659-7F67-D360-8EEC-D6139F37A3D9');
  },
  actions: {
    submitTasks: function(tasks){
      const updatedTask = this.store.createRecord('task', tasks);
      // console.log(this.controller.get('model'))
      const student = this.controller.get('model');
      student.get('tasks').pushObject(updatedTask);
      updatedTask.save().then(() => student.save());
    },
    saveUser: function(){
      let StudentName = {}
      var userData = JSON.parse(localStorage.getItem('ember_simple_auth-session'));
      var studentName = { student: userData.authenticated.profile.name };
      var newUser = this.store.createRecord('student', studentName);
      newUser.save();
    }
  }
});
