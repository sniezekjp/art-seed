/// <reference path="../../defs/_app.d.ts" />
define(["require", "exports", '../app/app'], function (require, exports, app) {
    app.provider('NoAuthRoutes', function () {
        this.noAuthRoutes = [];
        this.addNoAuthRoute = function (state) {
            this.noAuthRoutes.push(state);
        };
        this.$get = function () {
            return this.noAuthRoutes;
        };
    });
});
//# sourceMappingURL=NoAuthRoutes.js.map