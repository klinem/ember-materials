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

test('it should be able to go to the next month', function(assert) {
  assert.expect(3);

  this.set('date', new Date(2015, 10, 1));

  this.render(hbs`
    {{md-datepicker-calendar currentDate=date}}
  `);

  let $header = this.$('.datepicker-calendar-header');
  let text = $header.text().trim();

  assert.ok(text.indexOf('November') !== -1,
    `Expected the calendar header to contain the text 'November', got '${text}'`);

  this.$('.datepicker-next').click();

  text = $header.text().trim();
  assert.ok($header.text().indexOf('December') !== -1,
    `Expected the calendar header to contain the text 'December', got '${text}'`);

  this.$('.datepicker-next').click();

  text = $header.text().trim();
  assert.ok($header.text().indexOf('January 2016') !== -1,
    `Expected the calendar header to contain the text 'January 2016', got '${text}'`)
});

test('it should be able to go to the previous month', function(assert) {
  assert.expect(3);

  this.set('date', new Date(2016, 1, 1));

  this.render(hbs`
    {{md-datepicker-calendar currentDate=date}}
  `);

  let $header = this.$('.datepicker-calendar-header');
  let text = $header.text().trim();

  assert.ok(text.indexOf('February') !== -1,
    `Expected the calendar header to contain the text 'February', got '${text}'`);

  this.$('.datepicker-prev').click();

  text = $header.text().trim();
  assert.ok($header.text().indexOf('January') !== -1,
    `Expected the calendar header to contain the text 'January', got '${text}'`);

  this.$('.datepicker-prev').click();

  text = $header.text().trim();
  assert.ok($header.text().indexOf('December 2015') !== -1,
    `Expected the calendar header to contain the text 'December 2015', got '${text}'`)
});
