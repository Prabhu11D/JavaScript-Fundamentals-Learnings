/**
 * 
 * 
 * 
 */

class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let lion = new Animal('Lion');
lion.run(100);

// =========================    The "extends" keyword
class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} hides.`);
    }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(60);
rabbit.hide();

// - - - - Any Expression allowed after Extends
function f(phrase) {
  return class {
    sayHi() { console.log(phrase); }
  };
}

class User extends f("Hello") {}

new User().sayHi();

// =========================    Overriding a method
class Elephant extends Animal{
    stop(){
        this.speed = 0;
        console.log("Elephant stops running 🐘");
    }
}

let mini = new Elephant("Elephant 🐘");
mini.run(20);
mini.stop();

// - - - - Calling parent methods with super keyword
class Tiger extends Animal{
    stop(){
        setTimeout(()=> super.stop(), 2000);
        // setTimeout(function() { super.stop() }, 1000);
    }
}

let tiger = new Tiger("Tiger");
tiger.stop();

// =========================    Overriding constructor
class Girafee extends Animal{
    constructor(name, legLength){
        super(name);
        this.legLength = legLength;
    }
    showLength(){
        console.log("leg length is 3x bigger than body "+this.legLength+"m");
    }
}

let girafee = new Girafee("Girafee", 12);
girafee.showLength();

// =========================    Super: internals[[HomeObject]]
// read later (it is advanced topics)