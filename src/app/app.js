/// <reference path="../../defs/_app.d.ts" />
define(["require", "exports", 'angular', "router"], function (require, exports, angular) {
    var app = angular.module('app', ['ui.router']);
    app.config(function ($urlRouterProvider, $locationProvider) {
        //$urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
    return app;
});
//# sourceMappingURL=app.js.map