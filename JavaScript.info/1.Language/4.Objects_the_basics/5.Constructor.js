/**
 *  The regular {...} syntax allows us to create one object. 
 *  But often we need to create many similar objects, 
 *  like multiple users or menu items and so on.
 * 
 */

function User(name, age){
    // this = {} // implicitly done
    this.name = name,
    this.age = age

    // return this // implicitly done
}

let user1 = new User("Prabhu", 21);
let user2 = new User("Ammu", 17);
console.log(user1);
console.log(user2);


// private variable
function Joker(){
  let name = "JOKER"; // is private
  this.name = "THIS " + name;
}

let j1 = new Joker();
console.log(j1);

// new fn(){...}
// create a function and immediately call it with new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};
console.log(user);


// Constructor mode test: new.target
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

    // return; // default return is this (obj)
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