import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-dashboard', 'Integration | Component | admin dashboard', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-dashboard}}`);

  assert.equal(this.$().text().trim(), 'Welcome Top 10 Madison MJ Adam Select dates to view results Start: End: Select');
});
