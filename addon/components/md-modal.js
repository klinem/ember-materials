import Ember from 'ember';
import MdComponent from './md-component';
import BackdropMixin from '../mixins/components/backdrop';

const { on } = Ember;

export default MdComponent.extend(BackdropMixin, {
  classNames: ['md-modal'],
  classNameBindings: ['in'],

  show: false,

  transitioning: false,

  in: false,

  onInitialInsert: on('didInsertElement', function() {
    if ( this.get('show') ) {
      this.reveal();
    }
  }),

  didUpdate() {
    if ( this.get('show') && !this.get('in') ) {
      this.reveal();
    } else if ( !this.get('show') && this.get('in')) {
      this.hide();
    }
  },

  reveal() {
    return this.resolveEventAsync('onReveal').then(() => {
      return this.showBackdrop().then(() => {
        this.$().show().scrollTop(0);

        this.setProperties({
          transitioning: true,
          in: true
        });

        return this.onTransitionEnd(() => {
          this.set('transitioning', false);

          this.resolveEvent('didReveal');
        });
      });
    });
  },

  hide() {
    return this.resolveEventAsync('onHide').then(() => {
      this.setProperties({
        transitioning: true,
        in: false
      });

      return this.onTransitionEnd(() => {
        this.$().hide();

        return this.hideBackdrop().then(() => {
          this.set('transitioning', false);

          this.resolveEvent('didHide');
        });
      });
    });
  }
});
