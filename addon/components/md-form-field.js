import Ember from 'ember';

const { computed, typeOf } = Ember;

export default Ember.Component.extend({
  classNames: ['md-form-group', 'js-form-group'],

  classNameBindings: [
    'isFocused:md-focused'
  ],

  /**
   * @property label
   * @type String
   * @default null
   */
  label: null,

  /**
   * @property type
   * @type String
   * @default text
   */
  type: 'text',

  /**
   * @property isInput
   * @type Boolean
   * @default true
   */
  isInput: computed('type', function() {
    const type = (this.get('type') || 'text').toLowerCase();

    return ["textarea"].indexOf(type) === -1;
  }),

  /**
   * @property isFocused
   * @type Boolean
   * @default false
   */
  isFocused: false,

  /**
   * @property inputId
   * @type String
   * @default
   */
  inputId: computed('elementId', function() {
    return `field-${this.get('elementId')}`;
  }),

  /**
   * @method focusIn
   */
  focusIn() {
    this.set('isFocused', true);

    if (this.attrs['on-focus'] && typeOf(this.attrs['on-focus']) === 'function') {
      this.attrs['on-focus']();
    }
  },

  /**
   * @method focusOut
   */
  focusOut() {
    this.set('isFocused', false);

    if (this.attrs['on-blur'] && typeOf(this.attrs['on-blur']) === 'function') {
      this.attrs['on-blur']();
    }
  }
});
