console.log(x); // undefined
console.log(getName); // function body
getName(); // Namaste JS


var x = 7;

function getName() {
  console.log("Namaste JS");
}


console.log(x); // 7
console.log(getName); // function body
getName(); // Namaste JS

console.log(getAge);
console.log(getEmail);

// Arrow Function
const getAge = () => {
  return 23;
}

const getEmail = function () {
  return '123@gmail.com'
}

console.log(y); // y not defined