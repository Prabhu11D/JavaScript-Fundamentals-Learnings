let mul = function (n1 = 1, n2 = 1) {
  console.log(this.num1 * this.num2 * n1 * n2)
}

// apply is similar to call, the difference is how we pass arguments
// call takes many args , , , , 
// apply takes two args one is this (object), next is array of arguments

let nums = {
  num1: 10,
  num2: 10
}

mul.call(nums)
mul.call(nums, 2, 4)
mul.apply(nums, [2, 4])