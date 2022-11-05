let nums = [1, 2, 0, 4];


console.log(Math.min(1, 2, 0, 4));

// min only accepts args, not array
// apply is used to convert array to args

console.log(Math.min.apply(null, nums));