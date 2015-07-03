import Ember from 'ember';

const { computed, on, run, typeOf } = Ember;

export default Ember.Component.extend({
  classNames: ['md-checkbox'],
  classNameBindings: ['checked', 'isDisabled', 'focused:md-focused'],

  attributeBindings: [
    'ariaDisabled:aria-disabled',
    'ariaLabel:aria-label',
    'isDisabled:disabled',
    'tabIndex:tabindex'
  ],

  ariaRole: 'checkbox',

  setupEventListeners: on('didInsertElement', function() {
    this.$()
      .on('mousedown', () => this.mousedown())
      .on('focus', () => this.focus())
      .on('blur', () => this.blur())
      .on('keypress', (e) => this.keydown(e));
  }),

  /**
   * @property value
   * @type Boolean
   * @default false
   */
  value: false,

  /**
   * @property disabled
   * @type Boolean
   * @default false
   */
  disabled: false,

  /**
   * @property checked
   * @type Boolean
   * @default false
   */
  checked: computed('value', function() {
    return !!this.get('value');
  }),

  /**
   * @property parentDisabled
   * @type Boolean
   * @default false
   */
  parentDisabled: computed('parentView.disabled', function() {
    let parentDisabled = this.get('parentView.disabled');
    if (typeOf(parentDisabled) === 'boolean') {
      return !!parentDisabled;
    }

    return false;
  }),

  isDisabled: computed('disabled', 'parentDisabled', function() {
    return (this.get('disabled') || this.get('parentDisabled')) ? "disabled" : null;
  }),

  /**
   * @property ariaDisabled
   * @type Boolean
   * @default false
   */
  ariaDisabled: computed('isDisabled', function() {
    return !!this.get('disabled') ? true : null;
  }),

  /**
   * @property ariaLabel
   * @type String
   * @default null
   */
  ariaLabel: computed.alias('label'),

  /**
   * @property tabIndex
   * @type Number
   * @default 0
   */
  tabIndex: computed('tabindex', 'disabled', function() {
    if (!!this.get('disabled')) {
      return -1;
    } else {
      return this.get('tabindex') || 0;
    }
  }),

  /**
   * @method keydown
   */
  keydown(e) {
    let key = e.which || e.keyCode;

    if ((key === 13 || key === 32) && !this.get('isDisabled')) {
      this.setProperties({
        focused: true,
        value: !this.get('value')
      });
    }
  },

  /**
   * @method focus
   */
  focus() {
    if (!this.get('mouseActive')) {
      this.set('focused', true);
    }
  },

  /**
   * @method blur
   */
  blur() {
    this.set('focused', false);
  },

  /**
   * @method click
   */
  click() {
    if (!this.get('isDisabled')) {
      this.toggleProperty('value');
    }
  },

  /**
   * @method mousedown
   */
  mousedown() {
    this.set('mouseActive', true);

    run.later(() => {
      this.set('mouseActive', false);
    }, 100);
  }
});
