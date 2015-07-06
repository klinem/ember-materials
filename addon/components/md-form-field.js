import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['md-form-group'],

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
  type: 'text'
});
