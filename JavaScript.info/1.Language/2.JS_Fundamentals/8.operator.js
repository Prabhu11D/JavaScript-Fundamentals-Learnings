/**
 * 
 *  O P E R A T O R S 
 */

/**
 *  unary, binary operand
 * 
 *  an operand is term applied to the operation
 */

let x = 10
x = -x; // unary
console.log(x);

let y = 20;
y = y - x; // binary
console.log(y);


// reminder
console.log(34%4);

// exponential
console.log(2**3);


// String Concatenation

console.log('1' + 1);
console.log(2 + 2 + '2');
console.log('6'/2);


// Number Conversion 
// putting + in front

console.log(+1);
console.log(+"");
console.log(+true);

const apple = '2';
const orange = '4';

console.log(apple+orange);
console.log(+apple + +orange);


// - - - - - Operator precendence
// Ref => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// - - - - - - Assignment is also a operator
// precedence 3

// assignment returns a value
let a = 1;
let b = 2;
console.log(10 - (a = a + b));

// Chaining Assignments
a = b = 20;
console.log(a);
console.log(b);

// Modify in place
let n = 10;

n *= 2 + 1
console.log(n);

// Increment and Decrement
let i = 10;
let pre = ++i;
console.log("pre ", pre);
let post = i++;
console.log("post ", post);


// Bitwise operator
let n1 = 100;
let n2 = 101;
console.log(n1 & n2);
console.log(n1 | n2);
console.log(n1 ^ n2);
console.log(~n1);