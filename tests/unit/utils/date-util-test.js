import dateUtil from '../../../utils/date-util';
import { module, test } from 'qunit';

module('Unit | Utility | date util');

test('#monthName should return the correct month', function(assert) {
  assert.expect(3);

  assert.equal(dateUtil.monthName(1), 'February');
  assert.equal(dateUtil.monthName(5), 'June');
  assert.equal(dateUtil.monthName(11), 'December');
});

test('#monthName should accept a Date object as a paramter', function(assert) {
  assert.equal(dateUtil.monthName(new Date(2000, 9, 1)), 'October');
});

test('#monthShortName should return the shortened name', function(assert) {
  assert.expect(2);

  assert.equal(dateUtil.monthShortName(7), 'Aug');
  assert.equal(dateUtil.monthShortName(4), 'May');
});

test('#monthShortName should accept a Date object as a parameter', function(assert) {
  assert.equal(dateUtil.monthShortName(new Date(2000, 9, 1)), 'Oct');
});

test('#weekDayName should return the correct week day', function(assert) {
  assert.expect(3);

  assert.equal(dateUtil.weekDayName(1), 'Monday');
  assert.equal(dateUtil.weekDayName(4), 'Thursday');
  assert.equal(dateUtil.weekDayName(0), 'Sunday');
});
