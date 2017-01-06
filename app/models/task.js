import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  sweat            : DS.attr('boolean'),
  rest             : DS.attr('boolean'),
  nutrition        : DS.attr('boolean'),
  personalWellness : DS.attr('boolean')
});
