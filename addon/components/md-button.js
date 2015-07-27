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
      Ember.deprecate('Binding an action to `onClick` is deprecated. Please use `on-click` instead.', false);
      this.attrs.onClick();
    } else if (this.attrs['on-click']) {
      this.attrs['on-click']();
    }

    return true;
  }
});
