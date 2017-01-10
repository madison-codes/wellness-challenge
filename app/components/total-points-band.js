import Ember from 'ember';

export default Ember.Component.extend({
  // model(){
  //   return this.route.get('tasks');
  // },
  actions: {
    updateTasks: function(tasks){
      return this.route.get('tasks');
    }
  }
});
