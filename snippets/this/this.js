// "use strict"

console.log(this);

function fn1() {
  return this
}

console.log(fn1())

let obj = {
  o: 'obj',
  fn() {
    return this
  }
}

console.log(obj.fn());
// fn called by obj

let ext = obj.fn; // we copied the function
console.log(ext);
console.log(ext());

// new keyword changes the behaviour of this keyword

function user() {
  return this
}

let prabhu = user();
console.log(prabhu);

let ammu = new user();
console.log(ammu);
// it point to new {} who created this