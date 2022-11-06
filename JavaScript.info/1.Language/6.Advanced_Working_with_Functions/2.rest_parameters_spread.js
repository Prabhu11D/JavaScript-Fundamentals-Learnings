/**
 *  if ... make multiple arg to single arg  -> REST
 *  if ... makes single arg to multiple arg -> SPREAD
 * 
 */

// ------------------------ Rest parameters . . . 
function sum(...num){
    let total = 0;
    for(let i of num){
        total += i;
    }
    return total
}
console.log(sum(1,2,3));


function goal(goal1, goal2, ...goals){
    console.log(`My primary goal is to become a ${goal1}`);
    console.log(`My secondary goal is to become a ${goal2}`);
    console.log("My next goals are : ");
    for(let g of goals){
        console.log("   "+g);
    }
}
goal("Web Developer", "Data Scientist", "AI", "Businessman", "leader");

// ------------------------ The "arguments" variable
function showName(){
    for(let arg of arguments){
        console.log(arg);
    }
}
showName('Prabhu', 'Ammu', 'Kutty');

// ------------------------ Spread Syntax
let n1 = [1,4,2];
let n2 = [5,3,6];
console.log(Math.max(0, ...n1, 2, ...n2));

let name = "Prabhu";
console.log(...name);

// Array.from
// https://youtu.be/zVMkR-IrBJI
// https://stackoverflow.com/questions/40548213/array-from-vs-spread-syntax
console.log(Array.from(name));


// ------------------------ Get a new copy of an array/object
let arr = [1,2,3];
let arrCopy = [...arr];

console.log(arr === arrCopy);

let object = {
    1: "One",
    2 : "Two"
}

let objectCopy = {...object};

console.log(object === objectCopy);