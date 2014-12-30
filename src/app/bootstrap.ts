/// <reference path="../../defs/_app.d.ts" />

/// <amd-dependency path="./authenticate" />
/// <amd-dependency path="./lazy" />

/// <amd-dependency path="./menus/Sidebar" />

/// dependencies (do not remove this)

import $       = require('jquery');
import angular = require('angular');

$(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
