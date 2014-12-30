/// <reference path="../../defs/_app.d.ts" />
define(["require", "exports", 'jquery', 'angular', "./authenticate", "./lazy", "./menus/Sidebar"], function (require, exports, $, angular) {
    $(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
});
//# sourceMappingURL=bootstrap.js.map