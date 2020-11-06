/**
 *  Array is ordered collections of items it is accesses by index number
 *
 */

// -----------------  Declaration

let array = new Array();
// or
let arraySB = [];

arraySB = ["apple", "banana", "orange"];
console.log(arraySB[1]);

arraySB[3] = "grapes";
console.log(arraySB);

// mixing
let mixedData = [
  "Prabhu",
  "Ammu",
  function love() {
     return `I love you ${mixedData[1]}`;
  },
  true,
  {
    subject: "Physics",
    learning: true,
  },
];

console.log(mixedData[2]());

// ----------------- Methods pop/push, shift/unshift
let phone = ['Mi', 'apple'];
// added at end
phone.push('Blackberry');
console.log(phone);
// added at start
phone.unshift('Samsung');
console.log(phone);
// remove at end
phone.pop();
console.log(phone);
// remove at start
phone.shift();
console.log(phone);

// ----------------- Internals
// copying reference
let arr1 = ['1', '2'];
let arr2 = arr1;
console.log(arr1 === arr2);
console.log(arr2);
arr1[2] = '3';
console.log(arr2);
arr2[3] = '4';
console.log(arr1);
console.log(arr1 ===  arr2);

let obj = [];
obj[100] = '200';
obj['key'] = 'value';
console.log(obj);
// be careful when using [] 

// ----------------- Performance

// ----------------- Loops
let loop = ['1', 'one', 'func', true, phone];

// don't use for..in in array
for(let key of loop){
    console.log(key);
}

// ----------------- A word about length
console.log(loop.length);
loop[10] = 'last item with length 11';
console.log(loop.length);
// writable
loop.length = 3;
console.log(loop);
// console.log(loop[10]);
loop.length = 11;
console.log(loop);

// to clear an array
loop = []; // or
loop.length = 0;

// ----------------- new Array()
let newArr1 = new Array(1,2);
console.log(newArr1);
console.log(newArr1.length);

// define length
let newArr2 = new Array(10);
console.log(newArr2);
console.log(newArr2.length)

// ----------------- Multidimensional arrays
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1][1]);

// ----------------- toString

// ----------------- Don't compare array with ==
