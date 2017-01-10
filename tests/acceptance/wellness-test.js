import { test, skip } from 'qunit';
import moduleForAcceptance from 'wellness-challenge/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | wellness');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});


skip('clicking on checkboxes and "submit" button registers daily tasks to database', function(assert) {

});
