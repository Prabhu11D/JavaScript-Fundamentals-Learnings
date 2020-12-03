/**
 *
 *
 *
 */

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 4, 9, 16, 25);
console.log(arr.isEmpty());

let filteredArray = arr.filter((item) => item > 10);
console.log(filteredArray);
// console.log(filteredArray.isEmpty());