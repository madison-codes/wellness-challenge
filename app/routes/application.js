import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  actions: {
    login: function() {
      let lockOptions = {
        auth: {
          params: { scope: 'openid' }
        }
      };
      this.get('session').authenticate('simple-auth-authenticator:lock', lockOptions);
    },

    logout: function() {
      this.get('session').invalidate();
    },

    openModal: function(infoModal, model) {
      this.render(infoModal, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },

    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
