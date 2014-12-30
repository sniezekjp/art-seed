/// <reference path="../../defs/_app.d.ts" />
define(["require", "exports", 'jquery', 'angular', "./authenticate", "./lazy", "./menus/Sidebar", "../modules/settings/config/menus", "../modules/settings/config/states", "../modules/dashboard/config/menus", "../modules/dashboard/config/states", "../modules/profile/config/menus", "../modules/profile/config/states", "../modules/search/config/menus", "../modules/search/config/states"], function (require, exports, $, angular) {
    $(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
});
//# sourceMappingURL=bootstrap.js.map