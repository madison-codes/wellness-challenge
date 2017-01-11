import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('total-points-band', 'Integration | Component | total points band', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{total-points-band}}`);

  assert.equal(this.$().text().trim(), 'You have participaed 0 days. Keep up the good work.');
});
