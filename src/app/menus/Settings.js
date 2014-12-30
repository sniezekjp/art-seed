/// <reference path="../../../defs/_app.d.ts" />
define(["require", "exports", '../app', '../../lib/Menu'], function (require, exports, app, Menu) {
    app.controller('SettingsController', function ($scope, Settings) {
        $scope.menu = Settings;
    });
    var sidebar = new Menu('Settings');
    return sidebar;
});
//# sourceMappingURL=Settings.js.map