// console.log(y); 
// for y there is not undefined in EC, because it is not
// decalred with var keyword
y = 10;


var x = 1;
a();
b();
console.log(x);


function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
