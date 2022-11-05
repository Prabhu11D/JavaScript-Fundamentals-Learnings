// Sync Function
function getFood() {
  return new Promise((res, rej) => {
    console.log("Processing Food");
    res("Food Ready Buddy");
  })
}

function getSnacks() {
  return new Promise((res, rej) => {
    console.log("Processing Snacks");
    res("Snacks Ready Buddy");
  })
}

// Async Function
function getCoffee() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Processing Coffee");
      res("Coffee Ready")
    }, 0);
  })
}

function getTea() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Processing Tea");
      res("Tea Ready")
    }, 0);
  })
}

getCoffee().then(data => {
  console.log(data)
  return "getCoffee Then"
}).then(data => {
  console.log(data)
  return "getCoffee Then Then"
}).then(data => {
  console.log(data)
  throw new Error("Coffee Underflow");
}).then(data => console.log(data))
  .catch(err => console.error(err))

getTea().then(data => {
  console.log(data)
  return "getTea then"
}).then(data => {
  console.log(data);
  return "getTea then then"
}).then(data => {
  console.log(data)
  throw new Error("Tea Underflow");
}).then(data => console.log(data))
  .catch(err => console.error(err))

getFood().then(data => {
  console.log(data)
  return "getFood then"
}).then(data => {
  console.log(data);
  return "getFood then then"
}).then(data => {
  console.log(data)
  throw new Error("Food Underflow");
}).then(data => console.log(data))
  .catch(err => console.error(err))

getSnacks().then(data => {
  console.log(data)
  return "getSnacks then"
}).then(data => {
  console.log(data);
  return "getSnacks then then"
}).then(data => {
  console.log(data)
  throw new Error("Snacks Underflow");
}).then(data => console.log(data))
  .catch(err => console.error(err))