/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var Funnel     = require('broccoli-funnel');

/*
  This Brocfile specifes the options for the dummy test app of this
  addon, located in `/tests/dummy`

  This Brocfile does *not* influence how the addon or the app using it
  behave. You most likely want to be modifying `./index.js` or app's Brocfile
*/

var app = new EmberAddon({
  sassOptions: {
    extension: 'scss',
    includePaths: [
      'bower_components/bourbon/app/assets/stylesheets'
    ]
  }
});

var fonts = new Funnel('vendor/material-design-icons', {
  srcDir: '/',
  include: ['*.{eot,ttf,woff,woff2}'],
  destDir: '/assets/fonts'
});

app.import('vendor/scripts/highlight.pack.js');

module.exports = app.toTree([fonts]);
