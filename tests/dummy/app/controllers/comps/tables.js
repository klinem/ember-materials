import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({

  sort: "name",

  sortProperties: computed('sort', function() {
    return this.get('sort').split(',').map(prop => {
      let desc = prop.indexOf('-') === 0;
      prop = desc ? prop.substring(1) : prop;

      return `${prop}:${desc ? 'desc' : 'asc'}`;
    });
  }),

  allSelected: computed('model.@each.isSelected', function() {
    return this.get('model').isEvery('isSelected');
  }),

  // allSelected: computed.oneWay('everyItemSelected'),

  sorted: computed.sort('model', 'sortProperties'),

  actions: {
    setSorting(properties) {
      if ( properties ) {
        let sorting = properties.map(prop => {
          let symbol = prop.isDescending ? '-' : '';

          return `${symbol}${prop.property}`;
        }).join(',');

        this.set('sort', sorting);
      }
    },

    selectAll() {
      this.get('model').setEach('isSelected', !this.get('allSelected'));
      this.notifyPropertyChange('allSelected');
    },

    selectOne() {

    }
  }
});
