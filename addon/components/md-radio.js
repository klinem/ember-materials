import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['md-radio'],
  classNameBindings: ['isSelected:checked'],

  isSelected: computed('parentView.model', 'value', function() {
    return this.get('parentView.model') === this.get('value');
  }),

  click() {
    this.get('parentView').set('model', this.get('value'));
  }
});
