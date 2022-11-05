/**
 *  true condition will execute
 * 
 */

let phonePrice = 15000;

if(phonePrice <= 20000){
    console.log("Buy the Phone");
}else{
    console.log("Simply sit");
}


// Ternary operator ? : 
// also known as Conditional Operator
console.log(phonePrice <= 20000 ? "Buy" : "Don't buy");

// Multiple ???
let age = 22;
let message = age < 10 ? "Hi Baby" :
              age < 18 ? "Hi Dude" :
              age < 25 ? "Hi Machi" : "Bye Bye ...";

console.log(message);