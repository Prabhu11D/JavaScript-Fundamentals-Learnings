/**
        C O M P A R I S I O N

 */

// Boolean 
console.log(3 > 2);
console.log(3 < 2);
console.log(4 == 4);
console.log( 4 != 4);


// String Comparision
console.log("a" > "A");
console.log("PRABHU " > "PRABHU");


// Comparing different types
console.log("Comparing Different types");
console.log('2' == 2);
console.log('1' > 1);

console.log(true == 1);
console.log(false == 0);

let a = 0
   ,b = "0";
console.log(Boolean(a));
console.log(Boolean(b));
console.log(a == b);

// Strict Equality
console.log("console.log('10' == 10) => ",'10' == 10);
console.log("console.log('10' === 10) => ", '10' === 10);

console.log(0 == false);
console.log(0 === false);

console.log("console.log(null == undefined) =>  ",null == undefined);
console.log("console.log(null === undefined) =>  ",null === undefined);


// Strange Result null vs 0
console.log("console.log(null > 0) => ",null > 0);
console.log("console.log(null == 0) => ",null == 0);
console.log("console.log(null >= 0) => ",null >= 0);


// Undefined
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);