import { test, skip } from 'qunit';
import moduleForAcceptance from 'wellness-challenge/tests/helpers/module-for-acceptance';
import Ember from 'ember';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';
import { invalidateSession, authenticateSession, currentSession } from '../helpers/ember-simple-auth';
import destroyApp from '../helpers/destroy-app';
import config from '../../config/environment';

moduleForAcceptance('Acceptance | wellness');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

const { tryInvoke } = Ember;

describe('Acceptance: Authentication', function() {
  let application;
  let server;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    tryInvoke(server, 'shutdown');
    destroyApp(application);
  });
});

skip('clicking on checkboxes and "submit" button registers daily tasks to database', function(assert) {
// visit('/login');
// log in as student
// routes to ('/home')
// click on check boxes to complete tasks
// click on submit button
// how to check something is in the db?
});

skip('visit user dashboard page will render tasks of the week', function(assert) {
// visit('/login');
// log in as student
// routes to '/home'
// click on '.dash-link'
// visit('/dashboard');
// render {{task-count-day}} component
// render {{task.date}} component
// if tasks exist, render corresponding stars
});

skip('visit admin-dashboard page will render top ten users', function(assert) {
// visit('/login');
// log in as admin
// routes to ('/home')
// {{#if (eq session.data.authenticated.profile.name 'MaryJane ')}}
// ^^ set admin auth to match
// render {{admin-dashboard}} component
// make and render {{top-ten-wk}} component
// make and render {{top-ten-mod}} component
});
