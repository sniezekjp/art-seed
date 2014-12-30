
import LazyLoader = require('./LazyLoader');

class StateConfig {
  hasLazyDependencies: boolean = false;
  url:string;
  template: string;
  templateUrl: string;
  controller: string;
  resolve = {};
  loader: LazyLoader;

  constructor() {
    this.loader = new LazyLoader();
  }

  setUrl(url: string) {
    this.url = url;
  }

  setTemplate(tpl: string) {
    this.template = tpl;
  }

  setTemplateUrl(tpl: string) {
    this.templateUrl = tpl;
  }

  lazyLoad(load:string) {
    this.loader.add(load);
  }

  setController(ctrl: string) {
    this.controller = ctrl;
  }

  addResolve(name:string, resolve) {
    this.resolve[name] = resolve;
  }

  getConfig(useTemplateUrl:boolean = true) {
    var config:any = {};
    if(useTemplateUrl) {
      config.templateUrl = this.templateUrl;
    } else {
      config.template = this.template;
    }

    if(this.loader._load.length) {
      this.addResolve('lazy', this.loader.getResolve());
    }

    config.url = this.url;
    config.controller = this.controller;
    config.resolve = this.resolve;
    return config;
  }
}

export = StateConfig;