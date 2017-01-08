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
    }
    // add action to search specific dates to render results for week or mod
  }
});
