/**
 * bind is similar to call, but it doesn't call immediatly
 * first it returns the copy of method with object
 * then we need to call that return copy
 * 
 */

let mul = function (n1 = 1, n2 = 1) {
  console.log(this.num1 * this.num2 * n1 * n2)
}

let nums = {
  num1: 10,
  num2: 10
}

let later = mul.bind(nums)
console.log(later)
later()