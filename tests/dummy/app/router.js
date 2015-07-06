import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('comps', { path: '/components' }, function() {
    this.route('buttons');
    this.route('checkboxes');
    this.route('collapse');
    this.route('navbar');
    this.route('modals');
    this.route('dialogs');
    this.route('radios');
    this.route('sidenav');
    this.route('tables');
    this.route('pagination');
  });
});

export default Router;
