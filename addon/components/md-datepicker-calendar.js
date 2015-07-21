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
  calendarYear: computed('currentDate', {
    get() {
      return get(this, 'currentDate').getFullYear();
    }
  }),

  /**
   * @property headerText
   * @type String
   */
  headerText: computed('calendarYear', 'calendarMonth', {
    get() {
      const month = get(this, 'calendarMonth');
      const year = get(this, 'calendarYear');

      return `${getMonthName(month)} ${year}`;
    }
  }),

  /**
   * @property displayDays
   */
  displayDays: computed('startDay', {
    get() {
      const start = get(this, 'startDay');

      return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
  }),

  weeks: computed('startDay', 'currentDate', function() {
    const startDay = get(this, 'startDay');
    const current = get(this, 'currentDate');
    const startOfWeek = current.getDay();
    const endOfMonth = 30;

    let weeks = [];
    let week = [];
    let day = 1;

    

    return weeks;
  })
});

function getMonthName(month) {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'][month];
}
