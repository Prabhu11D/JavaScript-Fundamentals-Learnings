/**
 * 
 * 
 */

// ----------------------------- The name property

function sayHi(){
    console.log("Hi");
}
console.log(sayHi.name);

let s = sayHi;
console.log(s.name);


let obj = {
    name : 'Object',
    say(){
        console.log("Say Say");
    },
    tell(){
        console.log("Tell Tell");
    }
};

console.log(obj.say.name);

// ----------------------------- The length property
function add(a,b,c){
    return a+b+c
}

function addmore(a,b,...c){
    let sum = a + b;
    for(let i of c){
        sum += i;
    }
    return sum
}

console.log(add(1,2,3));
console.log(addmore(1,2,3,4,5,6,7,8,9,10));

console.log(add.length);
console.log(addmore.length);

// ----------------------------- Custom Properties
function login(){
    console.log("Logged In...");
    login.count++;
}

login.count = 0;
login();
login();
login();
login();
console.log(login.count);

// custom property in closure

// ----------------------------- Named Function Expressions
let shape = function(){
    console.log("Function called Succesfully");
}

let shape1 = shape;
shape = null;
shape1();




let sayHii = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

sayHii(); // Hello, Guest

// But this won't work:
// func(); // Error, func is not defined (not visible outside of the function)

/**
 * 
 * 
    It allows the function to reference itself internally.
    It is not visible outside of the function.

    let sayHi = function(who) {
      if (who) {
        alert(`Hello, ${who}`);
      } else {
        sayHi("Guest");
      }
    };

    The problem with that code is that sayHi may change in the outer code. 
    If the function gets assigned to another variable instead, 
    the code will start to give errors:
 * 
 */