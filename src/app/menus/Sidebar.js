/// <reference path="../../../defs/_app.d.ts" />
define(["require", "exports", '../app', '../../lib/Menu'], function (require, exports, app, Menu) {
    app.controller('SidebarController', function ($scope, Sidebar) {
        $scope.menu = Sidebar;
    });
    var sidebar = new Menu('Sidebar');
    return sidebar;
});
//# sourceMappingURL=Sidebar.js.map