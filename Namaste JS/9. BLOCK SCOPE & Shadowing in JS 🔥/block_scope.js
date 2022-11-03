{
  // this curly braces is used to create block scope
}

var a = 1;
let b = 22;

{
  console.log(a);
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(b); // it access global scope
console.log(a);
// console.log(b);
// console.log(c);

var hello = "Hello";
console.log("Before Entering into function the hello is", hello);

function outerScope() {
  console.log("After Entering into function the hello is", hello);

  var hello = "Hello Modified"
  console.log("After changing the hello inside the function", hello);
}

outerScope();

let x = 0;

{
  let x = 1;
  {
    let x = 2;
    {
      let x = 3;
    }
  }
}