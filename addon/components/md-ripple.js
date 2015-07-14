import Ember from 'ember';
import RippleMixin from '../mixins/components/ripple';

export default Ember.Component.extend(RippleMixin, {
  classNames: ['md-ripple-container'],

  createRipple() {
    return this.$('.md-ripple');
  },

  getRippleElement() {
    let $parent = this.$().parent();
    while(window.getComputedStyle($parent[0])['pointer-events'] === 'none') {
      $parent = $parent.parent();
    }

    return $parent;
  }
});
