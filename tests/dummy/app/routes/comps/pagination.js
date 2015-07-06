import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let items = Ember.A([]);

    for(var i = 1; i <= 50; i++) {
      items.pushObject({
        name: `Item ${i}`,
        amount: (Math.random() * i).toFixed(2),
      });
    }

    return items;
  }
});
