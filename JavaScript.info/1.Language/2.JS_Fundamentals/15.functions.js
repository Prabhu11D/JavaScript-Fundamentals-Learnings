/**
 *           F U N C T I O N S
 *
 *
 *  -> minimizing the use of global var is good practice
 */

// functions can access outer variable and it can modify it
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

// parameters
function add(n1, n2) {
  return n1 + n2;
}

console.log(add(10, 20));

// default parameters
function add3(x, y, z = 1000) {
  return x + y + z;
}
console.log(add3(10, 20, 30));
console.log(add3(10, 20));

// alternative default parameters
// whenever we call the function it stores the default parameter
function love(name, lover) {
  if (lover === undefined) {
    lover = "Nobody";
  }

  return name + " loves " + lover;
}
console.log(love("Prabhu", "Ammu"));

// return directive
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
function empty() {}

function emptyReturn() {
  return;
}

console.log(empty());
console.log(emptyReturn());

// use () for more line in return
// return (...)

// one function === one action
// a function only perform one task as per it name

// functions == comment
function showPrime(n){
    for(let i = 2; i <= n; i++){
        if(!isPrime(i)) continue
        console.log(i + " is Prime");
    }
}

function isPrime(n){
    for(let i=2; i<n; i++){
        if(n%i == 0) return false
    }
    return true
}

showPrime(50);