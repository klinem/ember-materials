import Ember from 'ember';

const { run, RSVP, typeOf } = Ember;

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
  onTransitionEnd(callback, $element) {
    let finish = () => {
      run(this, callback);
    };

    if (!$element) {
      $element = this.$();
    }

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

  resolveEvent(eventName) {
    if ( this.attrs[eventName] && typeOf(this.attrs[eventName]) === 'function' ) {
      return this.attrs[eventName]();
    }
    return false;
  },

  resolveEventAsync(eventName, strict = false) {
    return new RSVP.Promise((resolve, reject) => {
      if ( this.attrs[eventName] && typeOf(this.attrs[eventName]) === 'function' ) {
        let res = this.attrs[eventName]();

        if ( typeOf( res ) === 'boolean' ) {
          return !!res ? resolve() : reject();
        } else if ( typeOf( res ) === 'object' && res.then ) {
          return res.then(resolve, reject);
        } else {
          return resolve();
        }
      } else {
        if ( strict ) {
          return reject();
        } else {
          return resolve();
        }
      }
    });
  }
});
