/**
 * 
 * 
 * 
 */

// Class
class Animal{}
let elephant = new Animal();
console.log(elephant instanceof Animal);

// function constructor
function Phone(){}
let apple = new Phone();
console.log(apple instanceof Phone);

// Array
let arr = [1,2,3,4];
console.log(arr instanceof Array);
console.log(arr instanceof Object);

// own instanceof defining
class Star{
    static [Symbol.hasInstance](obj){
        if(obj.haveElectron) return true
    }
}
let earth = {
    haveElectron: true
}
console.log(earth instanceof Star);

// prototype checking
console.log(Animal.prototype);
console.log(elephant.__proto__);


// chaning prototype
function Rabbit(){};
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);
Rabbit.prototype = {};
console.log(rabbit instanceof Rabbit);

// =================== Object.prototype.toString()

let ObjectToString = Object.prototype.toString;
arr = [];
console.log(ObjectToString.call(arr));
console.log(ObjectToString.call(true));

// - - - - Symbol.toStringTag
let user = {
    [Symbol.toStringTag] : "User"
}
console.log({}.toString.call(user));