/**
 *              MAP and SET
 * 
 *  Objects are used to store keyed collections
 *  Array are used to store ordered collections
 * 
 *  Map is used to store any key type
 * 
 */

// ===========================    Map

// - - - Regular Object
let regularObject = {
    name : "Prabhu",
    1 : "One",
    true: "Boolean[true]"
};

for(let i in regularObject){
    // every key in object is converted to string type
    console.log(`${i} is typeof "${typeof(i)}"`);
}

let map = new Map();
// store any type as key
map.set(1, "Number One");
map.set("1", "String One");
map.set(true, "Boolean");

console.log(map.size);

console.log(typeof(map.get(true)));
// console.log(map["1"]);

// - - - Objects as key in Map
let objAsKey = {
    name : "John"
};

let mapKey = new Map();
mapKey.set(objAsKey, 1000);
console.log(mapKey);

// Object as key in Object
let objKey = {};
objKey[objAsKey] = "1111";
console.log(objKey);

// - - - Chaining
// Every map.set call returns the map itself, so we can “chain” the calls

let mapChain = new Map();
mapChain.set(1, "One")
        .set(2, "Two")
        .set(3, "Three");

console.log(mapChain);

// ========================== Iteration over map
// - - - 1. Keys()
let particles = new Map([
    ["electron", -1],
    ["proton", 1],
    ["Neutron", 0]
]);

for(let i of particles.keys()){
    console.log(i);
}

// - - - 2. Values()
for(let i of particles.values()){
    console.log(i);
}

// - - - 3. Entries
for(let i of particles){
    console.log(i);
}

// - - - forEach
particles.forEach((value, key) => {
    console.log(key + " : "+value);
});


// ======================= Object.entries : Map from Object
// we can pass an array or object to Map

let obj = {
    name: "Prabhu",
    age: 21
};

let mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj);


// ======================= Object.fromEntries : Object from Map
let prices = Object.fromEntries([
    ['banana', 10],
    ['apple', 100],
    ['orange', 40],
]);

console.log(prices.banana);

let objFromMap = Object.fromEntries(mapFromObj.entries());
console.log(objFromMap);


// ======================== SET
// special type of collection where each value occur at once

let id1 = {name : "Prabhu"};
let id2 = {name: "Ammu"};
let id3 = {name: "KrishnaMoorthy"};

let set = new Set();
console.log(set);

set.add(id1);
set.add(id2);
set.add(id3);
set.add(id1);
set.add(id2);
set.add(id3);

for(let i of set){
    console.log(i);
}
console.log(set.size);

// ====================== Itearation Over SET

set.forEach((value)=>{
    console.log(value);
});
