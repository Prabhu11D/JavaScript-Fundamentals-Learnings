/**
        C O M P A R I S I O N

 */

// Boolean 
console.log(3 > 2); // true
console.log(3 < 2); // false
console.log(4 == 4); // true
console.log(4 != 4); // false

// you can compared value with variable
let isGreater = 20 > 2; // true
console.log(isGreater); // true


// String Comparision
console.log("a" > "A"); // true
console.log("PRABHU " > "PRABHU");


// Comparing different types
console.log("Comparing Different types");
console.log('2' == 2); // true, '2' -> 2
console.log('1' > 1); // false, '1' -> 1

console.log(true == 1); // true
console.log(false == 0); // true

let a = 0
  , b = "0";
console.log(Boolean(a)); // false, 0 is empty so false
console.log(Boolean(b)); // true, '0', 0 string has present so true
console.log(a == b); // true, while checking equality '0' -> 0, and 0 == 0 -> true

// Strict Equality
console.log("console.log('10' == 10) => ", '10' == 10); // compares only value
console.log("console.log('10' === 10) => ", '10' === 10); // compares value and type too

console.log(0 == false); // true
console.log(0 === false); // false

console.log("console.log(null == undefined) =>  ", null == undefined); // true
console.log("console.log(null === undefined) =>  ", null === undefined); // false


// Strange Result null vs 0
console.log("console.log(null > 0) => ", null > 0); // false
console.log("console.log(null == 0) => ", null == 0); // false
console.log("console.log(null >= 0) => ", null >= 0); // true, but how?
//  equality check == and comparisons > < >= <= work differently.
// comparision converts the type, while equality not


// Undefined
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);