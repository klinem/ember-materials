import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'i',

  classNames: ['md-icon'],

  attributeBindings: [
    'dataIcon:data-icon'
  ],

  dataIcon: computed('icon', function() {
    return this.get('icon');
  })
});
