const radius = [1, 2, 3, 4, 5];

const area = (radius) => {
  return Math.PI * radius * radius;
}

const circumference = (radius) => {
  return Math.PI * 2 * radius;
}

const diameter = (radius) => {
  return radius * 2;
}

// arrow function is not working in Array prototype
Array.prototype.geometry = function (formula) {
  let list = [];
  for (let i = 0; i < this.length; i++) {
    list.push(formula(this[i]));
  }

  return list;
}

console.log(radius.geometry(area));
console.log(radius.geometry(circumference));
console.log(radius.geometry(diameter));
