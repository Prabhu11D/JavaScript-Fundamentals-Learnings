/**
 * 
 * 
 * A Proxy object wraps another object and intercepts operations, 
 * like reading/writing properties and others, optionally handling them on its own, 
 * or transparently allowing the object to handle them.
 * 
 *  : without any traps, proxy is a transparent wrapper around target.
 * 
 *  : Proxy is a special “exotic object”. It doesn’t have own properties. 
 *    With an empty handler it transparently forwards operations to target.
 * 
 *  : 
 */

let target = {};
let proxy = new Proxy(target, {});
// no trap in above proxy, so

proxy.test = 5;
// it set the test property in target object
console.log({ proxy, target });
console.log(proxy.test === target.test);

let numbers = [1, 2, 3];

numbers = new Proxy(numbers, {
  get(target, props) {
    if (props in target) return target[props];
    else throw new Error("IndexError: array index out of range")
  }
});

console.log(numbers[0]);
// console.log(numbers[100]);


/**
 *  returning same word is better than undefined in translation
 * 
 */

let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

console.log(dictionary['proxy']);

dictionary = new Proxy(dictionary, {
  get(target, props) {
    if (props in target) return target[props];
    else return props
  }
})

console.log(dictionary["proxy"]);


// only numbers in array
let numericArray = [];
numericArray = new Proxy(numericArray, {
  set(target, prop, value) {
    console.log({ target, prop, value })
    if (typeof value === 'number') {
      target[prop] = value;
      return true
    } else return false;
  }
})

numericArray.push(10);
numericArray.push(-100);
// numericArray.push("10"); // typeerror

console.log(numericArray);


// Iteration with “ownKeys” and “getOwnPropertyDescriptor”
let user = {
  name: "Prabhu",
  age: 23,
  _password: "****"
}

// we don't show the properties which has _
user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith("_"))
  }
})

for (let key in user) console.log(key);

//
let user1 = new Proxy({}, {
  ownKeys(target) { // called once to get a list of properties
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) { // called for every property
    return {
      enumerable: true,
      configurable: true
      /* ...other flags, probable "value:..." */
    };
  }

});

console.log(Object.keys(user1));


/**
 * 
 * Protected properties with “deleteProperty” and other traps
 */

let customer = {
  name: "Customer",
  email: "customer@company.com",
  _password: "secret"
}

customer = new Proxy(customer, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    }
    let value = target[prop];
    return (typeof value === 'function') ? value.bind(target) : value; // (*)
  },
  set(target, prop, val) { // to intercept property writing
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) { // to intercept property deletion
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) { // to intercept property list
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// Read
// console.log(customer._password);

// Write
// customer._password = "****";

// Delete
// delete customer._password;

// Iterating
for (let key in customer) console.log(key);


/**
 * 
 * “In range” with “has” trap
 */

let range = {
  start: 1,
  end: 10
};


console.log("start" in range);
console.log(5 in range);
// but we need to check number range

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end
  }
})
console.log(5 in range);
console.log(50 in range);


/**
 * Wrapping functions: "apply"
 */

function delay(fn, ms) {
  return function () {
    setTimeout(() => {
      fn.apply(this, arguments)
    }, ms);
  }
}

function sayBye(name) {
  console.log("Bye Bye ", name)
}

console.log(sayBye.length); // 1, it denotes function parameters length
sayBye = delay(sayBye, 2000);
console.log(sayBye.length); // 0, wrapper function overwrites it
sayBye("Bro");


// with Proxy Delay
function proxyDelay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

function sayHi(name) {
  console.log("Hi ", name);
}

console.log(sayHi.length);
sayHi = proxyDelay(sayHi, 2000)
console.log(sayHi.length);
sayHi("Bro");

/**
 *  Reflect is complement to Proxy, it can directly call the internal methods of an Object
 * 
 * 
 * 
 */