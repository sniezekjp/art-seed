/// <reference path="../../defs/_app.d.ts" />
define(["require", "exports", '../app/app', "./NoAuthRoutes"], function (require, exports, app) {
    var State = (function () {
        function State(name, useTplUrl) {
            if (useTplUrl === void 0) { useTplUrl = true; }
            this.name = name;
            this.useTplUrl = useTplUrl;
        }
        State.prototype.noAuth = function () {
            this._noAuth = true;
        };
        State.prototype.init = function (config) {
            var State = function ($stateProvider) {
                $stateProvider.state(this.name, config.getConfig(this.useTplUrl));
            }.bind(this);
            State.$inject = ['$stateProvider'];
            app.config(State);
            if (this._noAuth === true) {
                var NoAuth = function (NoAuthRoutesProvider) {
                    NoAuthRoutesProvider.addNoAuthRoute(this.name);
                }.bind(this);
                NoAuth.$inject = ['NoAuthRoutesProvider'];
                app.config(NoAuth);
            }
        };
        return State;
    })();
    return State;
});
//# sourceMappingURL=State.js.map