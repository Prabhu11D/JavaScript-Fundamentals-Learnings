var a = 10;

function b() {
  var x = 10;
}

console.log(window);
console.log(a);
// if we don't put anything infront of variable, 
// JS Engine think it is in global space
console.log(window.a);

console.log(this) // it denotes the current execution context
console.log(this === window);
console.log(this.a);