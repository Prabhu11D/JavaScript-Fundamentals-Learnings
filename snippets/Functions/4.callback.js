const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;

const calc = (callback, a,b) => callback(a,b);

console.log(calc(add,10,10));
console.log(calc(sub,10,10));
console.log(calc(mul,10,10));
console.log(calc(div,10,10));