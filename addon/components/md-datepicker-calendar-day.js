import Ember from 'ember';

const { get, computed, typeOf } = Ember;

export default Ember.Component.extend({
  /**
   * @property classNames
   * @type Array
   * @default ['datepicker-calendar-day']
   */
  classNames: ['datepicker-calendar-day'],

  /**
   * @property classNameBindings
   * @type Array
   * @default []
   */
  classNameBindings: [
    'isActive:md-active',
    'isCurrent:md-current'
  ],

  /**
   * @property date
   * @type Date
   * @default null
   */
  date: null,

  /**
   * @property dayNumber (computed)
   * @type Number
   * @default null
   */
  dayNumber: computed('date', function() {
    const date = get(this, 'date');

    if (!date || typeOf(date) !== 'date') {
      return null;
    }

    return date.getDate();
  }),

  /**
   * @property isActive (computed)
   * @type Boolean
   * @default false
   */
  isActive: computed('date', 'parentView.date', function() {
    const date = get(this, 'date');
    const activeDate = get(this, 'parentView.date');

    return this._datesEqual(date, activeDate);
  }),

  /**
   * @property isCurrent
   * @type Boolean
   * @default false
   */
  isCurrent: computed('date', function() {
    const date = get(this, 'date');

    return this._datesEqual(date, new Date());
  }),

  /**
   * @method _datesEqual
   * @private
   * @param {Date} d1
   * @param {Date} d2
   * @returns {Boolean}
   */
   _datesEqual(d1, d2) {
     if (!d1 || !d2 || typeOf(d1) !== 'date' || typeOf(d2) !== 'date') {
       return false;
     }

     return (d1.getFullYear() === d2.getFullYear())
       && (d1.getMonth() === d2.getMonth())
       && (d1.getDate() === d2.getDate());
   }
});
