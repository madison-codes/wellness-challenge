import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  student          : DS.belongsTo('student'),
  date             : DS.attr('string'),
  sweat            : DS.attr('number'),
  rest             : DS.attr('number'),
  nutrition        : DS.attr('number'),
  personalWellness : DS.attr('number')
});
