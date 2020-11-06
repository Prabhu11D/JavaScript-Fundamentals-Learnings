/**
 *    Object are store reference rather than actual value
 */

// - - - - - - Primitive data type
let name1 = "Prabhu";
let name2 = name1;

console.log(name1);
console.log(name2);
name1 = "Ammu";
console.log(name1);
console.log(name2);

// - - - - - - Object data type
let obj1 = {
    name: "Prabhu"
}
let obj2 = obj1;
console.log(`obj1.name = ${obj1.name} , obj2.name = ${obj2.name}`);
obj1.name = "Ammu";
console.log(`obj1.name = ${obj1.name} , obj2.name = ${obj2.name}`);
delete obj1.name;
console.log(`obj1.name = ${obj1.name} , obj2.name = ${obj2.name}`);


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
let clone = {
    1 : "One",
    2 : "Two",
    clone : {
        3 : "Three",
        4 : "four"
    }
}
console.log(clone.clone);