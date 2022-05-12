'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(/Warning/gi);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};
build.tslintCmd.enabled = false;

build.initialize(require('gulp'));
