import Ember from 'ember';
import MdComponent from './md-component';

const { computed, observer } = Ember;

export default MdComponent.extend({
  classNameBindings: ['transitionClass', 'in'],

  /**
   * @property show
   * @type Boolean
   * @default false
   */
  show: false,

  /**
   * @property transitioning
   * @type Boolean
   * @default false
   */
  transitioning: false,

  /**
   * @property in
   * @type Boolean
   * @default false
   */
  in: false,

  /**
   * @property transitionClass
   * @type String
   * @default md-collapse
   */
  transitionClass: computed('transitioning', {
    get() {
      return this.get('transitioning') ? 'md-collapsing' : 'md-collapse';
    }
  }),

  /**
   * @property canExpand
   * @type Boolean
   * @default true
   */
  canExpand: computed('transitioning', 'in', {
    get() {
      return !this.get('transitioning') && !this.get('in');
    }
  }),

  canCollapse: computed('transitioning', 'in', {
    get() {
      return !this.get('transitioning') && !!this.get('in');
    }
  }),

  showDidChange: observer('show', function() {
    this[this.get('show') ? 'expand' : 'collapse']();
  }),

  /**
   * @method expand
   */
  expand() {
    if (!this.get('canExpand')) {
      return;
    }

    this.setHeight(0).set('transitioning', true);

    Ember.run.next(() => {
      this.setHeight(this.getScrollHeight())
        .onTransitionEnd(() => {
          this.setHeight(null).setProperties({
            transitioning: false,
            in: true
          });
        });
    });
  },

  /**
   * @method collapse
   */
  collapse() {
    if (!this.get('canCollapse')) {
      return;
    }

    this.setHeight(this.getHeight())
      .setProperties({
        transitioning: true,
        in: false
      });

    Ember.run.next(() => {
      this.setHeight(0)
        .onTransitionEnd(() => {
          this.set('transitioning', false);
        });
    });
  },

  setHeight(val) {
    this.get('element').style['height'] = val ? `${val}px` : null;

    return this;
  },

  getHeight() {
    return parseInt(window.getComputedStyle(this.get('element'))['height'].replace('px', ''));
  },

  getScrollHeight() {
    return this.get('element')['scrollHeight'];
  }
});
