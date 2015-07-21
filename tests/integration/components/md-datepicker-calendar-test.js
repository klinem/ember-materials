import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('md-datepicker-calendar', 'Integration | Component | md datepicker calendar', {
  integration: true
});

test('it should show the correct month and year', function(assert) {
  assert.expect(2);

  this.set('date', new Date(2015, 0, 1));

  this.render(hbs`
    {{md-datepicker-calendar currentDate=date}}
  `);

  let headerText = this.$('.datepicker-calendar-header').text().trim();

  assert.ok(headerText.indexOf('January 2015') !== -1,
    `Expected the calendar header to contain the text 'Jaunary 2015', got '${headerText}'`);

  this.set('date', new Date(2013, 9, 20));

  headerText = this.$('.datepicker-calendar-header').text().trim();

  assert.ok(headerText.indexOf('October 2013') !== -1,
    `Expected the calendar header to contain the text 'October 2013', got '${headerText}'`);
});
