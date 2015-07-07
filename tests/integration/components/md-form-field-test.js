import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-form-field', 'Integration | Component | md form field', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('it should render the default HTML5 input types', function(assert) {
  assert.expect(4);

  this.render(hbs`
    {{md-form-field id="text"}}
    {{md-form-field type="number" id="number"}}
    {{md-form-field type="email" id="email"}}
    {{md-form-field type="file" id="file"}}
  `);

  assert.equal(this.$('#text input').attr('type'), 'text');
  assert.equal(this.$('#number input').attr('type'), 'number');
  assert.equal(this.$('#email input').attr('type'), 'email');
  assert.equal(this.$('#file input').attr('type'), 'file');
});

test('it should render a textarea', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{md-form-field type="textarea"}}
  `);

  assert.equal(this.$('textarea').length, 1);
});

test('it should render the label with the correct `for` attribute', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{md-form-field type="text" label="Test"}}
  `);

  let $id = this.$('.md-form-group').attr('id');

  assert.equal(this.$('label').text().trim(), 'Test');
  assert.equal(this.$('input').attr('id'), `field-${$id}`);
  assert.equal(this.$('label').attr('for'), `field-${$id}`);
});

test('it should add focused class to the form-group', function(assert) {
  assert.expect(0);
});
