import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    submitTasks(){
      var tasks = this.store.createRecord("task", {
        title: this.get('title')
      });
      tasks.save();

      this.set('title', '');
    }
  }
});
