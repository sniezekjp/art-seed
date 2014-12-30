/// <reference path="../../defs/_app.d.ts" />

/// <amd-dependency path="./authenticate" />
/// <amd-dependency path="./lazy" />

/// <amd-dependency path="./menus/Sidebar" />

/// <amd-dependency path="../modules/settings/config/menus" />
/// <amd-dependency path="../modules/settings/config/states" />

/// <amd-dependency path="../modules/dashboard/config/menus" />
/// <amd-dependency path="../modules/dashboard/config/states" />

/// <amd-dependency path="../modules/profile/config/menus" />
/// <amd-dependency path="../modules/profile/config/states" />

/// <amd-dependency path="../modules/search/config/menus" />
/// <amd-dependency path="../modules/search/config/states" />

/// dependencies (do not remove this)

import $       = require('jquery');
import angular = require('angular');

$(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
