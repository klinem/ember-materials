import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggle() {
      this.toggleProperty('showDialog');
    },
    confirm() {
      return true;
    },

    cancel() {
      return true;
    }
  }
});
