/// <reference path="../../../defs/_app.d.ts" />

import app = require('../app');
import Menu = require('../../lib/Menu');

app.controller('SidebarController', function($scope, Sidebar) {
  $scope.menu = Sidebar;
});

var sidebar = new Menu('Sidebar');
export = sidebar;