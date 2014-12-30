/// <reference path="../../defs/_app.d.ts" />

/// <amd-dependency path="../lib/NoAuthRoutes" />

import app = require('./app');

app.run(function($rootScope, $state, NoAuthRoutes, $timeout) {
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    var token = localStorage.getItem('token');
    if(NoAuthRoutes.indexOf(toState.name) === -1 && !token) {
      event.preventDefault();
      $timeout(function() {
        $state.go("login");
      });
    }
  });
});