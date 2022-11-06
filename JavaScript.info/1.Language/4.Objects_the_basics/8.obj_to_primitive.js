/**
 * 
 * like some other languages
 *  Obj1 + Obj2 = Obj3 is not in JS
 * 
 * here, Obj1 + Obj2 = primitive type
 * 
 * : Conversion Rules
 * 
 * 1. All Objects are true in Boolean, so we need to think about numeric and string.
 * 
 * Conversion based upon what operation needs what
 *  +, - needs numeric
 *  console needs string
 * 
 * 
 */

let obj1 = {}
let obj2 = {}
console.log(obj1 + obj2);
console.log(obj1 === 1);

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

console.log(String(user));
console.log(+user);
console.log(user + 100);


let atom = {
  a: 1,
  b: -1,

  toString() {
    return "ATOMIC";
  },

  valueOf() {
    return 0;
  }
}

console.log(atom)
console.log(String(atom));
console.log(+atom);
console.log(atom + " atom");