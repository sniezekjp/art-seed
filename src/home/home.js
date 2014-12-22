/// <reference path="../../defs/_app.d.ts" />
define(["require", "exports", '../app/app'], function (require, exports, app) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/other');
        $stateProvider.state('home', {
            url: '/',
            template: 'Home page',
            controller: 'HomeController',
            resolve: {
                lazy: function (Lazy) {
                    return Lazy.load('../home/HomeController');
                }
            }
        });
    });
});
//# sourceMappingURL=home.js.map