function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 3000);

  console.log("Timer Started");
}

// x();

function loop() {
  for (let i = 0; i < 3; i++) {
    // i stored in block scope, there is brand new i variable in block scope
    console.log(i);
  }

  for (var j = 0; j < 3; j++) {
    // j is stored in global object, so it refer same variable
    console.log(j);
  }
}

// loop(); 


function timer() {
  for (let i = 1; i < 5; i++) {
    // i stored in block scope, there is brand new i variable in block scope
    setTimeout(() => {
      console.log(i)
    }, i * 1000);

  }

  for (var j = 1; j < 5; j++) {
    // j is stored in global object, so it refer same variable
    setTimeout(() => {
      console.log(j)
    }, j * 1000);

  }
}

// timer();


function varTimer() {
  for (var i = 1; i <= 5; i++) {
    (function close(copy) {
      setTimeout(() => {
        console.log(copy);
      }, i * 1000);
    })(i);

  }
}

// varTimer();