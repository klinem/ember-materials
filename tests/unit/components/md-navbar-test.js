import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const { run } = Ember;

moduleForComponent('md-navbar', 'Unit | Component | md navbar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it renders the title if present', function(assert) {
  assert.expect(4);

  var component = this.subject();

  this.render();

  assert.equal(this.$('.navbar-title').length, 0);

  run(() => component.set('title', 'Example'));

  let $title = this.$('.navbar-title');

  assert.equal($title.length, 1);
  assert.equal($title.text(), 'Example');
  assert.equal($title[0].tagName, 'SPAN');
});
