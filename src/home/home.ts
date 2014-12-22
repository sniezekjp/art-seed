/// <reference path="../../defs/_app.d.ts" />

import app = require('../app/app');
app.config( ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/other');
  $stateProvider.state('home', {
    url: '/',
    template: 'Home page',
    controller: 'HomeController',
    resolve: {
      lazy: (Lazy) => {
        return Lazy.load('../home/HomeController');
      }
    }
  });
});