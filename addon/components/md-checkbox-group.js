import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['md-checkbox-group'],
  classNameBindings: ['disabled'],

  /**
   * @property disabled
   * @type Boolean
   * @default false
   */
  disabled: false,
});
