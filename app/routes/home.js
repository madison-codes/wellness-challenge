import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    submitTasks: function(){
      var tasks = this.store.createRecord("task", {
        sweat: this.get('sweat'),
        rest: this.get('rest'),
        nutrition: this.get('nutrition'),
        personalWellness: this.get('personalWellness')
      });

      console.log('route');
      // console.log(this);
      // var sweat = this.get('sweat');
      // var tasks = this.store.createRecord("task", {
      //   sweat: this.set('sweat'),
      //   rest: this.get('rest'),
      //   nutrition: this.get('nutrition'),
      //   personalWellness: this.get('personalWellness')
      // });
      // tasks.save();
      // this.set('sweat', true);
      // this.set('rest', true);
      // this.set('nutrition', true);
      // this.set('personalWellness', true);
    }
  }
});
