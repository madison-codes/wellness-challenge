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
    saveUser: function(students){
      var updateUsers = this.store.createRecord('student', students)
      updateUsers.save()
    }
  }
});
