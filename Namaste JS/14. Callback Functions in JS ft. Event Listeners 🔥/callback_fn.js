// Callback functions

setTimeout(() => {
  console.log("timer 3000")
}, 3000);

function caller(fn) {
  console.log("Called Fn");
  fn();
}

caller(function () {
  console.log("Call me back");
});


// Eventlistener

function countClicks() {
  let count = 0;
  document.getElementById('clickme').addEventListener('click', function clickHandler() {
    console.log("Button Clicked", ++count);
  })
}

// countClicks();

// using IIFE
document.getElementById('clickme').addEventListener('click', (function () {
  let count = 0;
  return function () {
    console.log("Button Clicked", ++count);
  }
})());
