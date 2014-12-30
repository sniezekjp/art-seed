/// <reference path="../../defs/_app.d.ts" />
define(["require", "exports"], function (require, exports) {
    var LazyLoader = (function () {
        function LazyLoader() {
            this._load = [];
        }
        LazyLoader.prototype.add = function (loadThis) {
            this._load.push(loadThis);
        };
        LazyLoader.prototype.getResolve = function () {
            var _this = this;
            var resolve = function (Lazy) {
                return Lazy.load(_this._load);
            };
            resolve.$inject = ['Lazy'];
            return resolve;
        };
        return LazyLoader;
    })();
    return LazyLoader;
});
//# sourceMappingURL=LazyLoader.js.map