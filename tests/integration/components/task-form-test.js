import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('task-form', 'Integration | Component | task form', {
  integration: true
});

test('it renders with checkbox label names', function(assert) {
  this.render(hbs`{{task-form}}`);

  assert.equal(this.$('.spec-sweat').text(), 'Sweat');

  assert.equal(this.$('.spec-rest').text(), 'Rest');

  assert.equal(this.$('.spec-diet').text(), 'Nutrition');

  assert.equal(this.$('.spec-pw').text(), 'Personal Wellness');
});
