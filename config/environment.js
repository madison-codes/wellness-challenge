/* jshint node: true */
let auth0 = require('../app/auth0-vars');

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'wellness-challenge',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      // Here you can enable experimental features on an ember canary build
      // e.g. 'with-controller': true
    }
  },

  APP: {
    // Here you can pass flags/options to your application instance
    // when it is created
  }
};

  if (environment === 'development') {

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-simple-auth'] = {
      authenticationRoute: 'index',
      routeAfterAuthentication: 'home',
      routeIfAlreadyAuthenticated: 'home'
    };

    ENV['auth0-ember-simple-auth'] = {
      clientID: auth0.CLIENT_ID,
      domain: auth0.DOMAIN
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-simple-auth'] = {
      authenticationRoute: 'index',
      routeAfterAuthentication: 'home',
      routeIfAlreadyAuthenticated: 'home'
    };

    ENV['auth0-ember-simple-auth'] = {
      clientID: auth0.CLIENT_ID,
      domain: auth0.DOMAIN
    };
  }

  ENV.contentSecurityPolicy = {
    "connect-src": "'self' https://ab255.cloudant.com/wellness"
  };

  return ENV;
};
