import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('md-menu-item', 'Integration | Component | md menu item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-menu-item}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-menu-item}}
      template block text
    {{/md-menu-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
