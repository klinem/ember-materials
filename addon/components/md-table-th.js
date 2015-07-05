import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'th',

  classNameBindings: [
    'sortBy:md-sortable',
    'sortedBy:md-sorted',
    'isDescending:md-descending'
  ],

  /**
   * @property onClick
   * @type String
   * @default onCellClick
   */
  onClick: 'onCellClick',

  /**
   * @property sortBy
   * @type String
   * @default null
   */
  sortBy: null,

  /**
   * @property sortedBy
   * @type Object
   * @default null
   */
  sortedBy: computed('sortBy', 'parentView.sortProperties.[]', function() {
    const sortBy = this.get('sortBy');
    const sortProps = this.get('parentView.sortProperties');

    if (!sortBy || !sortProps) {
      return null;
    }

    let prop = sortProps.find(p => {
      return p.property === sortBy;
    });

    return prop ? prop : null;
  }),

  /**
   * @property isDescending
   * @type Boolean
   * @default false
   */
  isDescending: computed('sortedBy', function() {
    let prop = this.get('sortedBy');

    if (prop) {
      return prop.isDescending;
    }
    return false;
  }),

  click() {
    let sortBy = this.get('sortBy');
    let onClick = this.get('onClick');

    if (sortBy && onClick) {
      this.get('parentView').send(onClick, sortBy);
    }
  }
});
