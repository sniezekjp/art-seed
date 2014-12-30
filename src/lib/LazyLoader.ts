/// <reference path="../../defs/_app.d.ts" />

class LazyLoader {
  _load: Array<string>;
  constructor() {
    this._load = [];
  }
  add(loadThis:string): void {
    this._load.push(loadThis);
  }
  getResolve() {
    var resolve = (Lazy)=> {
      return Lazy.load(this._load);
    };
    resolve.$inject = ['Lazy'];
    return resolve;
  }
}

export = LazyLoader;