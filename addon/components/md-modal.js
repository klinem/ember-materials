import Ember from 'ember';
import MdComponent from './md-component';
import BackdropMixin from '../mixins/components/backdrop';

const { get, on, observer, computed } = Ember;

export default MdComponent.extend(BackdropMixin, {
  classNames: ['md-modal'],
  classNameBindings: [
    'in',
    'isHidden:md-hidden'
  ],

  ariaRole: 'dialog',

  show: false,

  transitioning: false,

  in: false,

  /**
   * @property isHidden
   */
  isHidden: computed('show', 'transitioning', function() {
    return !get(this, 'show') && !get(this, 'transitioning');
  }),

  /**
   * @method showDidChange
   */
  showDidChange: observer('show', function() {
    if (get(this, 'show') && !get(this, 'in')) {
      return this.reveal();
    } else if (!get(this, 'show') && get(this, 'in')) {
      return this.hide();
    }
  }),

  /**
   * @method reveal
   */
  reveal() {
    return this.resolveEventAsync('onReveal').then(() => {
      return this.showBackdrop().then(() => {

        this.setProperties({
          transitioning: true,
          in: true
        });

        return this.onTransitionEnd(() => {
          this.set('transitioning', false);

          this.resolveEvent('on-revealed');
        });
      });
    });
  },

  /**
   * @method hide
   */
  hide() {
    return this.resolveEventAsync('onHide').then(() => {
      this.setProperties({
        transitioning: true,
        in: false
      });

      return this.onTransitionEnd(() => {
        return this.hideBackdrop().then(() => {
          this.set('transitioning', false);

          this.resolveEvent('on-hidden');
        });
      });
    });
  }
});
