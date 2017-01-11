import Ember from 'ember';
// import VerticalBarChartComponent from 'ember-charts/components/vertical-bar-chart';

export default Ember.Component.extend({
  sweat: Ember.computed.filterBy('tasks','sweat', 1),
  rest: Ember.computed.filterBy('tasks','rest', 1),
  nutrition: Ember.computed.filterBy('tasks','nutrition', 1),
  personalWellness: Ember.computed.filterBy('tasks','personalWellness', 1),

  actions: {
    graphData(model) {
      const data = JSON.parse((model));
      console.log(data);
      // return data;
    }
  }
});
