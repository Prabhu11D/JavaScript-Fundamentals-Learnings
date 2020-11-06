
/**
 * 
 *  Object have properties
 *          properties = key + value
 * 
 *          there are flag also in object
 */


// --------------------- Property Flag
let user = {
    name : 'prabhu',
    age : 21
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

// ------------------- Non writable

Object.defineProperty(user, 'name', {writable : false});
user.name = 'Ammu'; // error only show in strict mode
console.log(user);

let user1 = { };
Object.defineProperty(user1, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

console.log(user1.name); // John
user1.name = "Pete"; // Error

// ---------------------- Not Enumerable

let u1 = {
    name: 'Prabhu',
    age: 21
}

Object.defineProperty(u1, 'name', {
    enumerable : false
})

for(let key in u1){
    console.log(u1[key]);
}

// ------------------------ Not Configurable

let admin = {
    name : 'Prabhu',
    age: 22
}

Object.defineProperty(admin, 'name', {
    configurable: false
});

console.log(admin);
delete admin.name; // not deleted
console.log(admin);

// ------------------------ Object.defineproperties

let unique = {};

Object.defineProperties(unique, {
    'name' : {
        value: 'Prabhu',
        writable : false
    },
    'working' : {
        value : true,
        writable : false
    }
}); 

unique.name = "John";
console.log(unique.name);
unique.working = false;
console.log(unique.working);


// ------------------------ Object getOwnPropertyDescriptors


// ------------------------ Object sealing globally

