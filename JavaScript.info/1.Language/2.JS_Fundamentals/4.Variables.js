// "use strict"
/**
 *  VARIABLE
 *  
 *      A Variable is "Named Storage for data"
 * 
 *      variable name only contains 
 *              - char, number, $ or _
 * 
 *     Ref:
 *          https://youtu.be/q8SHaDQdul0
 *          https://medium.com/dailyjs/use-const-and-make-your-javascript-code-better-aac4f3786ca1
 *          https://javascript.info/variables#name-things-right
 */

// declaring variable and defining (means assigning value)
let name = "Prabhu";
console.log(name);


// declare multiple variable in single statement.
let name1 = "Prabhu"
  , age = 21
  , message = "I am Fine";


//  The Variable only declares only once
// name is already declared and value is assigned
// let name = "Ammu";


// Variable names (chars, digits, $, _)
let $ = 10;
let _ = 20;
// let 9av = 100; // not start with number
console.log($ + _);


// creating variable without let, var, const
// uncomment "use strict", then old way of defining will not work
dummy = "DUMMY"
console.log(dummy);


// CONSTANT
const passion = "Nothing";

// you can't reassign value to const variable
// passion = "Something"; throw an error

// mostly known constant are in UPPERCASE
const RED = "#FF0000";
const BLUE = '#FFA500';

// constant that are unknown and valued at runtime is denoted in camelCase
const goHead = "";


/***
 * 
 *    var => function scope variable
 *    let, const => block scope variable
 */

for (var i = 0; i < 5; i++)
  console.log(i)

console.log(i)

/**
 * 
 * constant use less memory and it is more efficient than let
 * debugging also easy
 * 
 * In const we cannot reassign a value...
 * 
 */

const A = "A";
console.log(A);

const particle = { x: 200, y: 500 };
console.log(particle);

particle.x = 1000; // modifying the elements inside the const
console.log(particle);

particle.z = 1234;
console.log(particle);


