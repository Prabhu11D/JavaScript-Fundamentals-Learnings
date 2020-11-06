/**
 * 
 * 
 */


// ========================= func as string or string as func
let sum = new Function('a','b','return a+b');
console.log(sum(10,20));

let hello = new Function("console.log('Hello')");
hello();

// =================== Closure ===================
globalThis.i = 'Global Scope';

function closure(){
    let i = 'new Function()';

    let inner = new Function('console.log(i)');

    return inner
};

closure()();