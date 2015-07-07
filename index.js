/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-materials',
  blueprintsPath: function blueprintsPath() {
    return require('path').join(__dirname, 'blueprints');
  },
  included: function(app) {
    this._super.included(app);

    ['eot', 'ttf', 'woff', 'woff2'].forEach(function(ext) {
      app.import('vendor/material-design-icons/MaterialIcons-Regular.' + ext, { destDir: 'assets/fonts' });
    });
  }
};
