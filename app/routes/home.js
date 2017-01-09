import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return this.store.findAll('task');
  },
  actions: {
    submitTasks: function(tasks){
      var updatedTasks = this.store.createRecord('task', tasks);
      updatedTasks.save();
    },
    saveUser: function(){
      var userData = JSON.parse(localStorage.getItem('ember_simple_auth-session'));
      var studentName = { student: userData.authenticated.profile.name };
      console.log(userData);
      console.log(studentName);

      var newUser = this.store.createRecord('student', studentName);
      newUser.save();
    }
  }
});
