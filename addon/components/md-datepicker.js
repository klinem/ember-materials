import Ember from 'ember';
import DateUtil from 'ember-materials/utils/date-util';

const { get, computed, typeOf } = Ember;

export default Ember.Component.extend({
  /**
   * @property classNames
   * @type Array
   * @default ['md-datepicker']
   */
  classNames: ['md-datepicker'],

  /**
   * @property date
   * @type Date
   * @default new Date()
   */
  date: (new Date()),

  /**
   * @property activeDate (computed)
   * @type Date
   * @default .date
   */
  activeDate: computed('date', function() {
    const date = get(this, 'date');

    if (!date || typeOf(date) !== 'date') {
      return new Date();
    }

    return date;
  }),

  /**
   * @property dateInfo (computed)
   * @type Object
   */
  dateInfo: computed('activeDate', function() {
    const date = get(this, 'activeDate');

    return {
      date: date.getDate(),
      year: date.getFullYear(),
      month: DateUtil.monthShortName(date),
      dayOfWeek: DateUtil.weekDayName(date)
    };
  }),

  actions: {
    /**
     * @method setDate
     * @param {Date} date
     */
    setDate(date) {
      if (!date || typeOf(date) !== 'date') {
        return null;
      }

      this.set('date', date);
    }
  }
});
