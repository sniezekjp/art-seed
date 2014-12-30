/// <reference path="../../defs/_app.d.ts" />

import app = require('../app/app');

interface MenuItem {
  name: string;
  sref: string;
}

class Menu {
  provider:string;
  constructor(name: string) {
    this.provider = name + 'Provider';
    app.provider(name, function():any {

      this.menuItems = {};

      this.addMenu = function(item, position) {
        if(this.menuItems[position]) {
          position = position + 0.5;
        } else {
          position = position || Object.keys(this.menuItems).length;
        }
        this.menuItems[position] = item;
      };

      this.$get = function() {
        var result = [];
        Object.keys(this.menuItems).sort().forEach((key)=> {
          result.push(this.menuItems[key]);
        });
        console.log(this.menuItems);
        return result;
      };

    });
  }
  addMenuItem(menu: MenuItem, position?) {
    function Provider(provider) {
      provider.addMenu(menu, position);
    }
    Provider.$inject = [this.provider];
    app.config(Provider);
  }
}

export = Menu;