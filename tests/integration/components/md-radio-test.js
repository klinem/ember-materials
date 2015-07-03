import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-radio', 'Integration | Component | md radio', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  this.render(hbs`{{#md-radio}}Test{{/md-radio}}`);

  let $radio = this.$('.md-radio');

  assert.equal($radio.length, 1);
  assert.equal($radio.attr('role'), 'radio');
  assert.equal($radio.find('.md-label').text().trim(), 'Test');
});

test('it renders the label if no block is present', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{md-radio label="Test"}}
  `);

  assert.equal(this.$('.md-radio .md-label').text().trim(), 'Test');
});

test('it should bind the correct attributes when disabled', function(assert) {
  assert.expect(5);

  this.set('isDisabled', false);

  this.render(hbs`
    {{#md-radio disabled=isDisabled}}
      Test
    {{/md-radio}}
  `);

  let $radio = this.$('.md-radio');

  assert.equal($radio.attr('disabled'), undefined);
  assert.equal($radio.attr('aria-disabled'), undefined);

  this.set('isDisabled', true);

  assert.equal($radio.attr('tabindex'), '-1');
  assert.equal($radio.attr('disabled'), 'disabled');
  assert.equal($radio.attr('aria-disabled'), 'true');
});

test('it should bind the `aria-label`', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#md-radio label="Test"}}
      Test
    {{/md-radio}}
  `);

  assert.equal(this.$('.md-radio').attr('aria-label'), 'Test');
});

test('it should correctly change the model value', function(assert) {
  assert.expect(5);

  this.set('modelValue', "one");

  this.render(hbs`
    {{#md-radio-group model=modelValue}}
      {{#md-radio value="one"}}One{{/md-radio}}
      {{#md-radio value="two"}}Two{{/md-radio}}
    {{/md-radio-group}}
  `);

  let $radio1 = this.$('.md-radio').eq(0);
  let $radio2 = this.$('.md-radio').eq(1);

  assert.equal($radio1.hasClass('checked'), true);
  assert.equal($radio2.hasClass('checked'), false);

  $radio2.click();

  assert.equal($radio1.hasClass('checked'), false);
  assert.equal($radio2.hasClass('checked'), true);
  assert.equal(this.get('modelValue'), 'two');
});

test('it should not be able to set the value if disabled', function(assert) {
  assert.expect(1);

  this.set('modelValue', 'one');

  this.render(hbs`
    {{#md-radio-group model=modelValue}}
      {{#md-radio value="one"}}One{{/md-radio}}
      {{#md-radio value="two" disabled=true}}Two{{/md-radio}}
    {{/md-radio-group}}
  `);

  this.$('.md-radio').eq(1).click();

  assert.equal(this.get('modelValue'), 'one');
});
