/**
 * 
 * 
 * 
 */

// ===================== setTimeout

function sayHi(name){
    console.log("Hi "+name);
}

setTimeout(sayHi, 1000, "Prabhu");


// ================== Canceling with clear timeout
let countTimer = 0;
let timerId = setTimeout(() => {
    countTimer ++;
    console.log("timer id ", countTimer);
}, 1000);

timerId
setTimeout(()=>{
    clearTimeout(timerId);
    console.log("clearTimeout executed...");
}, 2000);
console.log(timerId);

// ===================== setTimeInterval
let i = 0;
let timeInterval = setInterval(()=>{
    i++;
    console.log("Time Interval ", i);
}, 500);
setTimeout(() => {
    clearInterval(timeInterval);
}, 10000);


// ===================== Nested setTimeout
let tickCount = 0;
let nested = setTimeout(function tick(){
    console.log("tick... ", tickCount);
    tickCount++;
    nested = setTimeout(tick, 1000);
}, 1000);

setTimeout(() => {
    clearTimeout(nested);
}, 5000);

// 💯 Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

// ================= Zero delay setTimeout

setTimeout(()=>{
    console.log("Zero Delay Timeout Execute after the current script...");
}, 0);
console.log("This statement is after the zero delay timeout")