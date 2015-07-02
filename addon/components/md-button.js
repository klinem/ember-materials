import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'button',

  classNames: ['md-btn'],

  attributeBindings: [
    'ariaDisabled:aria-disabled',
    'disabled',
  ],

  ariaDisabled: computed('disabled', function() {
    return !!this.get('disabled') ? true : null;
  }),
});
