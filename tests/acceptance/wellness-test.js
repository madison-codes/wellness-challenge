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
// click on check boxes
// click on submit button
// how to check something is in the db?
});

skip('visit user dashboard page will render tasks of the week', function(assert) {
  visit('/dashboard');
// see {{task-count-day}} component
// see {{task.date}} component
// if tasks, render corresponding stars
});

skip('visit admin-dashboard page will render top ten users', function(assert) {
  visit('/home');
  // {{#if (eq session.data.authenticated.profile.name 'MaryJane ')}}
// ^^ set admin auth to match
// render {{admin-dashboard}} component
// make and render {{top-ten-wk}} component
// make and render {{top-ten-mod}} component
});
