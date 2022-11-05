function calculation() {
  return new Promise((res, rej) => {
    console.log("Calculation Started");
    let i = 0,
      loop = true,
      number = 5;

    while (loop) {
      i++;
      if (i === number) {
        loop = false;
        res("Calculation Finished");
      }
    }

    rej("Calculation Error");
  });
}

function callbackCalculation(callback) {
  console.log("Calculation Started 1");
  let i = 0,
    loop = true,
    number = 5;

  while (loop) {
    i++;
    if (i === number) {
      loop = false;
      console.log("Calculation Finished 1");
    }
  }

  callback("Calculated 1");

}

calculation()
  .then((result) => {
    console.log(result);
    console.log("Hmm Promise Finished");
  })
  .catch((err) => {
    console.log(err);
  });

// callbackCalculation((data) => {
//   console.log(data);
//   console.log("Callback finished 1");
// })

console.log("After calculation()")