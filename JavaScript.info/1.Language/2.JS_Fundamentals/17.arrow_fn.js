/**
 *      A R R O W    F U N C T I O N
 * 
 */

let add = (a,b) => a+b;
// console.log(add(10,20));

let sub = (a,b) => a-b;

let mul = (a,b) => a*b;


// Multiple arrow functions
let math = (a,b,callback) => {
    if(typeof callback === 'function'){
        return callback(a,b);
    }
}

console.log(math(10,11, add));