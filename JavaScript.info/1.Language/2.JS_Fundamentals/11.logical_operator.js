/**
 *  L O G I C A L     O P E R A T O R
 * 
 * Precedence of AND && is higher than OR ||
 */

// OR
let a = 100;
let b = 200;
console.log(a || b);
console.log(b || a);

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");


// AND &&
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

console.log("Prabhu" && "Ammu" && 1 && 0);


// NOT
let n = 0;
console.log(!!n);
console.log(!n);