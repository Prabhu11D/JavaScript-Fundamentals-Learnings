/**
 * 
 *  Object.create()
 * 
 *  : Creates a new Object with the prototype set to
 *    a certain object 
 * 
 * 
 */


let cat = {
  makeSound: function () {
    console.log(this.sound);
  }
}

let c1 = Object.create(cat);
c1.sound = "c1 meeeoowwwww";

let c2 = Object.create(cat);
c2.sound = "c2 meeeoowwwww"

c1.makeSound();
c2.makeSound();


/***
 * 
 *  Object.create - it is more nature to the prototype model (than new)
 * 
 *  Object.setPrototypeOf() has some performant issue 
 * 
 * 
 */

let bike = {
  for: "solos"
}

let pulsar = {
  price: 120000,
  speed: 220
}

pulsar.__proto__ = bike;

let p1 = Object.assign({}, pulsar); // copies pulsar to {}
let p2 = Object.create(pulsar); // {}.__proto__ = pulsar
console.log({ p1, p2 });