/**
 * 
 *          Weak Map & Weak Set
 * 
 */

let john = { 
    name: "John",
    age: 22
};

console.log(john);

// array has john object
let arr = [john];

// map has john object
let map = new Map();
map.set(john, ". . . ");

// derefering
john = null;

console.log(john);  // null
console.log(arr[0]);   // but it is still accessible
console.log(map);


// ======================= WeakMAP
// it uses objects as key, and not other primitive data types
// some methods doesn't supported in WeakMap (keys(), size, ...)

let prabhu = {
    name: "Prabhu",
    age: 21
};

let weakmap = new WeakMap();

weakmap.set(prabhu, '. . . ');
console.log(weakmap.get(prabhu));

// weakmap.set("Prabhu", "Name");
// Key must be object

prabhu = null;
console.log(weakmap.get(prabhu));

// ================ Use Case: Addition data
let visitCountMap = new WeakMap();

function countUser(user){
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count+1);
}

let rithin = {
    name: "Rithin"
}

countUser(rithin);
countUser(rithin);
countUser(rithin);
console.log(visitCountMap.get(rithin));

// Dereferencing
rithin = null;
console.log(visitCountMap.get(rithin));


// ======================  Use Case : Caching
// it is not an optimal solution

let cache = new WeakMap();

function process(obj){
    if(!cache.has(obj)){
        cache.set(obj, obj);
    }

    return cache.get(obj);
}

let animal = {
    eats: true,
    legs: 4
};

let r1 = process(animal);
let r2 = process(animal);

console.log(cache.get(animal));
animal = null;
console.log(cache.get(animal));


// ====================== WeakSET

let visitedSet = new WeakSet();

let abirami = {
    name: "Abirami"
};
let dharani = {
    name: "Dharani"
};

visitedSet.add(abirami);
visitedSet.add(dharani);
visitedSet.add(abirami);

console.log(visitedSet.has(abirami));
abirami = null;
console.log(visitedSet.has(abirami));