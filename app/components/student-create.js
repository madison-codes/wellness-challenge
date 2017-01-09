import Ember from 'ember';

export default Ember.Component.extend({
  action: {
    updateUsers: function() {
      var students = {
        student: this.get('student')
      };
      this.sendAction('createAction', students)
    }
  }
});
