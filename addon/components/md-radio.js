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
