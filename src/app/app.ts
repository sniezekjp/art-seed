/// <reference path="../../defs/_app.d.ts" />

/// <amd-dependency path="router" />

import angular = require('angular');

var app = angular.module('app', ['ui.router']);
app.config(function($urlRouterProvider, $locationProvider) {
  //$urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
});
export = app;