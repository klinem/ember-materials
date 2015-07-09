import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const { run } = Ember;

moduleForComponent('md-checkbox', 'Unit | Component | md checkbox', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Renders the component to the page
  this.render();
  assert.equal(this.$().hasClass('md-checkbox'), true);
});


test('it should set all disabled attrs when disabled', function(assert) {
  assert.expect(5);

  var component = this.subject();

  this.render();

  assert.equal(this.$().attr('disabled'), undefined);
  assert.equal(this.$().attr('aria-disabled'), undefined);

  run(() => component.set('disabled', true));

  assert.equal(this.$().attr('tabindex'), '-1');
  assert.equal(this.$().attr('aria-disabled'), 'true');
  assert.equal(this.$().attr('disabled'), 'disabled');
});

test('it should toggle the value when clicked', function(assert) {
  assert.expect(3);

  var component = this.subject({
    value: false
  });
  this.render();

  assert.equal(component.get('value'), false);

  this.$().click();

  assert.equal(component.get('value'), true);

  this.$().click();

  assert.equal(component.get('value'), false);
});

test('it should not toggle the value if disabled', function(assert) {
  assert.expect(1);

  var component = this.subject({
    value: false,
    disabled: true
  });

  this.render();
  this.$().click();

  assert.equal(component.get('value'), false);
});


test('it should bind the aria-label', function(assert) {
  assert.expect(1);

  this.subject({
    label: 'Test'
  });

  this.render();

  assert.equal(this.$().attr('aria-label'), 'Test');
});

test('it should bind the tab index', function(assert) {
  assert.expect(2);

  var component = this.subject();

  this.render();
  assert.equal(this.$().attr('tabindex'), "0");

  run(() => component.set('tabindex', 2));

  assert.equal(this.$().attr('tabindex'), "2");
});

moduleForComponent('md-checkbox', 'Integration | Component | md checkbox', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('all checkboxes should be disabled if the parentView is disabled', function(assert) {
  assert.expect(2);

  this.set('parentDisabled', false);

  this.render(hbs`
    {{#md-checkbox-group disabled=parentDisabled}}
      {{md-checkbox id="test"}}
    {{/md-checkbox-group}}
  `);

  assert.equal(this.$('#test').attr('disabled'), undefined);

  this.set('parentDisabled', true);

  assert.equal(this.$('#test').attr('disabled'), 'disabled');
});
