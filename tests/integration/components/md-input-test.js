import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('md-input', 'Integration | Component | md input', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{md-input}}
  `);

  assert.ok(this.$('input').hasClass('md-input'));
});

test('it should register the `on-invalid` handler', function(assert) {

  this.set('actions', {
    didInvalidate() {
      assert.ok(true);
    }
  });

  this.render(hbs`
    {{md-input on-invalid=(action "didInvalidate")}}
  `);

  var e = new Ember.$.Event('invalid');

  this.$('input').trigger(e);
});
