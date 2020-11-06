/**
 * 
 *  Object to Primitive
 *          https://javascript.info/object-toprimitive
 */


/**
 *          S T R I N G 
 */
let name = 7007;
console.log(typeof name);
name = String(name);
console.log(typeof name);


/**
 *          N U M B E R
 */

let x = '123';
x = Number(x);
console.log(x);

let undef = undefined;
console.log(Number(undef));

let n = null;
console.log(Number(n));

let boo = true;
console.log(Number(boo));


/**
 *          B O O L E A N
 */

console.log(Boolean(0));
console.log(Boolean(10));

console.log(Boolean("Prabhu"));
console.log(Boolean(""))