/**
 * 
 * 
 */

// ----------------- Add Remove items
// array is also an object

let arr = [1,2,3,4,5,6,7];

delete arr[3];
console.log(arr.length);
console.log(arr);

// --- splice

arr = [1,2,3,4,5,6];
arr.splice(2,2);
console.log(arr);
arr.splice(2,0,10,20);
console.log(arr);

let removed = arr.splice(2,1);
console.log(removed);
console.log(arr);

arr.splice(-1,0,1000);
console.log(arr);

// Slice

console.log(arr.slice(1,3));
console.log(arr);

// concat

console.log(arr.concat([11,22,33]));
console.log(arr);
arr = arr.concat([11,22,33]);
console.log(arr);

// ----------------- Iterate: forEach
let name = ['Arjun', 'Bala', 'Chandrika', 'Deepika'];
name.forEach((item, index, array) =>{
    console.log(`${item} at index of ${index} in ${array}`);
})

// ----------------- Searching in Array

// indexOf, includes, lastIndexOf

console.log(name.indexOf('Bala'));
console.log(name.indexOf('Prabhu'));

console.log(name.includes('Prabhu'));
console.log(name.includes('Arjun'));

console.log(name.lastIndexOf('Bala',-1));

const arrNaN = [NaN];
console.log(arrNaN.includes(NaN));
console.log(arrNaN.indexOf(NaN));

// find, findIndex
let nameFinded = name.find(n => n == 'Prabhu');
console.log(nameFinded);

// -- filter
let users = [
    {id:1, name:'Prabhu'},
    {id:2, name:'John'},
    {id:3, name:'Manoj'},
    {id:4, name:'Vignesh'},
    {id:3, name: 'Manoj Kumar'}
];
let userFilter = users.filter(i => i.id == 3);
console.log(userFilter);

// ----------------- Transform an Array

// map
let nameLength = name.map(item => item.length);
console.log(nameLength);

// sort

let numbers = [10,6,2,7,3,5, 100, 51, 50,4];
numbers.sort();
console.log(numbers);

// ----------------- Array.isArray

console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray({}));
console.log(Array.isArray([]));

// ----------------- Most methods support 'thisArg'

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users1 = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users1.filter(army.canJoin, army);

console.log(soldiers);