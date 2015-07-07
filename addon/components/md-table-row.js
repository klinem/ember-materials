import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'tr',

  classNameBindings: [
    'selected:md-selected'
  ],

  /**
   * @property selectable
   * @type Boolean
   * @default false
   */
  selectable: computed('selected', {
    get() {
      return !!this.attrs.selected;
    }
  }),

  /**
   * @property selected
   * @type Boolean
   * @default null
   */
  selected: null,

  actions: {
    /**
     * @method onSelect
     */
    onSelect() {
      if ( this.attrs.onSelect ) {
        this.attrs.onSelect();
      }
    }
  }

});
