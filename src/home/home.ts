/// <reference path="../../defs/_app.d.ts" />

import app = require('../app/app');
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/other');
  $stateProvider.state('home', {
    url: '/',
    template: 'Home page',
    controller: 'HomeController',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('../home/HomeController');
      }
    }
  })
  .state('other', {
      url: '/other'
    });
});