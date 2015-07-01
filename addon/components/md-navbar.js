import Ember from 'ember';

 const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'nav',

  classNames: ['md-navbar'],

  classNameBindings: ['collapsable'],

  /**
   * @property fluid
   * @type Boolean
   * @default false
   */
  fluid: false,

  /**
   * The class to wrap the content of the navbar with
   *
   * @property containerClass
   * @type String
   * @default container
   */
  containerClass: computed('fluid', {
    get() {
      if (this.get('fluid')) {
        return 'md-container-fluid';
      }
      return 'md-container';
    }
  }),

  /**
   * @property title
   * @type String
   * @default null
   */
   title: null,

   /**
    * The path for the title to link to.
    *
    * @property titlePath
    * @type String
    * @default null
    */
  titlePath: null,

  /**
   * @property collapse
   * @type Boolean
   * @default true
   */
  collapsable: true,

  /**
   * @property isCollapsed
   * @type Boolean
   * @default false
   */
  isCollapsed: false,

  actions: {
    toggleCollapse() {
      this.toggleProperty('isCollapsed');
    }
  }
});
