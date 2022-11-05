# Creating a Promise, Chaining & Error Handling

## How Promises Work

```js
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
})

getTea().then(data => {
  console.log(data)
  return "getTea then"
}).then(data => {
  console.log(data);
  return "getTea then then"
}).then(data => {
  console.log(data)
})

getFood().then(data => {
  console.log(data)
  return "getFood then"
}).then(data => {
  console.log(data);
  return "getFood then then"
}).then(data => {
  console.log(data)
})

getSnacks().then(data => {
  console.log(data)
  return "getSnacks then"
}).then(data => {
  console.log(data);
  return "getSnacks then then"
}).then(data => {
  console.log(data)
})
```
### Output

![](./pics/Screenshot%20from%202022-11-05%2015-11-43.png)

### Explanation

- there are three main things in JRE.
  1. CallStack
  2. Microtask Queue
  3. Callback Queue

1. getCoffee() return a Promise, however it runs later because of setTimeout.
```
callstack - [getTea]
microtask - []
callback - [getCoffeePromise]
```
2. getTea() return a Promise, however it runs later because of setTimeout.
```
callstack - [getFood]
microtask - []
callback - [getCoffeePromise, getTeaPromise]
```
3. getFood() runs immediately and Promise is fulfilled and it is queued in microtask
```
callstack - [getSnacks]
microtask - [getFoodPromise]
callback - [getCoffeePromise, getTeaPromise]
```
4. getSnacks() runs immediately and Promise is fulfilled and it is queued in microtask
```
callstack - []
microtask - [getFoodPromise, getCoffeePromise]
callback - [getCoffeePromise, getTeaPromise]
```
5. there is nothing in **Global Execution Context**, so **Event Loop** dequeue from 
microtask and pushed into callstack
```
callstack - [getFoodPromise]
microtask - [getCoffeePromise]
callback - [getCoffeePromise, getTeaPromise]
```
6. getFoodPromise return another Promise and it is queued in microtask and Event 
Loop dequeue and push next task to callstack
```
callstack - [getCoffeePromise]
microtask - [getFoodPromiseThen]
callback - [getCoffeePromise, getTeaPromise]
```
7. same things happen until microtask will get empty
```
callstack - [getFoodPromiseThen]
microtask - [getCoffeePromiseThen]
callback - [getCoffeePromise, getTeaPromise]
```
```
callstack - [getCoffeePromiseThen]
microtask - [getFoodPromiseThenThen]
callback - [getCoffeePromise, getTeaPromise]
```
```
callstack - [getFoodPromiseThenThen]
microtask - [getCoffeePromiseThenThen]
callback - [getCoffeePromise, getTeaPromise]
```
```
callstack - [getCoffeePromiseThenThen]
microtask - []
callback - [getCoffeePromise, getTeaPromise]
```
```
callstack - []
microtask - []
callback - [getCoffeePromise, getTeaPromise]
```
8. Now callstack and microtask are empty, so Event Loop checks the callback queue
and push it callstack if anything exist.
```
callstack - [getCoffeePromise]
microtask - []
callback - [getTeaPromise]
```
```
callstack - []
microtask - [getCoffeePromiseThen]
callback - [getTeaPromise]
```
```
callstack - [getCoffeePromiseThen]
microtask - []
callback - [getTeaPromise]
```
```
callstack - []
microtask - [getCoffeePromiseThenThen]
callback - [getTeaPromise]
```
```
callstack - [getCoffeePromiseThenThen]
microtask - []
callback - [getTeaPromise]
```
```
callstack - [getTeaPromise]
microtask - []
callback - []
```
```
callstack - []
microtask - [getTeaPromiseThen]
callback - []
```
```
callstack - [getTeaPromiseThen]
microtask - [getTeaPromiseThenThen]
callback - []
```
```
callstack - [getTeaPromiseThenThen]
microtask - []
callback - []
```
```
callstack - []
microtask - []
callback - []
```
9. Completed.