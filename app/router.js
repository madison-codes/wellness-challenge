import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('calendar');
  this.route('dashboard');
  this.route('profile');
  this.route('login');
  this.route('protected');
});

export default Router;
