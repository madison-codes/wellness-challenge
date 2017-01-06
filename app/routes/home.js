import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    submitTasks: function(tasks){
      console.log(tasks);
      var updatedTasks = this.store.createRecord("task", tasks);
      updatedTasks.save();
      // this.set('sweat', true);
      // this.set('rest', true);
      // this.set('nutrition', true);
      // this.set('personalWellness', true);
    }
  }
});
