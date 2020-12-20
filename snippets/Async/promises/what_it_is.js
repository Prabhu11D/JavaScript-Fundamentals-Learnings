function calculation() {
  return new Promise((res, rej) => {
    console.log("Calculation Started");
    let i = 0,
      loop = true,
      number = 1000000000;

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

calculation()
  .then((result) => {
    console.log(result);
    console.log("Hmm Promise Finished");
  })
  .catch((err) => {
    console.log(err);
  });
