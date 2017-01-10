import DS from "ember-data";
import { Model } from 'ember-pouch';

export default Model.extend({
	student : DS.attr('string'),
	tasks: DS.hasMany('task')
});
