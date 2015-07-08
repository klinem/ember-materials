import Ember from 'ember';
import ComponentsRippleMixin from '../../../mixins/components/ripple';
import { module, test } from 'qunit';

module('Unit | Mixin | components/ripple');

// Replace this with your real tests.
test('it works', function(assert) {
  var ComponentsRippleObject = Ember.Object.extend(ComponentsRippleMixin);
  var subject = ComponentsRippleObject.create();
  assert.ok(subject);
});
