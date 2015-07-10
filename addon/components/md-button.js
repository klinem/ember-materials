import Ember from 'ember';
import RippleMixin from '../mixins/components/ripple';

const { computed } = Ember;

export default Ember.Component.extend(RippleMixin, {
  tagName: 'button',

  classNames: ['md-btn'],

  attributeBindings: [
    'ariaDisabled:aria-disabled',
    'disabled',
    'type',
  ],

  ariaDisabled: computed('disabled', function() {
    return !!this.get('disabled') ? true : null;
  }),

  click() {
    if (this.attrs.onClick) {
      this.attrs.onClick();
    }
    
    return true;
  }
});
