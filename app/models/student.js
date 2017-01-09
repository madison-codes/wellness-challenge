import DS from "ember-data";
import { Model } from 'ember-pouch';

export default Model.extend({
	student : DS.attr('string', {defaultValue: ""})
	tasks: DS.hasMany('task')
});
