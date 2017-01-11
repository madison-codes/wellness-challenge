import Ember from 'ember';
// import VerticalBarChartComponent from 'ember-charts/components/vertical-bar-chart';

export default Ember.Component.extend({
  // tasks: model,
  // height:
  rest: Ember.computed('tasks.@each.rest', function() {
    var tasks = this.get('tasks');
    return tasks.filterBy('rest', true);
  })
});
