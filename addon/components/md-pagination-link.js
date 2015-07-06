import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'a',

  classNameBindings: [
    'disabled',
    'current',
    'type',
  ],

  /**
   * @property disabled
   * @type Boolean
   * @default null
   */
  disabled: false,

  /**
   * @property text
   * @type String
   * @default null
   */
  text: computed('page', 'type', function() {
    const type = this.get('type');

    switch (type) {
      case 'overflow':
        return Ember.String.htmlSafe('&hellip;');
      default:
        return this.get('page');
    }
  }),

  /**
   * @property type
   * @default String
   * @default type
   */
  type: 'page',

  /**
   * @property page
   * @type Number
   * @default null
   */
  page: null,

  /**
   * @property isCurrent
   * @type Boolean
   * @default null
   */
  current: computed('parentView.page', 'page', function() {
    return this.get('parentView.page') === this.get('page');
  }),

  click() {
    if (this.attrs.onClick && this.get('page') && !this.get('disabled')) {
      this.attrs.onClick(this.get('page'));
    }

    return false;
  }
});
