/**
 * __proto__ vs prototype
 * 
 *  : In JS object can be created with {}, there is no need to Class or new Constrcutor
 *  : 
 * 
 */

let animal = {
  lives: "Forest"
}

/**
 *  animal is a Object
 *  animal has Object as Prototype
 */

console.log({}); // {} with prototype
console.log({}.__proto__);
/**
 *  The Plain Object {} has prototype of one another Object with some properties, 
 *  this Properties can be accessed by any Object in Program
 * 
 */
console.log({}.__proto__.__proto__); // null

console.log(animal.__proto__);
console.log(Object); // native code
console.log(Object.__proto__.__proto__); // null
console.log(typeof Object); // function


/**
 * 
 * cells is Contructed by Array Function (now [] literal)
 * 
 * : now cells has all the properties which Array have
 */
const cells = [1, 2, 3];
console.log(cells);
console.log(cells.constructor); // Array() native code
console.log(cells.__proto__ === Array.prototype); // true
console.log(Array.prototype)
console.log(Array.__proto__ === Object.__proto__); // true

const newCell = { new: "old" };
Object.setPrototypeOf(newCell, cells);
console.log(newCell);
console.log(newCell.__proto__);


/**
 * 
 * __proto__ is refers where is super Object or to Delegate
 * and it is used to set prototype on Object directly
 * 
 * 
 *  __proto__ -> is a
 *  prototype -> has a
 * 
 */

let a = {
  a: "a object"
}

let alpha = {
  alpha: "alpha object"
}

let b = {
  b: "b Object"
}

console.log(a);
console.log(alpha);
console.log(b);

// now alpha has Object Prototype
console.log(alpha.__proto__ === Object.prototype); // true

// alpha.__proto__ = a;
Object.setPrototypeOf(alpha, a); // is same as alpha.__proto__ = a
Object.setPrototypeOf(alpha, b);
console.log(alpha.__proto__ === Object.prototype); // false
console.log(alpha.__proto__ === a); // false
console.log(alpha.__proto__ === b); // true

b.__proto__ = a;
// a.__proto__ = alpha; //5.__proto__vs__prototype.js:86 Uncaught TypeError: Cyclic __proto__ value 

// console.log(a);
// console.log(alpha);
// console.log(b);

console.log(a);
console.log(a.alpha);
console.log(a.b);

console.log(b);
console.log(b.a);
console.log(b.alpha);

console.log(alpha);
console.log(alpha.a);
console.log(alpha.b);

/**
 *     a -> Object
 *     b -> a -> Object
 *     alpha -> b -> a -> Object
 * 
 *     alpha can access a and b
 */


a.prototype = "A";
console.log(a);

function Fn() {
  let kind = "Special Function";
  console.log(kind);
}

Fn.prototype.a = a;

console.log(Fn.__proto__ === Object.__proto__);
console.log(Fn.prototype);
Fn();
// prototype is setting multiple properties to function


function Human(name) {
  this.name = name
}

Human.prototype.thinking = "Some What";
Human.prototype.god = true;

let prabhu = new Human("Prabhu");
let ammu = new Human("Ammu");
console.log({ prabhu, ammu });
console.log(Human.prototype)
console.log(prabhu.__proto__)
console.log(prabhu.__proto__ === Human.prototype); // true


// Operations on prabhu, ammu
console.log([prabhu.name, prabhu.thinking, prabhu.god])
console.log([ammu.name, ammu.thinking, ammu.god])

// this type object creation is similar to normal object literal
let HumanObj = {
  thinking: "Great",
  god: "Yes"
}

let prabhuObj = {
  name: "Prabhu",
  __proto__: HumanObj
}

console.log({prabhuObj, prabhu});