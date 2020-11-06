/**
 * 
 * 
 */

function User(name, age){
    // this = {}
    this.name = name,
    this.age = age

    // return this
}

let user1 = new User("Prabhu", 21);
let user2 = new User("Ammu", 17);
console.log(user2);


// checking new in constructor functions
function Books(name){
    if(!new.target){
        return new Books(name)
    }

    this.name = name;
}

let b1 = Books("C++");
let b2 = Books("JavaScript");
console.log(b1, b2);


// - - - - return from constructor
function sayHi(name){
    this.name = name

    return {name : name + " Helo"};
}

let s1 = new sayHi("Prabhu");
console.log(s1);

// - - - - - Methods in Constructor
function method(name){
    this.name = name,
    this.hello = function() {
        return "Hello I am "+this.name
    }
}

let m1 = new method("Ammu");
console.log(m1.hello());