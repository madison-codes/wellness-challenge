import Ember from 'ember';
import config from './config/environment';
// import calendar from '/templates/calendar';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('calendar');
  this.route('dashboard');
  this.route('profile');
});

export default Router;
