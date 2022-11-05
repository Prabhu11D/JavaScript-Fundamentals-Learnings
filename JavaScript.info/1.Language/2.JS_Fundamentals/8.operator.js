/**
 * 
 *     O P E R A T O R S 
 */

/**  
 *    : an operand is term applied to the operation
 *    : operand is also called as argument
 */

let x = 10
x = -x; // unary operator, becoz, it only has one operand
console.log(x);

let y = 20;
y = y - x; // binary operator, becoz, it has two operand
console.log(y);


// reminder
console.log(34%4);

// exponential
//  Just like in maths,
//  the exponentiation operator is defined for non-integer numbers as well.
console.log(2**3);


// String Concatenation
// it first adds first two operands
console.log('1' + 1); // '11'
console.log(2 + 2 + '2'); // '42', not '221'
console.log('1' + 2 + 2); // '122', not '14'
console.log('6'/2); // 3


// Subtraction
console.log('10' - 1); // 9, number not string


/**
 * 
 *  Unary Operator ->  Number Conversion 
 * 
 *  putting + in front, unary operator doesn't do anything 
 *  with number
 *  
 * */

let x1 = 1;
console.log(x1); // 1
x1 = -x1;
console.log(x1); // -1
x1 = +x1;
console.log(x1); // -1, not +1, why?

console.log(+""); // 0
console.log(+true); // 1

const apple = '2';
const orange = '4';

console.log(apple+orange);
console.log(+apple + +orange);


// - - - - - Operator precendence
// Ref => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/**
 *    Assignment is also a operator
 * 
 * 
 *  : Let’s note that an assignment = is also an operator. 
 *    It is listed in the precedence table with the very low priority of 2.
 *  : That’s why, when we assign a variable, like x = 2 * 2 + 1, 
 *    the calculations are done first and then the = is evaluated, 
 *    storing the result in x.
 */

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

let count = 1;
console.log(2 * count++); // 2, why 2 not 4
console.log(2 * ++count); // 4


// Bitwise operator
let n1 = 100;
let n2 = 101;
console.log(n1 & n2);
console.log(n1 | n2);
console.log(n1 ^ n2);
console.log(~n1);


// Comma Operator
// it has less precedence, less than =
let z1 = (1 + 2, 3 + 4); // 7
console.log(z1);
// let z2 = 1 + 2, 3 + 4; // Syntax Error
z1 = 1 + 2, 3 + 4; // 3
console.log(z1);
