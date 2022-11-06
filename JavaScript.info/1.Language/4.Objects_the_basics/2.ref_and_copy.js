/**
 *    Object are store reference rather than actual value
 */

// - - - - - - Primitive data type
// name1, name2 have its own copy
let name1 = "Prabhu";
let name2 = name1;

console.log(name1);
console.log(name2);
name1 = "Ammu";
console.log(name1);
console.log(name2);

// - - - - - - Object data type
// obj1 and obj2 referring same object
let obj1 = {
    name: "Prabhu"
}
let obj2 = obj1;
console.log(`obj1.name = ${obj1.name} , obj2.name = ${obj2.name}`);
obj1.name = "Ammu";
console.log(`obj1.name = ${obj1.name} , obj2.name = ${obj2.name}`);
delete obj1.name;
console.log(`obj1.name = ${obj1.name} , obj2.name = ${obj2.name}`);

let n1 = {};
let n2 = n1;
console.log(n1 === n2); // true
let n3 = {};
console.log(n1 === n3); // false, it compares the address of the object


// - - - - - -  - Cloning and merging objects
let user = {
    name : "Prabhu",
    age : 21
}
let copyUser = {};
for (let key in user){
    copyUser[key] = user[key];
}
console.log(user);
console.log(copyUser);
user.name = "Ammu";
user.age = 17;
console.log(user);
console.log(copyUser);


// - - - -  - - Object.assign
let dummyUser = Object.assign({}, user);
console.log(dummyUser);

Object.assign(dummyUser, copyUser); // overriding
console.log(dummyUser);

// - - - - - - - - - - - Nested Cloning
/**
 *  if some property have object has value, then Object.assign will
 *  not completly clone, for that key, it just assign the same object
 * 
 */

let numsA = {
  a: 10,
  b: 20,
  extra: {
    a: 30,
    b: 40
  }
};

let numsB = Object.assign({}, numsA);
console.log(numsA === numsB); // false
// but
console.log(numsA.extra === numsB.extra); // true, becoz, extra refers same object

let numsC = {
  a: 10,
  b: 20,
  extra: {
    a: 30,
    b: 40
  }
}

console.log(numsA === numsC); // false
console.log(numsA.extra === numsC.extra); // false

// to Deep Clone
let numsD = structuredClone(numsA);
console.log(numsA === numsD); // false
console.log(numsA.extra === numsD.extra); // false

// structuredClone will fails to clone property that have function has value
// for that use lodash _.cloneDeep(obj)
