console.log("Async Await");


function hello() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("HELLO LATER");
      res("OK");
    }, 0);
  })
}

function hello1() {
  console.log("Hello Now");
}

async function doAsync() {
  let h = await hello();
  console.log("DONE")
}

hello();
doAsync();
hello1();

/***
 * 
 * Async function is resolve Promise, which is queued in microtask,
 * once all the Sync code Executed the Async get Executed
 * 
 */