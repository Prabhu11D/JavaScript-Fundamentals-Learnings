const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;

const calc = (callback, a,b) => callback(a,b);

console.log(calc(add,10,10));
console.log(calc(sub,10,10));
console.log(calc(mul,10,10));
console.log(calc(div,10,10));

function first(callback1, callback2){
    console.log("Hey I'm First Function");
    callback1(callback2);
}
function second(callback1){
    callback1();
    console.log("Hey I'm Second Function");
}
function third(){
    console.log("Hey I'm Third Function");
}

first(second, third);