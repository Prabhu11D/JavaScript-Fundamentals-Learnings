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