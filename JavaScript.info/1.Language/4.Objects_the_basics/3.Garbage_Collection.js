/**
 * 
 *    GARBAGE COLLECTION
 *  
 *  : Memory management in JavaScript is performed automatically 
 *    and invisibly to us. We create primitives, objects, functions… 
 *    All that takes memory.
 * 
 */

// Reachability
// The main concept of memory management in JavaScript is reachability.
// reaching the var and function with the help of root and sub root


// - - - - - - Two Reference
let user = {
    name : "John"
}

let admin = user;
console.log(user);
console.log(admin);

user = null;
console.log(user);
console.log(admin);

// - - - - - - - Interlinked Objects
function marry(man, woman){
    man.wife = woman;
    woman.husband = man;

    return {
        father : man,
        mother : woman
    }
}
let man = { name : "Prabhu" }
let woman = { name : "Ammu" }

let family = marry(man, woman);
console.log(family);

// Outgoing reference is not matter
// incoming reference is reachable

delete family.father
delete family.mother.husband
console.log(family)

// - - - - - Unreachable island
family = null;
console.log(family);

// - - - - - - Internal Algorithms
// "mark and sweep"