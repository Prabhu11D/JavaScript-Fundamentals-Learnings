/**
 *  NULLISH COALESCING
 * 
 *  :  This is a recent addition to the language. 
 *     Old browsers may need polyfills. 
 *  : for ?? operator null and undefined are same.
 * 
 *  : a??b is new syntax, old one is
 *  : (a !== null && a !== undefined) ? a : b;
 *  
 *  : used to give default value
 *  
 */

let name1;

console.log(name1 ?? "Prabhu"); // Prabhu

// for null & undefined, ?? and || work similarly
let age;
console.log(age??23); // 23
console.log(age || 23); // 23

// but
console.log(0??1); // 0
console.log(0||1); // 1

/**
 * 
 *  : Due to safety reasons, JavaScript forbids using ?? 
 *    together with && and || operators, unless the precedence 
 *    is explicitly specified with parentheses.
 * 
 */

// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works