import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateTasks: function() {
      var tasks = {
        sweat: this.get('sweat') ? 1 : 0,
        rest: this.get('rest') ? 1 : 0,
        nutrition: this.get('nutrition') ? 1 : 0,
        personalWellness: this.get('personalWellness') ? 1 : 0
      };
      console.log(tasks);
      this.sendAction('createAction', tasks);

      this.set('sweat', 0);
      this.set('rest', 0);
      this.set('nutrition', 0);
      this.set('personalWellness', 0);
    }
  }
});
