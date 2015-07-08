import Ember from 'ember';

const { on } = Ember;

export default Ember.Mixin.create({

  /**
   * @property rippleElement
   * @type String|Object
   * @default null
   */
  rippleElement: null,

  /**
   * @property ripple
   * @type Boolean
   * @default true
   */
  ripple: true,

  /**
   * @property rippleContainer
   * @type String
   * @default md-ripple-container
   */
  rippleContainer: 'md-ripple-container',

  /**
   * @property rippleCentered
   * @type Boolean
   * @default false
   */
  rippleCentered: false,

  initializeRipple: on('didInsertElement', function() {
    if (this.get('ripple') && this.get('rippleContainer')) {

      let $container = Ember.$(`<div class="${this.get('rippleContainer')}" />`);
      let $ripple    = Ember.$('<div class="md-ripple" />');

      $container.append($ripple).appendTo(this.$());

      let $element;
      let element = this.get('rippleElement');

      if (!element) {
        $element = this.$();
      } else if (Ember.typeOf(element) === 'string') {
        $element = this.$(element);
      } else {
        $element = element;
      }

      $element.on('mousedown touchstart', (e) => this.startRipple(e, $ripple[0]));
      $element.on('mouseup mouseleave touchend blur', (e) => this.endRipple(e, $ripple[0]));
    }
  }),

  startRipple(event, ripple) {
    if (!ripple.style.width && !ripple.style.height) {
      const { height, width } = this.get('element').getBoundingClientRect();

      this.boundWidth = width;
      this.boundHeight = height;

      const rippleSize = Math.sqrt(width * width + height * height) * 2 + 2;

      ripple.style.width = rippleSize + 'px';
      ripple.style.height = rippleSize + 'px';
    }

    ripple.classList.add('md-visible');

    if (event.type === 'mousedown' && this.ignoreMousedown) {
      this.ignoreMousedown = false;
    } else {
      if (event.type === 'touchstart') {
        this.ignoreMousedown = true;
      }

      if (this.frameCount > 0) {
        return;
      }

      this.frameCount = 1;

      const bounds = event.currentTarget.getBoundingClientRect();
      let x;
      let y;

      if (event.clientX === 0 && event.clientY === 0) {
        x = Math.round(bounds.width / 2);
        y = Math.round(bounds.height / 2);
      } else {
        let clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        let clientY = event.clientY ? event.clientY : event.touches[0].clientY;

        x = Math.round(clientX - bounds.left);
        y = Math.round(clientY - bounds.top);
      }

      this.setRippleStyles(ripple, x, y);
      window.requestAnimationFrame(() => this.handleAnimationFrame(ripple, x, y));
    }

    return true;
  },

  endRipple(event, ripple) {
    if (event && event.detail !== 2) {
      ripple.classList.remove('md-visible');
    }

    return true;
  },

  setRippleStyles(ripple, x, y, start = true) {
    let transform;
    let scale;
    let size;
    let offset = `translate(${x}px, ${y}px)`;

    if (start) {
      scale = 'scale(0.0001, 0.0001)';
      size = '1px';
    } else {
      scale = '';
      size = 0;

      if (this.get('rippleCentered')) {
        offset = `translate(${this.boundWidth / 2}px, ${this.boundHeight / 2}px)`;
      }
    }

    transform = `translate(-50%, -50%) ${offset} ${scale}`;

    ripple.style.webkitTransform = transform;
    ripple.style.msTransform = transform;
    ripple.style.transform = transform;

    if (start) {
      ripple.classList.remove('md-animating');
    } else {
      ripple.classList.add('md-animating');
    }
  },

  handleAnimationFrame(ripple, x, y) {
    if (this.frameCount-- > 0) {
      window.requestAnimationFrame(() => this.handleAnimationFrame(ripple, x, y));
    } else {
      this.setRippleStyles(ripple, x, y, false);
    }
  }
});
