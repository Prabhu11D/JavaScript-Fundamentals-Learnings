function counter() {
  let count = 0;
  // var count = 0;

  return function incrementCount() {
    count++;
    console.log(count);
  }
}

let counter1 = counter();
counter1();
counter1();

let counter2 = counter();
counter2();
counter2();
counter2();


function looper(n) {
  let fns = [];

  // let to var for i 
  for (let i = 1; i <= n; i++) {
    fns.push(function log() {
      console.log(i);
    })
  }

  return function loop() {
    fns.forEach(fn => fn())
  };
}

looper(4)();