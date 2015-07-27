import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('md-dropdown-menu', 'Integration | Component | md dropdown menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-dropdown-menu}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-dropdown-menu}}
      template block text
    {{/md-dropdown-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
