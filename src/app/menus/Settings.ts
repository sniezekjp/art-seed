/// <reference path="../../../defs/_app.d.ts" />

import app = require('../app');
import Menu = require('../../lib/Menu');

app.controller('SettingsController', function($scope, Settings) {
  $scope.menu = Settings;
});

var sidebar = new Menu('Settings');

export = sidebar;