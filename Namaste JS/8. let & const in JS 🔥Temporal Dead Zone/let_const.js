console.log(b); // b is hoisted and value is undefined
// console.log(a);

let a = 10;
var b = 100;

console.log("SyntaxError: Redeclaring variable a");
// let a = 200;

var b = 111; // but var can be redeclared

const x = "X"; 