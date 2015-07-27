import Ember from 'ember';

const { set, get, $ } = Ember;

export default Ember.Component.extend({
  /**
   * @property classNames
   * @type Array
   * @default ['md-dropdown-container']
   */
  classNames: ['md-dropdown-container'],

  /**
   * @property classNameBindings
   * @type Array
   */
  classNameBindings: [
    'isExpanded:md-in'
  ],

  /**
   * @property in
   * @type Boolean
   * @default false
   */
  isExpanded: false,

  /**
   * @method didUpdate
   */
  didUpdate() {
    if (get(this, 'isExpanded')) {
      Ember.run.next(() => {
        $(window).one('click.dropdown-container', () => this.hide());
      });
    }
  },

  /**
   * @method hide
   */
  hide() {
    set(this, 'isExpanded', false);
  },

  /**
   * @method willDestroyElement
   */
  willDestroyElement() {
    $(window).off('click.dropdown-container');
  },

  actions: {
    /**
     * @method toggle
     */
    toggle() {
      set(this, 'isExpanded', true);

      this.rerender();
    }
  }
});
