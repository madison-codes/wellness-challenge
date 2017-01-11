import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task', 'Unit | Model | task', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should return undefined without valid input', function(assert) {
  const task = this.subject({});

  assert.equal(task.get('student'), undefined, 'task attributes throw error if empty');
});
