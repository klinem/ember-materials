module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('bourbon').then(function() {
      return self.addPackageToProject('ember-cli-sass');
    });
  }
};
