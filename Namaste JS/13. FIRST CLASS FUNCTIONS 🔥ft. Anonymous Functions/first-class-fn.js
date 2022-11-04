// function statement
statement();
function statement() {
  console.log("Function Statement");
}
statement();


// function expression
// exp1(); // exp1 is not function, it is undefined;
var exp1 = function () {
  console.log("var fn exp");
}
exp1()

// exp2(); // can't access before initialization
let exp2 = function () {
  console.log("let fn exp");
}
exp2()

// exp3(); // can't access before initialization
const exp3 = function () {
  console.log("const fn exp");
}
exp3()

exp1 = "EXP1"
exp2 = "EXP2"
// exp3 = "EXP3"; // Uncaught TypeError: Assignment to constant variable.


// Anonymous Function
// function(){

// }


// Named Function Expression
const nfe = function NFE() {
  console.log("Function Statement is assigned to Variable");
  NFE;
  console.log(nfe);
  console.log(NFE);
}

console.log(nfe);
nfe();
// NFE(); // Uncaught ReferenceError: NFE is not defined