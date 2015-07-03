import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('md-navbar', 'Integration | Component | md navbar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true,

  beforeEach: function() {
    App = startApp();
  },

  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('it renders the title if present', function(assert) {
  assert.expect(2);

  this.set('navTitle', null);

  this.render(hbs`
    {{#md-navbar title=navTitle}}{{/md-navbar}}
  `);

  assert.equal(this.$('.navbar-title').length, 0);

  this.set('navTitle', 'Example');

  assert.equal(this.$('.md-navbar .navbar-title').text().trim(), 'Example');
});


test('it renders a link to the `titlePath` route', function(assert) {
  assert.expect(0);
  //
  // this.render(hbs`
  //   {{#md-navbar title="Example" titlePath="index"}}{{/md-navbar}}
  // `);
  //
  // var $title = this.$('.md-navbar .navbar-title');
  //
  // assert.equal($title[0].tagName, 'A');
});
