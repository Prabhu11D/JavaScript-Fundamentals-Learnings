/**
 * 
 *  Object Key may be String or Symbol
 * 
 *  Other than Symbol and String, if we use as key,
 *  it automatically converts to string
 *  
 *  obj[1] -> obj["1"]
 * 
 *  : A “symbol” represents a unique identifier.
 *  : we can create multiple unique symbol with same description
 *  : Symbols don’t auto-convert to a string
 */

let id1 = Symbol('descriptionId');
let id2 = Symbol('descriptionId');

console.log(typeof id1);
console.log(id1 === id2);
console.log(id1)


// “Hidden” properties
// Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.

// Symbols in an object literal
let id = Symbol("ID");

let user = {
  name: "Prabhu",
  [id]: "008"
}

console.log(user);

// Symbols don't participate in for..in

for(let prop in user){
  console.log(user[prop]);
}


// Global Symbol Registry
let s1 = Symbol.for("S");
let s2 = Symbol.for("S");

console.log(s1 === s2);
console.log(Symbol.keyFor(s1));


let unique = {
  type: "Symbolic Type"
}

unique[Symbol("ID")] = 1;
unique[Symbol("ID")] = 2;

// but in String
unique["ID"] = 10;
unique["ID"] = 11; // overwritten

// global symbol
unique[Symbol.for("I")] = "I";
unique[Symbol.for("I")] = "II"; // overwritten

console.log(unique);