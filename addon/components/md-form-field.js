import Ember from 'ember';

const { computed, on } = Ember;

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
   * @method initializeListeners
   */
  initializeListeners: on('didInsertElement', function() {
    this.$('input, textarea').on('focus blur', () => this.toggleFocus());
  }),

  /**
   * @method toggleFocus
   */
  toggleFocus() {
    this.toggleProperty('isFocused');
  }
});
