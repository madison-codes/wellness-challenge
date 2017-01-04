import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  title       : DS.attr('string')
});


// new Student({}).save()
//
// if (!student.title) {
//   return error;
// } {
//   else Student({}).save();
// }
