/**
 *          Destructuring assignment
 *      
 *      unpacking array and objects into individual packs 
 */

const { lstat } = require("fs");

// =========================    Array Destructuring

let arr = ["Prabhu", "Deva"];
let [firstname, lastname] = arr;
/** is same as 
 *  firstname = arr[0]
 *  lastname = arr[1]
 */

console.log(firstname, lastname);

// - - - -  Ignore elements using commas
let numbers = ['one','two', 'three', 'four','five'];
// ignoring 2nd element
let [one, , three] = numbers;
console.log(one, three);

// - - - -  Works with any iterable on the right-side 
let [a,b,c] = "ABC";
console.log(a,b,c);

let [one1, two2, three3] = new Set([1, 2, 3]);
console.log(one1, two2, three3);

// - - - -  Assign to anything at the left-side
let user = {};
[user.name, user.age] = "Prabhu 21".split(' ');
console.log(user);

// - - - -  Looping with .entries()
let animals = {
    elephant: 'lovely',
    mouse: 'tiny',
    lion: 'horror'
};
for(let [key, value] of Object.entries(animals)){
    console.log(`${key} :: ${value}`);
}

// - - - -  Swap variables trick
let man = "Man";
let woman = "Woman";
[man, woman] = [woman, man];
console.log(man, woman);

// - - - -  rest '...'
let [name1, name2, ...names] = ['prabhu', 'anbarasi', 'ammu', 'ranjitha', 'john', 'vignesh'];
console.log(names.length);

// - - - - Default values
let [cycle=true, car=true, bus=false] = [false];
console.log(cycle, car, bus);

// =========================    Object Destructuring
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
console.log(height);

// - - - - Declaring variables
let shape = {
    name: "square",
    width: 100,
    height: 100
};

let {width: w, height: h, name} = shape;
console.log(w,h,name);

// - - - - Default Values
let shape1 = {
    name: "Rectangular",
    width: 200
};

let {name: namee, width: width1} = shape1;
console.log(namee, width1);

// - - - - rest '. . .'
let circle = {
    origin : 0,
    end : Infinity,
    angleType : "heix"
}

let {origin: o, ...rest} = circle;
console.log(o);
console.log(rest);

// - - - - Code Block
let s1,s2,s3;

({s1,s2,s3} = {s1: "Shape1",s2: "Shape2",s3: "Shape3"});
console.log(s1,s2,s3);

// =========================    Nested Destructuring
let nested = {
    shape : {
        width : 100,
        height: 200
    },
    items: ['box', 'circle'],
    physics: true
};
let items, physics;

// =========================    Smart functions parameters
function showName(firstname, lastname, age){
    return `I'm ${firstname} ${lastname} and ${age} old`
}
console.log(showName("Prabhu", "Deva", 21));

function smartFunction({firstname, lastname, age}){
    return `I'm ${firstname} ${lastname} and ${age} old`
}

let details = {
    firstname: "Prabhu",
    lastname: "Deva",
    age: 21
};

console.log(smartFunction(details));