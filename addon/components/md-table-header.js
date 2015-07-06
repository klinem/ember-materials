import Ember from 'ember';

const { computed, typeOf, isBlank } = Ember;

export default Ember.Component.extend({
  tagName: 'thead',

  /**
   * @property sorting
   * @type String|Object
   * @default targetObject.sort
   */
  sorting: computed.alias('targetObject.sort'),

  /**
   * @property sortProperties
   * @type Array
   * @default []
   */
  sortProperties: computed('sorting', function() {
    let sorting = this.get('sorting') || "";
    let props = Ember.A([]);

    if (typeOf(sorting) === 'string' && !isBlank(sorting)) {
      sorting.split(',').forEach((prop) => {
        let desc = prop.indexOf('-') === 0;
        prop = desc ? prop.substring(1) : prop;

        props.pushObject({
          isDescending: desc,
          property: prop
        });
      });
    }

    return props;
  }),

  actions: {
    onCellClick(prop) {
      const props = this.get('sortProperties');

      if ( this.attrs.onSort ) {
        let property = findProperty(prop);
        let props = Ember.A();

        props.pushObject({
          isDescending: property ? !property.isDescending : false,
          property: prop
        });

        this.attrs.onSort(props);
      }

      function findProperty(prop) {
        return props.find(x => {
          return x.property === prop;
        });
      }
    }
  }
});
