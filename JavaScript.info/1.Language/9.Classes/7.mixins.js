/**
 *  Mixin is a class contains methods that can be used by other class without
 *  inheriting
 */

let sayMixin = {
  sayHi() {
    console.log("Hi " + this.name + " ✋");
  },
  sayBay() {
    console.log("Bye " + this.name + " 🙋‍♂️");
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayMixin);
new User("Dude").sayHi();

// ===================== Events trigger ======================

let eventMixin = {
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return;
    }
    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args)
    );
  },
};

class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on("select", (value) => console.log(`Value selected: ${value}`));

menu.choose("123");
