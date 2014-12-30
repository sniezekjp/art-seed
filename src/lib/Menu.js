/// <reference path="../../defs/_app.d.ts" />
define(["require", "exports", '../app/app'], function (require, exports, app) {
    var Menu = (function () {
        function Menu(name) {
            this.provider = name + 'Provider';
            app.provider(name, function () {
                this.menuItems = {};
                this.addMenu = function (item, position) {
                    if (this.menuItems[position]) {
                        position = position + 0.5;
                    }
                    else {
                        position = position || Object.keys(this.menuItems).length;
                    }
                    this.menuItems[position] = item;
                };
                this.$get = function () {
                    var _this = this;
                    var result = [];
                    Object.keys(this.menuItems).sort().forEach(function (key) {
                        result.push(_this.menuItems[key]);
                    });
                    console.log(this.menuItems);
                    return result;
                };
            });
        }
        Menu.prototype.addMenuItem = function (menu, position) {
            function Provider(provider) {
                provider.addMenu(menu, position);
            }
            Provider.$inject = [this.provider];
            app.config(Provider);
        };
        return Menu;
    })();
    return Menu;
});
//# sourceMappingURL=Menu.js.map