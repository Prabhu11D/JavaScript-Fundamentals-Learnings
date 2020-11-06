/**
 * 
 * 
 */

let user = {
    name : "Prabhu",
    age : 21
}

function sayHi(){
    return "Hi Bro"
}
user.sayHi = sayHi;
console.log(user.sayHi());

// - - - - Method Shorthand
let user1 = {
    greet : "Hello",
    sayHi : function(){
        return "Hi Bro"
    },
    sayBye(){
        return "Bye Bro"
    }
}

console.log(user1);
console.log(user1.sayBye());



// - - - - THIS -> current object
let proUser = {
    name : "Ammu",
    sayHi(){
        return `Hello ${this.name}`
    }
}
console.log(proUser.sayHi());

// - - - - - - this is not bound
// inside the function without object
// this in arrow function