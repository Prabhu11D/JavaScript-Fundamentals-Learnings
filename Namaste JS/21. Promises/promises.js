function fetchExample() {
  const github_api = 'https://api.github.com/users/akshaymarch7';
  const user = fetch(github_api);
  console.log(user);
}

// fetchExample();

console.log("Promise Started");

const waitingAsync = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Async Promise Running");
    res("DONE Async");
  }, 0);
})

const waitingSync = new Promise((res, rej) => {
  console.log("Sync Promise Running");
  res("DONE");
})


waitingSync.then(data => console.log("WaitingSync Data ", data));
/**
 * Whether Inside a Promise Sync or Async, but the Callbacks
 * works Asynchronously. means thenale works Asynchronously.
 * 
 */

console.log("Waiting Sync -> ", waitingSync)
console.log("Waiting Async -> ", waitingAsync)
console.log("Promise Finished")