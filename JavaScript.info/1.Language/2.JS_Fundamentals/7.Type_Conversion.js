/**
 * 
 *  Object to Primitive
 *          https://javascript.info/object-toprimitive
 */


/**
 *          S T R I N G 
 */
let name1 = 7007;
console.log(typeof name1);
name1 = String(name1);
console.log(typeof name1);
let bool = true;
console.log(String(bool));


/**
 *          N U M B E R
 */

let x = '123';
x = Number(x);
console.log(x); // 123

let undef = undefined;
console.log(Number(undef)); // NaN

let n = null;
console.log(Number(n)); // 0

let boo = true;
console.log(Number(boo)); // 1

let sentence = "\t\n";
console.log(Number(sentence)); // 0
sentence = "12\t";
console.log(Number(sentence)); // 12
sentence = "12\t3";
console.log(Number(sentence)); // NaN




/**
 *          B O O L E A N
 * 
 *  : Some languages (namely PHP) treat "0" as false. 
 *    But in JavaScript, a non-empty string is always true.
 */

console.log(Boolean(0)); // false
console.log(Boolean(10)); // true
console.log(Boolean("Prabhu")); // true
console.log(Boolean("")) // false
console.log(Boolean("0")); // true, 0 is there
console.log(Boolean(" ")); // true, space is there
