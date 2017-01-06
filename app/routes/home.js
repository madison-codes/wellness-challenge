import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    submitTasks(){
      var tasks = this.store.createRecord("task", {
        sweat: this.get('sweat'),
        rest: this.get('rest'),
        nutrition: this.get('nutrition'),
        personalWellness: this.get('personalWellness')
      });
      console.log(this.get('sweat'))
      // tasks.save();

      this.set('sweat', false);
      this.set('rest', false);
      this.set('nutrition', false);
      this.set('personalWellness', false);
    }
  }
});
