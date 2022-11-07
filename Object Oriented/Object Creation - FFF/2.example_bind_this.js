let talk = function () {
  console.log(this.sound);
}

talk();

let lion = {
  speak: talk,
  sound: "Roar"
}

/**
 * 
 *  we refering lion speak with just talk, where this is not bound to any object,
 *  speak just refering talk, not copied that function
 * 
 *  while calling speak, it calls talk, with lion object, so Roar
 * 
 */


lion.speak(); // Roar, talk function called with lion object
let lionSpeak = lion.speak; // lionSpeak is just talk function
lionSpeak(); // undefined

let dog = {
  sound: "woof"
}

dog.speak = talk.bind(dog); // talk is copied with dog object to speak property
let dogSpeak = dog.speak;
dogSpeak(); // woof

let cat = {
  speak: function () {
    console.log(this.sound);
  },
  sound: "Meow"
}

cat.speak(); // Meow
let catSpeak = cat.speak;
catSpeak(); // undefined

let tiger = {
  speak: lion.speak,
  talk: lion.speak.bind(dog),
  sound: "Tiger"
}
tiger.speak();
tiger.talk();

console.log({ lion, dog, cat, tiger });