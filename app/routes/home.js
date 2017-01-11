import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findRecord('student', 'D59CF659-7F67-D360-8EEC-D6139F37A3D9');
  },
  actions: {
    submitTasks: function(tasks){
      const updatedTask = this.store.createRecord('task', tasks);
      const student = this.controller.get('model');
      student.get('tasks').pushObject(updatedTask);
      updatedTask.save().then(() => student.save());
    },
    saveUser: function(){
      var userData = JSON.parse(localStorage.getItem('ember_simple_auth-session'));
      var studentNameString = userData.authenticated.profile.name
      var studentName = { student: studentNameString };
      var Students = this.store.findAll('student')
      console.log(Students)
    }
  }
});
