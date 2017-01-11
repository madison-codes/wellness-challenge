import { moduleForModel, test } from 'ember-qunit';

moduleForModel('search-dates', 'Unit | Model | search dates', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should return undefined without valid input', function(assert) {
  const date = this.subject({});

  assert.equal(date.get('dateStart'), undefined, 'start date attributes throw error if empty');

  assert.equal(date.get('dateEnd'), undefined, 'end date attributes throw error if empty');
});
