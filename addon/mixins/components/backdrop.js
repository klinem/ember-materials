import Ember from 'ember';

const { RSVP, on } = Ember;

export default Ember.Mixin.create({
  backdropClass: 'md-backdrop',

  parentWillDestroy: on('willDestroyElement', function() {
    this.removeBackdrop();
  }),

  showBackdrop() {
    let $backdrop = this._createBackdrop();

    return new RSVP.Promise(resolve => {
      /*jshint -W030 */
      $backdrop[0].offsetWidth;

      $backdrop.addClass('in');

      this.set('$backdrop', $backdrop);
      this.onTransitionEnd(() => {
        return resolve();
      }, $backdrop);
    });
  },

  hideBackdrop() {
    return new RSVP.Promise(resolve => {
      let $backdrop = this.get('$backdrop');

      if (!$backdrop) {
        return resolve();
      }

      $backdrop.removeClass('in');
      this.onTransitionEnd(() => {
        this.removeBackdrop();

        return resolve();
      }, $backdrop);
    });
  },

  removeBackdrop() {
    let $backdrop = this.get('$backdrop');

    if ($backdrop && $backdrop.length) {
      $backdrop.remove();

      this.set('$backdrop', null);
    }
  },

  _createBackdrop() {
    let $backdrop = this.get('$backdrop');

    if (!$backdrop) {
      $backdrop = Ember.$(document.createElement('div'))
        .addClass(this.get('backdropClass'))
        .appendTo(Ember.$('body'));
    }

    return $backdrop;
  }
});
