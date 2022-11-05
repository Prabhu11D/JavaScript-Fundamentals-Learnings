function addByObj(obj, c = 0) {
  console.log(obj.a + obj.b + c)
}

function addByCall(c = 0) {
  console.log(this.a + this.b + c)
}

let nums = {
  a: 10,
  b: 2
}

addByObj(nums, 3)
addByCall.call(nums, 1)

// it is used to borrow functionality
function argsToArray() {
  console.log(arguments);
  console.log(typeof arguments);

  // arguments is Array like Object
  // to convert arguments into array
  let newArgArray = [].slice.call(arguments)
  console.log(newArgArray)
}

argsToArray(1, 2, 3);

let mammal = function (legs) {
  this.legs = legs
}

let cat = function (legs, isDomestic) {
  mammal.call(this, legs);
  this.isDomestic = isDomestic;
}

let lion = new cat(4, false)

console.log(lion)