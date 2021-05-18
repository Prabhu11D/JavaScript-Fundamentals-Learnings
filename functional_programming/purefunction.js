/**
 *        PURE functions
 *  1. should not take the input from the outside of the function
 *  2. should not change the input
 *
 */

array = [1, 2, 3];

function addToArray(a, element) {
  return [...a, element];
}

const newArray = addToArray(array, 4);
console.log(newArray);