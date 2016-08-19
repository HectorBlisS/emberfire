import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contactos', function() {
    this.route('new');

    this.route('show', {
      path: ':contacto_id'
    });
  });
});

export default Router;
