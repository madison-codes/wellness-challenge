import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import VerticalBarChartComponent from 'ember-charts/components/vertical-bar-chart';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return this.store.findAll('task');
  }
  // data: model
});
