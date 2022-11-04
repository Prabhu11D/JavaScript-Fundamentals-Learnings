console.log('START');

setTimeout(() => {
  console.log("Timer 5s");
}, 5000);

console.time();
let startTime = new Date().getTime();
let endTime = startTime;
while (endTime < startTime + 10000) endTime = new Date().getTime();
console.timeEnd();

console.log('END');
