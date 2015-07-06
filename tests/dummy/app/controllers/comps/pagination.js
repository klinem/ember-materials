import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,

  perPage: 5,

  itemCount: Ember.computed.alias('model.length'),

  paged: Ember.computed('model', 'page', 'perPage', function() {
    const page = this.get('page');
    const per  = this.get('perPage');

    let start = (page * per) - per;
    let end   = start + per;

    return this.get('model').slice( start, end );
  }),

  actions: {
    changePage(page) {
      this.set('page', page);
    }
  }
});
