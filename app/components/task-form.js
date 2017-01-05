import Ember from 'ember';


export default Ember.Component.extend({

  actions: {
    submitTasks: function() {
      this.sendAction('createAction');
    }
  }
});
