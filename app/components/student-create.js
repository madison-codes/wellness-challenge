import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createStudent: function() {
      this.sendAction('createAction');
    }
  }
});
