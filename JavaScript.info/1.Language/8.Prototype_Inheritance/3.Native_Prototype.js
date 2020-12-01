/**
 * 
 * 
 */

// ==================== Object.prototype

let obj = {}; // is === obj = new Object()
console.log(obj.toString());

console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === Object.prototype.toString);

// ==================== Other Built-in prototype
let arr = [1,2,3,4,5];

console.log(arr.__proto__.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

function f(){};
console.log(f.__proto__ === Function.prototype);


// ===================== Primitives
console.log("Hello".__proto__.__proto__);
// console.log(null.__proto__); // doesn't have any object wrappers


// ====================== Changing native prototypes
String.prototype.show = function(){
    console.log(this);
}

"Prabhu".show();

// ====================== Borrowing from prototypes
let obj1 = {
    0: "Zero",
    1: "One",
    2: "Two",
    length: 3
};

obj1.join = Array.prototype.join;
console.log(obj1.join(' | '));