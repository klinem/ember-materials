import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('comps', { path: '/components' }, function() {
    this.route('sidenav');
    this.route('collapse');
    this.route('buttons');
    this.route('navbar');
    this.route('modals');
    this.route('dialogs');
    this.route('radios');
  });
});

export default Router;
