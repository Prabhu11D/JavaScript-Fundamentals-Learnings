/**
 *           F U N C T I O N S
 *    
 *    : main purposes of functions: to avoid code duplication.
 *
 *  -> minimizing the use of global var is good practice
 */


/**
 * 
 *   OUTER VARIABLE
 * 
 * 
 *  : functions can access outer variable and it can modify it
 *  : If a same-named variable is declared inside the function 
 *    then it shadows the outer one.
 *  : Global variables are visible from any function (unless shadowed by locals).
 * 
 */
let username = "Prabhu";

function change() {
  username = "Ammu";
}

console.log(username);
change();
console.log(username);

// function see only outer var if there is no local var
let name = "Prabhu";
function show() {
  let name = "Ammu";

  console.log(name);
}
console.log(name);
show();


/**
 * 
 *  PARAMETERS
 *  
 *  : We can pass arbitrary data to functions using parameters.
 * 
 */
function add(n1, n2) {
  return n1 + n2;
}

console.log(add(10, 20));


// DEFAULT VALUES
function add3(x, y, z = 1000) {
  return x + y + z;
}
console.log(add3(10, 20, 30));
console.log(add3(10, 20));

// old way of declaring default value
function way1(x) {
  if (x == undefined) x = "X";
}

function way2(x) {
  x = x || 'X';
}


// alternative default parameters
// whenever we call the function it stores the default parameter
function love(name, lover) {
  lover = lover ?? 'Unknown';

  return name + " loves " + lover;
}
console.log(love("Prabhu"));
console.log(love("Prabhu", "Ammu"));


/**
 * 
 *  RETURN VALUES
 * 
 */

function temperature(temp) {
  if (temp < 15) {
    return "It is so cold";
  }
  if (temp < 30) {
    return "Medium weather";
  }
  if (temp < 50) {
    return "It is so hot";
  }
  if (temp > 50) {
    return "better die";
  }
}

console.log(temperature(60));

// Empty return or without return
function empty() { }

function emptyReturn() {
  return;
}

console.log(empty() === undefined); // true
console.log(emptyReturn() === undefined); // true 


/**
 * 
 *  NAMING FUNCTIONS
 * 
 *  : Functions are actions. So their name is usually a verb.
 *  : One function – one action
 *      : A function should do exactly what is suggested by its name, no more.
 * 
 */


// functions == comment
// this is self-describing function
function showPrime(n) {
  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue
    console.log(i + " is Prime");
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false
  }
  return true
}

showPrime(50);