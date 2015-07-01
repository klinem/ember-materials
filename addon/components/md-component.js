import Ember from 'ember';

const { run } = Ember;

export function transitionSupport() {
  let el = document.createElement('mdTransition');
  let transitions = {
    'transition':'transitionend',
    'OTransition':'oTransitionEnd',
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
  };

  for (var t in transitions) {
    if ( el.style[t] !== undefined ) {
      return transitions[t];
    }
  }

  return false;
}

const transitionEvent = transitionSupport();

export default Ember.Component.extend({
  onTransitionEnd(callback) {
    let finish = () => {
      run(this, callback);
    };

    let $element = this.$();

    if ( transitionEvent ) {
      $element.one(transitionEvent, () => {
        return finish();
      });
    }
    else {
      finish();
    }

    return this;
  },
});
