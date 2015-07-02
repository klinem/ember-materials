import Ember from 'ember';
import Modal from './md-modal';

const { computed } = Ember;

export default Modal.extend({
  classNames: ['md-modal', 'md-dialog'],

  cancelDisabled: computed.or('cancelling', 'confirming'),
  confirmDisabled: computed.or('cancelling', 'confirming'),

  actions: {
    cancel() {
      this.set('cancelling', true);
      return this.resolveEventAsync('onCancel')
        .then(() => {
          this.set('show', false);
        }).finally(() => {
          this.set('cancelling', false);
        });
    },
    confirm() {
      this.set('confirming', true);
      return this.resolveEventAsync('onConfirm')
        .then(() => {
          this.set('show', false);
        }).finally(() => {
          this.set('confirming', false);
        });
    }
  }
});
