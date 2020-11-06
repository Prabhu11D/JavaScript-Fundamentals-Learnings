/**
 * 
 *  Ref => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
 */

//- - - - - - - - -  Literal and Properties
let dummyuser = new Object(); // object constructor

let user = {
    name : "Ammu",
    age : 17
}; 
// object literal
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
    "about him" : "Nothing"
}
console.log(user);

// const
const book = {
    name : 'Electronic Devices',
    ISBN : 1334342168945058,
    author : 'Robert',   // trailing and hanging comma
}
console.log(book);
book.name = "Circuit Theory";
console.log(book);


// - - - - - -  - - -  SQUARE BRACKETS
let phone1 = {
    name : "Mi",
    "is low price": true,
    price : 12000
}
let phone2 = {
    name : "Apple",
    price : 50000
}

console.log(phone1['is low price']);
phone2['is low price'] = false;
console.log(phone2['is low price']);


// - - - - - - - - - - Property value shorthand 
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

// - - - - - - - Property name limitations
// we can use reserved words in object

let reserved = {
    for : 1,
    let : 2,
    while : 10
};

console.log(reserved.for + reserved.let + reserved.while);

let zero = {
    0 : "0 converts to string",
    1 : "1 converts to string"
}

console.log(zero[0], zero["0"]);

zero.__proto__ = 100;
console.log(zero.__proto__); // it is an object __proto__


// - - - - - - - - - Property existence test
let test = {}
console.log("key" in test);
test.key = undefined;
console.log("key" in test);

// - - - - - - - - - for in loop
let number = {
    one: 1,
    two: 2,
    three : 3,
    four : 4
}

for(let key in number){
    console.log(key + " -> " + number[key]);
}

// - - - - -  - ordered like an object
// if the keys are number it will ordered automatically
let ordered = {
    10: "Ten",
    3: "Three",
    5: "five"
}
for(let key in ordered){
    console.log(key + " -> " + ordered[key]);  
}