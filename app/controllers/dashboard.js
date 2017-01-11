import Ember from 'ember';
// import VerticalBarChartComponent from 'ember-charts/components/vertical-bar-chart';
import totalAll from '../helpers/task-count-total';

export default Ember.Controller.extend( {
  session: Ember.inject.service()
  //
  // visualizations: Ember.computed.map('model', function(task){
  //   let mapData = [];
  //   const value = totalAll(task);
  //   const object =  Ember.Object.create({
  //     value: value,
  //     label: task.date
  //   });
  //   mapData.push(object);
  // })
});
