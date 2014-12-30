define(["require", "exports", './LazyLoader'], function (require, exports, LazyLoader) {
    var StateConfig = (function () {
        function StateConfig() {
            this.hasLazyDependencies = false;
            this.resolve = {};
            this.loader = new LazyLoader();
        }
        StateConfig.prototype.setUrl = function (url) {
            this.url = url;
        };
        StateConfig.prototype.setTemplate = function (tpl) {
            this.template = tpl;
        };
        StateConfig.prototype.setTemplateUrl = function (tpl) {
            this.templateUrl = tpl;
        };
        StateConfig.prototype.lazyLoad = function (load) {
            this.loader.add(load);
        };
        StateConfig.prototype.setController = function (ctrl) {
            this.controller = ctrl;
        };
        StateConfig.prototype.addResolve = function (name, resolve) {
            this.resolve[name] = resolve;
        };
        StateConfig.prototype.getConfig = function (useTemplateUrl) {
            if (useTemplateUrl === void 0) { useTemplateUrl = true; }
            var config = {};
            if (useTemplateUrl) {
                config.templateUrl = this.templateUrl;
            }
            else {
                config.template = this.template;
            }
            if (this.loader._load.length) {
                this.addResolve('lazy', this.loader.getResolve());
            }
            config.url = this.url;
            config.controller = this.controller;
            config.resolve = this.resolve;
            return config;
        };
        return StateConfig;
    })();
    return StateConfig;
});
//# sourceMappingURL=StateConfig.js.map