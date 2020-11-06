/**
 * 
 *  Scope and Closure
 */


// ------------------------ Code Blocks


{
    let name = 'Prabhu';
    console.log(name);
}

// console.log(name);

{
    let name = "Ammu";
    console.log(name);
}

// if for while

// -------------------------- Nested Functions
function fn1(){

    console.log("I am fn1()");

    function fn12(){
        console.log("I am fn12()");
    }

    fn12();
}

fn1();


function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter()); // how it is incremented

let c1 = makeCounter();
console.log("c1() ", c1());
console.log("c1() ", c1());

// -------------------------- Lexical Environment

function sayHi(name){
    console.log(`Hi ${name}`);

    function sayBye(){
        console.log(`Bye ${name}`);
    }

    return sayBye
}

let bye = sayHi('Prabhu');
bye();

// -------------------------- Garbage Collection
