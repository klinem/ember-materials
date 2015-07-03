import Ember from 'ember';
import MdCheckbox from './md-checkbox';

const { computed } = Ember;

export default MdCheckbox.extend({
  ariaRole: 'radio',

  mdClass: 'md-radio',

  /**
   * @property checked
   * @override
   * @type Boolean
   * @default false
   */
  checked: computed('parentView.model', 'value', function() {
    return this.get('parentView.model') === this.get('value');
  }),

  /**
   * @method setValue
   * @override
   * @private
   */
  setValue() {
    this.get('parentView').set('model', this.get('value'));
  }
});

// import Ember from 'ember';
//
// const { computed, on, run } = Ember;
//
// export default Ember.Component.extend({
//   classNames: ['md-radio'],
//   classNameBindings: ['checked', 'isDisabled', 'focused:md-focused'],
//
//   attributeBindings: [
//     'ariaLabel:aria-label',
//     'ariaDisabled:aria-disabled',
//     'isDisabled:disabled',
//     'tabIndex:tabindex'
//   ],
//
//   setupEventListeners: on('didInsertElement', function() {
//     this.$()
//       .on('mousedown', () => this.mousedown())
//       .on('focus', () => this.focus())
//       .on('blur', () => this.blur())
//       .on('keypress', (e) => this.keydown(e));
//   }),
//
//
//   ariaRole: 'radio',
//
//   /**
//    * @property disabled
//    * @type Boolean
//    * @default null
//    */
//
//   disabled: false,
//
//   /**
//    * @property ariaLabel
//    * @type String
//    * @default null
//    */
//   ariaLabel: computed.alias('label'),
//
//   /**
//    * @property ariaDisabled
//    * @type Boolean
//    * @default false
//    */
//   ariaDisabled: computed('isDisabled', function() {
//     return !!this.get('isDisabled') ? true : null;
//   }),
//
//   /**
//    * @property isDisabled
//    * @type String
//    * @default null
//    */
//   isDisabled: computed('disabled', function() {
//     return this.get('disabled') ? "disabled" : null;
//   }),
//
//   /**
//    * @property tabIndex
//    * @type Number
//    * @default 0
//    */
//   tabIndex: computed('tabindex', 'disabled', function() {
//     if (!!this.get('disabled')) {
//       return -1;
//     } else {
//       return this.get('tabindex') || 0;
//     }
//   }),
//
//   checked: computed('parentView.model', 'value', function() {
//     return this.get('parentView.model') === this.get('value');
//   }),
//
//   setValue() {
//     this.get('parentView').set('model', this.get('value'));
//   },
//
//   click() {
//     if (!this.get('isDisabled')) {
//       this.setValue();
//     }
//   },
//
//   /**
//    * @method keydown
//    */
//   keydown(e) {
//     let key = e.which || e.keyCode;
//
//     if ((key === 13 || key === 32) && !this.get('isDisabled')) {
//       this.set('focused', true);
//       this.setValue();
//     }
//   },
//
//   /**
//    * @method focus
//    */
//   focus() {
//     if (!this.get('mouseActive')) {
//       this.set('focused', true);
//     }
//   },
//
//   /**
//    * @method blur
//    */
//   blur() {
//     this.set('focused', false);
//   },
//
//   /**
//    * @method mousedown
//    */
//   mousedown() {
//     this.set('mouseActive', true);
//
//     run.later(() => {
//       this.set('mouseActive', false);
//     }, 100);
//   }
// });
