import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const { run } = Ember;

moduleForComponent('md-navbar', 'Unit | Component | md navbar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders the title if present', function(assert) {
  assert.expect(3);

  var component = this.subject({
    collapsable: false
  });

  this.render();

  assert.equal(this.$('.navbar-title').length, 0);

  run(() => component.set('title', 'Example'));

  let $title = this.$('.navbar-title');

  assert.equal($title.length, 1);
  assert.equal($title.text(), 'Example');
});
