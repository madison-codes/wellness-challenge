import DS from 'ember-data';

export default DS.Model.extend({
  dateStart : DS.attr('number'),
  dateEnd : DS.attr('number')
});
