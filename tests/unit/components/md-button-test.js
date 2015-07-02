import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const { run } = Ember;

moduleForComponent('md-button', 'Unit | Component | md button', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject();

  // Renders the component to the page
  this.render();
  assert.equal(this.$().hasClass('md-btn'), true);
});

test('it binds the disabled and aria-disabled attributes', function(assert) {
  assert.expect(4);

  var component = this.subject({
    disabled: false
  });

  this.render();

  assert.equal(this.$().prop('disabled'), false);
  assert.equal(this.$().attr('aria-disabled'), undefined);

  run(() => component.set('disabled', true));

  assert.equal(this.$().prop('disabled'), true);
  assert.equal(this.$().attr('aria-disabled'), "true");
});
