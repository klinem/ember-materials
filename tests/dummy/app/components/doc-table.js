import Ember from 'ember';

const { computed } = Ember;
const { capitalize } = Ember.String;

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['md-table', 'doc-table'],

  headers: 'parameter, type, default, description',

  tableHeaders: computed('headers', function() {
    return this.get('headers').split(',').map(h => {
      return capitalize(h.trim());
    });
  }),

  rows: computed('list.[]', function() {
    return this.get('list').map((item) => {
      let items = [];

      item.forEach(cell => {
        if (cell.indexOf('code') === 0) {
          items.push({
            isCode: true,
            text: cell.substring(5)
          });
        }
        else {
          items.push({ text: cell });
        }
      });

      return items;
    });
  })
});
