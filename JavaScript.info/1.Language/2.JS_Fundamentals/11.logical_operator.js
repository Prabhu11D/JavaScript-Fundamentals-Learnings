/**
 *  L O G I C A L     O P E R A T O R
 * 
 *  && || ! ??
 * 
 *    :  they can be applied to values of any type, 
 *       not only boolean. Their result can also be of any type.
 * 
 *  Precedence of AND && is higher than OR ||
 */

/**
 * 
 *  O R
 * 
 *  - operand return immediatly if true is found, 
 *    else last operand is return
 * 
 */
let a = 100;
let b = 200;
console.log(a || b); // 100
console.log(b || a); // 200

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous"); // "SuperCoder"

console.log(1 || 0); // 1
console.log(null || 0); // 0

/***
 *    A N D
 *  
 *   - operand return immediatly if false is found,
 *     else last operand is returned
 * 
 */
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

console.log("Prabhu" && "Ammu" && 1 && 0);


/**
 * 
 *  N O T
 * 
 *  : A double NOT !! is sometimes used for converting a value to boolean type:
 *  : highest precendence among all logical operators
 *  : !!x is same as Boolean(x)
 * 
 */
let n = "zero";
console.log(!!n); // true
console.log(!n); // false