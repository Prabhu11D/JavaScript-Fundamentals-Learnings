/**
 * 
 * Function Borrowing
 * invoking function from external object or function itself.
 * 
 * call
 *  - calling object for a function
 *  
 */

let add1 = {
  num1: 10,
  num2: 20,
  sum: function () {
    console.log(this.num1 + this.num2)
  }
}

let add2 = {
  num1: 1,
  num2: 2
}

add1.sum()

add1.sum.call(add2)

let mul = function (extra = 1) {
  console.log(this.num1 * this.num2 * extra)
}

/*
 *  mul is method
 *  add1 is object 
 *  call is used to execute the mul method for add1 object
 * 
 */
mul.call(add1, 2) // first arg is for this or self, for current object
mul.call(add2, 3)
