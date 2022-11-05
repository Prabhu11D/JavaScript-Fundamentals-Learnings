function a(fn) {
  console.log("A");
  fn();
}

function b(fn) {
  console.log("B");
  fn();
}

function c(fn) {
  console.log("C");
  fn();
}

function d(fn) {
  console.log("D");
  fn();
}

a(() => b(() => c(() => d(() => console.log("HELL")))))