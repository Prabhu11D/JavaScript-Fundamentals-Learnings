/**
 * 
 *     O B J E C T S
 * 
 *  : objects are used to store 
 *    keyed collections of various data and more complex entities
 *  : Objects are associative arrays with several special features.
 *    
 *  : Ref => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
 */


let dummyuser1 = new Object(); // object constructor
let dummyuser2 = {}; // object literal

//- - - - - - - - -  Literal and Properties

let user = {
  name: "Ammu",
  age: 17
};
console.log(user);


// changing values
user.name = "Prabhu";
user.age = 21;
console.log(user);


// delete age
delete user.age;
console.log(user);


// multy word key
user = {
  "about him": "Nothing"
}
console.log(user);


// const
const book = {
  name: 'Electronic Devices',
  ISBN: 1334342168945058,
  author: 'Robert',   // trailing and hanging comma
}
console.log(book);
book.name = "Circuit Theory";
console.log(book);


// - - - - - -  - - -  SQUARE BRACKETS
// Square brackets are much more powerful than dot notation
let phone1 = {
  name: "Mi",
  "is low price": true,
  price: 12000
}
let phone2 = {
  name: "Apple",
  price: 50000
}

// console.log(phone1.is low price); // Syntax Error
console.log(phone1['is low price']);
phone2['is low price'] = false;
console.log(phone2['is low price']);

// using variable
let k1 = 'is low price';
console.log(phone1[k1]);
k1 = 'name';
console.log(phone1.k1); // undefined


// COMPUTED PROPERTY
let cp = 'cpvalue';
let cpObj = {
  [cp + 'dummy']: 'key is cpvaluedummy not cp',
}
console.log(cpObj);


// - - - - - - - - - - PROPERTY VALUE SHORTHAND
// ref => https://alligator.io/js/object-property-shorthand-es6/

let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

let someObject = {
  cat,
  dog,
  bird
}
console.log(someObject);


// - - - - - - - PROPERTY NAME LIMITATIONS
// we can use reserved words in object

let reserved = {
  for: 1,
  let: 2,
  while: 10
};

console.log(reserved.for + reserved.let + reserved.while);

let zero = {
  0: "0 converts to string",
  1: "1 converts to string"
}

console.log(zero[0], zero["0"]);

zero.__proto__ = 100; // it only allow Object to assign, not primitive
console.log(zero.__proto__); // it is an object __proto__


let z1 = {
  0: 1,
  '0': 2
}

console.log(z1); // {0: 2}


/**
 * 
 * 
 *    PROPERTY EXISTENCE TEST
 * 
 *  : Reading a non-existing property just returns undefined
 */

// 'in' Operator
let test = {}
console.log("key" in test); // false
test.key = undefined;
console.log("key" in test); // true


// Why does the in operator exist? 
// Isn’t it enough to compare against undefined?
console.log(test.isThere); // undefined
console.log('isThere' in test); // false
console.log(test.key); // undefined
console.log('key' in test); // true


// - - - - - - - - - for in loop
let number = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
}

for (let num in number) {
  console.log(num + " -> " + number[num]);

}
// - - - - -  - ordered like an object
// if the keys are number it will ordered automatically
let ordered = {
  10: "Ten",
  3: "Three",
  5: "five"
}
for (let key in ordered) {
  console.log(key + " -> " + ordered[key]); // 3, 5, 10
}

/**
 * 
 *  JS convert the key to number, if it is integer string
 *  
 *  "40" -> 40
 *  "+40" -> "+40"
 *  "1.2" -> "1.2"
 */

ordered = {
  "+10": "Ten",
  "+3": "Three",
  "+5": "five"
}
for (let key in ordered) {
  console.log(key + " -> " + ordered[key]); // +10, +3, +5
}