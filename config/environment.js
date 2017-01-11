/* jshint node: true */
let auth0 = require('../app/auth0-vars');

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'wellness-challenge',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
    }
  },

  APP: {
  }
};

  if (environment === 'development') {


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
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  ENV.remote_couch = 'https://ab255.cloudant.com/wellness';
  ENV.local_couch = 'wellness';

  if (environment === 'production') {
    ENV.rootURL = '/';
    ENV.remote_couch = 'https://ab255.cloudant.com/wellness';
    ENV.local_couch = 'wellness';
    ENV['ember-simple-auth'] = {
      authenticationRoute: 'index',
      routeAfterAuthentication: 'home',
      routeIfAlreadyAuthenticated: 'home'
    };

    ENV['auth0-ember-simple-auth'] = {
      clientID: CLIENT_ID,
      domain: DOMAIN
    };
  }

  ENV.contentSecurityPolicy = {
    "connect-src": "'self' https://ab255.cloudant.com/wellness"
  };

  return ENV;
};
