// 'use strict' 

/**
 * 
 * 
 */

let user = {
  name: "Prabhu",
  age: 21
}

// A function that is a property of an object is called its method.
function sayHi() {
  return "Hi Bro"
}
user.sayHi = sayHi;
console.log(user.sayHi());

// - - - - Method Shorthand
let user1 = {
  greet: "Hello",
  sayHi: function () {
    return "Hi Bro"
  },
  sayBye() {
    return "Bye Bro"
  }
}

console.log(user1);
console.log(user1.sayBye());



// - - - - THIS -> current object
// this refers to proUser object
let proUser = {
  name: "Ammu",
  sayHi() {
    return `Hello ${this.name}`
  }
}
console.log(proUser.sayHi());


/**
 * 
 *  T H I S is not bound
 * 
 *  : The value of this is evaluated during 
 *    the run-time, depending on the context (which object).
 * 
 *  : if Obj call the function, then this -> Obj
 * 
 *  : In JavaScript this is “free”, its value is evaluated at call-time 
 *    and does not depend on where the method was declared, 
 *    but rather on what object is “before the dot”.
 * 
 *  : Please note that arrow functions are special: they have no this. 
 *    When this is accessed inside an arrow function, 
 *    it is taken from outside.
 * 
 */


function sayDoo() {
  console.log("sayDoo ", this.doo);
}


sayDoo();
// let doo = 'DOO'; // not work
var doo = 'DOO'; // works fine, without "use strict"
sayDoo();

let selfContext = {
  where: "PARENT",
  sayWhere() {
    let where = "CHILD";
    function sayWhereInside() {
      let where = 'GRANT CHILD';
      console.log(this.where);
    }
    sayWhereInside()
  }
}

let parentContext = {
  where: "PARENT",
  sayWhere() {
    let where = "CHILD";
    let sayWhereInside = () => {
      let where = 'GRANT CHILD';
      console.log(this.where);
    }
    sayWhereInside()
  }
}


selfContext.sayWhere(); // sayWhereInside call this refers to itself
parentContext.sayWhere(); // sayWhereInside calls this refers to parent (sayWhere)


function notObjCalledThis() {
  return {
    a: 10,
    ref: this
  }
}

let obj1 = notObjCalledThis();
console.log(obj1);

function ObjCalledThis() {
  return {
    a: 10,
    ref() {
      return this
    }
  }
}

let obj2 = ObjCalledThis();
console.log(obj2);