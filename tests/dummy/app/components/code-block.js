/* global hljs */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  classNames: ['code-block'],

  lang: 'html',

  didRender() {
    this.$('pre code').each((i, block) => {
      let $block = $(block);

      $block.text( $.trim($block.text()) );

      hljs.highlightBlock(block);
    });
  }
});
