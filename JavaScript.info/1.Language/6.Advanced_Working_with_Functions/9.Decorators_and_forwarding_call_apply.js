/**
 *      Decorator - Decorators are just a wrapper around a function. 
 *                  They are used to enhance the functionality of the 
 *                  function without modifying the underlying function
 * 
 */

// ======================   Transparent Caching

function slow(x){
    return `function at ${x}`
}

function cacheDecorator(func){
    let cache = new Map();

    return function(x){
        if(cache.has(x)){
            return cache.get(x)
        }
        let result = func(x);
        cache.set(x, result);

        return cache.get(x)
    }
}

slow = cacheDecorator(slow);

console.log(slow(1));
console.log(slow(2));
console.log(slow(1));

// ======================   Using "func.call" for the context

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecoratorFuncCall(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecoratorFuncCall(worker.slow); // now make it caching

console.log( worker.slow(2) ); // works
console.log( worker.slow(2) ); // works, doesn't call the original (cached)



// ======================   Going multi-argument

let workerMultiArg = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};
function cachingDecoratorMultiArg(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.call(this, ...arguments); 
    cache.set(key, result);
    return result;
  };
}
function hash(args) {
  return args[0] + ',' + args[1];
}
worker.slow = cachingDecoratorMultiArg(worker.slow, hash);
console.log( worker.slow(30, 5) );
console.log( "Again " + worker.slow(30, 5) );

// ======================   func.apply

// func.call(context, ...args);
// func.apply(context, args);

// ======================   Borrowing a method

function hashing(){
    return [].join.call(arguments)
}

console.log(hashing(10,20,30));

// ======================   Decorators and function properties