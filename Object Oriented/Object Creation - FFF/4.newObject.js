function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function () {
  console.log("I say ", this.saying);
}

let crockford = new Person('SEMICOLANS!!!1one1');

console.log(Person); // Person Body
console.log(Person.constructor); // Function()
console.log(Person.prototype); // {constructor: f}

console.log(crockford); // Person Object
console.log(crockford.prototype); // undefined
console.log(crockford.__proto__); // {talk: f, constructor: f}
console.log(crockford.__proto__.__proto__);

// Checking Prototype Behaviour
function hello() {
  console.log("Hello");
}

hello.prototype.hmmProto = { message: "Okay Hmm" }
hello.hmm = { message: "Okay Hmm" }
console.log("hello \n\n", hello);
console.log("hello.prototype\n\n", hello.prototype);
console.log("hello.__proto__\n\n", hello.__proto__);


/**
 * 
 * Rebuilding new Operator
 * 
 * 
 */

function Car(model, kmph) {
  this.model = model;
  this.kmph = kmph;
}

function Bike(model, kmph) {
  this.model = model;
  this.kmph = kmph;
  return {
    bike: `${model} is ${kmph} speed`
  }
}

function New(constructor) {
  let obj = {}
  Object.setPrototypeOf(obj, constructor);
  let argsArray = Array.prototype.slice.apply(arguments);
  return constructor.apply(obj, argsArray.slice(1)) || obj;
}

let moto1 = new Car("moto", 200);
let moto2 = New(Car, "moto", 200);

let pulsar1 = new Bike("pulsar", 220);
let pulsar2 = New(Bike, "pulsar", 220);

console.log({ moto1, moto2, pulsar1, pulsar2 })
