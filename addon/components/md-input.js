import Ember from 'ember';

const { typeOf } = Ember;

export default Ember.TextField.extend({
  /**
   * @property tagName
   * @type String
   * @default input
   */
  tagName: 'input',

  /**
   * @property classNames
   * @type Array
   * @default ['md-input']
   */
  classNames: ['md-input'],

  /**
   * @method didInsertElement
   */
  didInsertElement() {
    if (this.attrs['on-invalid'] && typeOf(this.attrs['on-invalid']) === 'function') {
      this.$().on('invalid', (e) => this.didBecomeInvalid(e));
    }
  },

  /**
   * @method didBecomeInvalid
   */
  didBecomeInvalid(e) {
    this.attrs['on-invalid'](e);
  }
});
