import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    this.routes.findAll('task');
  }
});
