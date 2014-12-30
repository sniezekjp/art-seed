/// <reference path="../../defs/_app.d.ts" />

import app = require('../app/app');

app.provider('NoAuthRoutes', function():any {
  this.noAuthRoutes = [];
  this.addNoAuthRoute = function(state:string) {
    this.noAuthRoutes.push(state);
  };
  this.$get = function() {
    return this.noAuthRoutes;
  };
});