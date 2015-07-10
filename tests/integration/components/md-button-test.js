import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-button', 'Integration | Component | md button', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('it should bind the `type` attribute', function(assert) {
  this.render(hbs`
    {{md-button type="submit"}}
  `);

  assert.equal(this.$('button').attr('type'), 'submit');
});

test('it binds the `disabled` and `aria-disabled` attributes', function(assert) {
  assert.expect(4);

  this.set('disabled', false);

  this.render(hbs`
    {{md-button disabled=disabled}}
  `);

  const button = this.$('button');

  assert.ok(!button.attr('disabled'));
  assert.ok(!button.attr('aria-disabled'));

  this.set('disabled', true);

  assert.ok(button.attr('disabled'));
  assert.ok(button.attr('aria-disabled'));
});

test('it should trigger an action on click', function(assert) {
  this.set('actions', {
    onClick() {
      assert.ok(true);
    }
  });

  this.render(hbs`
    {{md-button onClick=(action 'onClick')}}
  `);

  this.$('button').click();
});
