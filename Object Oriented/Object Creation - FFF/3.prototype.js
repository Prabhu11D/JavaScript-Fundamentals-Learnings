/**
 * 
 * 
 * In JS inheritance is achived by Prototype
 * 
 * Real World Analogy
 *  Class -> blueprint some entity
 *  Prototype -> delegating something to something
 * 
 *  : Prototype is simple and powerful inheritance model
 *  : Class in JS, is just a thin layer, which use Prototype under the hood
 */

function talk() {
  console.log(this.sound);
}

let animal = {
  talk
}

let cat = {
  sound: "Meow"
}

let dog = {
  sound: "Woof"
}

let prarieDog = {
  howl: function(){
    console.log(this.sound.toUpperCase());
  }
}

animal.talk();

Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog, animal);
Object.setPrototypeOf(prarieDog, dog);

cat.talk();
dog.talk();
prarieDog.howl();

/**
 * 
 *  : We are not coping animal properties to Cat or Dog.
 *  : JS just delegates cat -> animal
 * 
 */

// Proof
dog.talk(); // Woof
animal.talk = function(){
  console.log("Animal Wooos ", this.sound);
}
dog.talk();