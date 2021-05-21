const { default: axios } = require("axios");

const functions = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  isNull: () => null,
  checkValue: (x) => x,
  admin: () => {
    const user = { firstname: "Prabhu" };
    user["lastname"] = "Deva";
    return user;
  },
};

function fullName(firstName, lastName) {
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);
  return firstName + " " + lastName;
}

function fetchUser() {
  let res = axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return res;
}

module.exports = {
  functions,
  fullName,
  fetchUser,
};
