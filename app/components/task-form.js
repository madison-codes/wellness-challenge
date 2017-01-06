import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createAction: function() {
      var tasks = {
        sweat: this.get('sweat') ? 1 : 0,
        rest: this.get('rest') ? 1 : 0,
        nutrition: this.get('nutrition') ? 1 : 0,
        personalWellness: this.get('personalWellness') ? 1 : 0
      };
      console.log('Component');
      console.log(tasks);


        // console.log(this.get('sweat'))
        // tasks.save();

      this.sendAction('submitTasks');
    },
    getTasks: function(){
      console.log('firing');
    }
  }
});
