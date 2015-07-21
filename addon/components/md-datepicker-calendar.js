import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Component.extend({
  /**
   * @property classNames
   * @type Array
   * @default ['md-datepicker-calendar']
   */
  classNames: ['md-datepicker-calendar'],

  /**
   * @property date
   * @type Date
   */
  date: new Date(),

  /**
   * @property currentDate
   * @type Date
   * @default new Date()
   */
  currentDate: new Date(),

  /**
   * The day of the week to start the calendar on. 6 = Sunday, 1 = Monday, etc...
   *
   * @property startDay
   * @type Number
   * @default 6
   */
  startDay: 6,

  /**
   * @property calendarMonth
   * @type Number
   */
  calendarMonth: computed('currentDate', {
    get() {
      return get(this, 'currentDate').getMonth();
    }
  }),

  /**
   * @property calendarYear
   * @type Number
   */
  calendarYear: computed('currentDate', function() {
    return get(this, 'currentDate').getFullYear();
  }),

  /**
   * @property headerText
   * @type String
   */
  headerText: computed('calendarYear', 'calendarMonth', function() {
    const month = get(this, 'calendarMonth');
    const year = get(this, 'calendarYear');

    return `${getMonthName(month)} ${year}`;
  }),

  /**
   * @property displayDays
   */
  displayDays: computed('startDay', function() {
    return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  }),

  weeks: computed('startDay', 'currentDate', function() {
    const currentDate = get(this, 'currentDate');
    const dateProps = this._getDateProperties(currentDate);

    let weeks = [];
    let days = [];
    let daysInWeek;
    let emptyDays;
    let week;

    for(let i = 1; i <= dateProps.numberOfDays; i++) {
      days.push(new Date(dateProps.year, dateProps.month, i));
    }

    while(days.length) {
      daysInWeek = 7 - days[0].getDay(),
      emptyDays = 7 - daysInWeek;

      week = days.splice(0, daysInWeek);

      for(let i = 0; i < emptyDays; i++) {
        week.unshift(null);
      }

      weeks.push(week);
    }

    return weeks;
  }),

  /**
   * @method _getDateProperties
   * @private
   */
  _getDateProperties(date) {
    let month = date.getMonth();
    let year = date.getFullYear();
    let startOfMonth = new Date(year, month, 1);
    let endOfMonth = new Date(year, month + 1, 0);
    let startDayOfWeek = startOfMonth.getDay();

    return {
      month,
      year,
      endOfMonth,
      startOfMonth,
      startDayOfWeek,
      numberOfDays: endOfMonth.getDate(),
      numberOfWeeks: Math.ceil((startOfMonth.getDay() + endOfMonth.getDate()) / 7)
    };
  }
});

function getMonthName(month) {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'][month];
}
