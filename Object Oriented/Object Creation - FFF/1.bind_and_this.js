let dog = {
  sound: "Woof",
  talk: function () {
    console.log(this.sound);
  }
}

/**
 *  this keyword refers who called this, not where this is defined
 */

dog.talk(); // Woof

/**
 * In JS functions are treated as normal values
 * 
 * when we assign method to variable, it becomes function
 * fuValue has function, not dog method, when it called this is undefined
 * this refers to who called, fuValue is not object
 * 
 */

let fuValue = dog.talk;
console.log(fuValue);
fuValue(); // undefined

/**
 *  to change the `this` behaviour, from who called to where it defined,
 *  we need to bind this
 * 
 */

let bingDog = dog.talk.bind(dog);
console.log(bingDog);
bingDog(); // woof


// REAL WORLD EXAMPLE
document.getElementById('thisBtn').addEventListener('click', dog.talk);
document.getElementById('thisBtn').addEventListener('click', dog.talk.bind(dog));
document.getElementById('thisBtn').addEventListener('click', function () {
  dog.talk();
});
