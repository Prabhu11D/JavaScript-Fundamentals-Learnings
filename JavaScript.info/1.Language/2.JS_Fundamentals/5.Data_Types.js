/**
 * JavaScript is dynamically typed language
 *  : means Variables are not bound to datatypes
 *  
 */

/**
 * 
 *          N U M B E R S
    working with number in JS is super
    because it will never show fatal err

    limits  => -(2^53-1) to (2^53-1)

    Doing maths is “safe” in JavaScript
 *
 */


// Special Numbers
console.log(1 / 0);
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
console.log("Hello" / 1);


// NaN
console.log(NaN * 1); // NaN
console.log(NaN + "Hello"); // NaNHello
console.log(NaN / NaN); // NaN
// but ...
console.log(NaN ** 0) // ?



/**
 *              B I G I N T 
 * 
 *  adding n to last
 *  ref - https://javascript.info/bigint
 * 
 */

// you can't store number more than +-(2^53 - 1) in number type
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

const big_int = 498759575873457983475948759473597439556546565464798347587234857345n;
console.log(big_int);



/**
 *          S T R I N G
 * 
 *    three types of quotes
 *      
 * 
 */

const name = "Prabhu";
const passion = 'programming';
const about = `${name} have ${passion} passion ...`;

console.log(name);
console.log(passion);
console.log(about);


/**
 *      B O O L E A N
 * 
 *      true or false
 */

let x = true;
let i = 0;
while (x == true) {
  console.log(i);

  if (i > 11) {
    x = false;
  }
  i++;
}


/**
 *    N U L L
 * 
 * : In JavaScript, null is not a “reference to a non-existing object” 
 *   or a “null pointer” like in some other languages.
 *
 * : It’s just a special value which represents “nothing”, 
 *   “empty” or “value unknown”.
 * 
*/

let n = null;
console.log(n);

/**
 * 
 *         U N D E F I N E D
 * 
 */

let undef;
console.log(undef);


/**
 * 
 *  O B J E C T S    A N D    S Y M B O L S
 * 
 *    : primitive only store either string or number
 * 
 *    : but object store complex entities
 *      ref => https://javascript.info/object
 * 
 *    : The symbol type is used to create unique identifiers for objects.
 */


/**
 *          T Y P E O F
 * 
 *    : typeof is an operator, not a function
 * 
 */

console.log(typeof name);
console.log(typeof undef);
console.log(typeof big_int);


// Official JS Error
console.log(typeof null); // Object
// but correct answer is null
