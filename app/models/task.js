import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  date             : DS.attr('string'),
  sweat            : DS.attr('number'),
  rest             : DS.attr('number'),
  nutrition        : DS.attr('number'),
  personalWellness : DS.attr('number')
});

// Ember model relationships --> user has many tasks


PUT // entire data object

PATCH // whatever you wanted updated
