/**
 * 
 * Currying is a transformation of functions that translates a function 
 *  from callable as f(a, b, c) into callable as f(a)(b)(c).
 * 
 * : Currying doesn’t call a function. It just transforms it.
 * 
 */


function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b)
    }
  }
}

function sum(a, b) {
  return a + b;
}

sum = curry(sum);

console.log(sum(10)(20));

// Currying gives partial function with known values and we can use it later

function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log(new Date(), "DEBUG", "some debug"); // log(a, b, c)

function curryLog(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c)
      }
    }
  }
}

let logCurry = curryLog(log);
let logNow = logCurry(new Date());
console.log(logNow);
let debugLog = logNow("DEBUG");
console.log(debugLog);
debugLog("Bug")


// Multi Curry
function advCurry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function addition(a,b,c,d){
  return a+b+c+d
}

addition = advCurry(addition)

console.log(addition(1,2,3,4));
console.log(addition(1,2)(3,4));
console.log(addition(1,2,3)(4));
console.log(addition(1)(2)(3)(4));