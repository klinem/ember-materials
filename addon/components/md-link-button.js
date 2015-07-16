import Ember from 'ember';
import RippleMixin from '../mixins/components/ripple';

const { LinkComponent } = Ember;

export default LinkComponent.extend(RippleMixin, {
  classNames: ['md-btn'],

  positionalParams: 'params',

  defaultLayout: null
});
