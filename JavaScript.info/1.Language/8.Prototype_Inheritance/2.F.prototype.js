/**
 *    new objects can be created with constructor function
 * 
 */

let animal = {
    eats: true,
    legs: 4
};
function Rabbit(name){
    this.name = name;
}
Rabbit.prototype = animal;
let rabbit1 = new Rabbit("White Rabbit"); // rabbit1.__proto__ = animal
console.log(rabbit1.eats);


 // - - -  Assigning new object to prototype
let animaal = {
    eats: false
};
Rabbit.prototype = animaal;
let rabbit2 = new Rabbit("Toy Rabbit");
console.log(rabbit2.eats);


// ==================== Default F.prototype, constructor property

function Elephant() {}
// default prototype
// Elephant.prototype = { constructor: Elephant };

console.log(Elephant.prototype.constructor === Elephant);

// - - - create new object with existng constructor object
function Phone(name){
    this.name = name;
    console.log(this.name);
}

let ph1 = new Phone("Pixel 4");
let ph2 = new ph1.constructor("iPhone 11");

//  - - - Don't overwrite default prototype
function Human(){};

Human.prototype = {
    Machine : true,
}

let h1 = new Human();
console.log(h1.constructor === Human);

Human.prototype.constructor = Human;
console.log(h1.constructor === Human);