import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('md-dropdown-container', 'Integration | Component | md dropdown container', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-dropdown-container}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-dropdown-container}}
      template block text
    {{/md-dropdown-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
