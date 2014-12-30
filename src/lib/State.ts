/// <reference path="../../defs/_app.d.ts" />

/// <amd-dependency path="./NoAuthRoutes" />

import app = require('../app/app');
import StateConfig = require('./StateConfig');

class State {
  _noAuth:boolean;

  constructor(public name: string, public useTplUrl:boolean = true) {}

  noAuth() {
    this._noAuth = true;
  }

  init(config:StateConfig): void {
    var State = function($stateProvider) {
      $stateProvider.state(this.name, config.getConfig(this.useTplUrl));
    }.bind(this);
    State.$inject = ['$stateProvider'];
    app.config(State);

    if(this._noAuth === true) {
      var NoAuth = function(NoAuthRoutesProvider) {
        NoAuthRoutesProvider.addNoAuthRoute(this.name);
      }.bind(this);
      NoAuth.$inject = ['NoAuthRoutesProvider'];
      app.config(NoAuth);
    }
  }
}

export = State;