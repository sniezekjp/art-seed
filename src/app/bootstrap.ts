/// <reference path="../../defs/_app.d.ts" />

/// <amd-dependency path="./lazy" />
/// <amd-dependency path="../home/home" />

import $       = require('jquery');
import angular = require('angular');

$(document).ready(function() {
  angular.bootstrap(document, ['app']);
});