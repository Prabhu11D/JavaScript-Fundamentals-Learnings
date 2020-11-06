// alert("Hello JS");
console.log("Hello JavaScript!");
// console.functions() search on MDN
console.error("This is an error!");
console.warn("This is a Warning!");


// Variables
// var, let, const
let num = 10;
num = 20;
console.log(num);

const age = 30;
//age = 32;
console.log(age);




// Data Types
// String, Numbers, Boolean, Null, Undefined, Symbol
const name = "Prabhu";
const year = 21;
const score = 99.99;
const isGood = true;
const whatUKnow = null;
const BadBoy = undefined;
let x;

console.log(typeof score);
console.log(typeof whatUKnow);
console.log(typeof BadBoy);
console.log(typeof x);


// string operations
console.log("My name is "+name+" and I am "+age);
// in ES6
console.log(`My name is ${name} and I am ${age}`);
// String methods
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,4));
console.log(name.split('a'));


// Arrays
const particles = ['electron','proton','neutron'];
particles[3] = 'positron';
console.log(particles);
// Using const we can't create a new array as particles;
// But we can modify the array
particles.push('Muzon');
particles.unshift('photon');
console.log(particles);
// pop(), 

console.log(Array.isArray(particles));
console.log(particles.indexOf('proton'));




// Object literals
const person = {
    name1: 'Prabhu',
    age: 21,
    hobbies: ['music','programming','reading'],
    address: {
        city: 'Coimbatore',
        state: 'TamilNadu',
        country: 'India'
    }
}

console.log(person.hobbies);
// pulling
const {name1, address} = person;
console.log(name1);
console.log(address);
person.email = 'prabhu.ece001@gmail.com';

// Array of Objects

const todo = [
    {
        id:1,
        task: "Learn JS"
    },
    {
        id:2,
        task:"Finish the Project"
    }
];

console.log(todo);

const todoJSON = JSON.stringify(todo);
console.log(todoJSON);






// for
for(let i = 0; i<=10; i++){
    console.log(`loop ${i}`);
}

// while
let j = 0;
while(j<5){
    console.log(`while loop ${j}`);
    j++;
}

for(let i=0; i<todo.length; i++){
    console.log(todo[i].task);
}

// for of
for(let td of todo){
    console.log(td);
};

// forEach
todo.forEach(function(t){
    console.log(t.task);
});

// map
const Task = todo.map(function(t){
    return t.task.toUpperCase();
});
console.log(Task);

// filter





// conditions
x = 10
y = 5
if(x<20 && y >10){
    console.log("x is less than 20 and y is greater than 10");

}else if(x<20 || y > 10){
    console.log("x is less than 20 or y is greater than 10")
}

c = 30;
const color = c>10 ? 'red':'blue';
console.log(color);

// switch
a = 11;
switch(a){
    case 10:
        console.log("10");
        break;
    case 20:
        console.log("20");
        break;
    default:
        console.log("Not Correct");
        break;
}




// functions
function add(a = 100,b = 200){
    return a+b;
}

console.log(add());

// Arrow functions
const sum = (a,b) => a+b
console.log(sum(10,10));

// constructor functions
function Apps(name, rating, downloads, category){
    this.name = name
    this.rating = rating,
    this.downloads = downloads,
    this.category = category
};

Apps.prototype.details = function(){
    return `this ${this.name} app had ${this.downloads} downloads with ${this.rating} star rating!`;
}

// Instantiate object
const app1 = new Apps('everycircuit','5','10M+','Education');
console.log(app1);
console.log(app1.details())