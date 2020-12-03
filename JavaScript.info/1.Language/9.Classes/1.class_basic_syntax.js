/**
 * 
 * 
 * 
 */

// ===================== The "class" syntax

class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log("I'm " +this.name);
    }
}

let user = new User("Prabhu");
user.sayHi();


// ===================== What is a class?
console.log(typeof User);

// ==================== Not just a syntactic sugar
function Shape(){};
Shape();

class Triangle{
    constructor(){}
}
// Triangle(); // error new is not defined
console.log(Triangle);

// ==================== Class Expression
let Name = class {
    sayHi(){
        console.log("Name Class")
    }
}
new Name().sayHi();

// - - - - Named Class Expressions
let Box = class Rect{
    show(){
        console.log(Rect);
    }
}
new Box().show();
// console.log(Rect);

// - - - - Making a Class
function makeClass(name){
    return class{
        sayHi(){
            console.log(" 👨 "+name);
        }
    }
}

let c1 = makeClass("Prabhu");
new c1().sayHi();

// ==================== Getters /  setters
class Admin{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
}

let admin = new Admin("Prabhu");
console.log(admin.name);

// ==================== Computed names[...]
class Compute{
    ['com'+'pute'](){
        console.log("Successfully Computed...");
    }
}
new Compute().compute();

// ==================== Class fields