import Ember from 'ember';

export default Ember.Component.extend({

  updateTasks: function (tasks) {
    // this.route.get('tasks');
    // this.controller.get('tasks');
    return tasks;
  },

});
