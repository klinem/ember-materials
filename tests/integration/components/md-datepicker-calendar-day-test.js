import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('md-datepicker-calendar-day', 'Integration | Component | md datepicker calendar day', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-datepicker-calendar-day}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-datepicker-calendar-day}}
      template block text
    {{/md-datepicker-calendar-day}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
