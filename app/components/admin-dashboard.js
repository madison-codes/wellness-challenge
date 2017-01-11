import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchDates: function() {
      let dStart = this.get('dateStart');
      let dEnd = this.get('dateEnd');
      let start = Date.parse(dStart);
      let end = Date.parse(dEnd);
    }
  }
});
