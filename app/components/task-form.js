import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    updateTasks: function() {
      let userData = JSON.parse(localStorage.getItem('ember_simple_auth-session'));
      let studentName = userData.authenticated.profile.name;
      var date = moment(new Date()).format('ddd');
      var tasks = {
        student: studentName,
        date: date,
        sweat: this.get('sweat') ? 1 : 0,
        rest: this.get('rest') ? 1 : 0,
        nutrition: this.get('nutrition') ? 1 : 0,
        personalWellness: this.get('personalWellness') ? 1 : 0
      };
      this.sendAction('createAction', tasks);
      this.set('sweat', 0);
      this.set('rest', 0);
      this.set('nutrition', 0);
      this.set('personalWellness', 0);
    }
  }
});
