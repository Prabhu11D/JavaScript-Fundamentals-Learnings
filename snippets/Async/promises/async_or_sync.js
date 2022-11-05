const log = console.log;

//---------------------------------------

class PromiseLab {

  play_promise_chain(start) {
    //"then" returns a promise, so we can chain
    const promise = new Promise((resolve, reject) => {
      resolve(start);
    });
    promise.then((start) => {
      log(`Value: "${start}" -- adding one`);
      return start + 1;
    }).then((start) => {
      log(`Value: "${start}" -- adding two`);
      return start + 2;
    }).then((start) => {
      log(`Value: "${start}" -- adding three`);
      return start + 3;
    }).catch((error) => {
      if (error) log(error);
    });
  }

}

//---------------------------------------

const lab = new PromiseLab();
lab.play_promise_chain(100);
lab.play_promise_chain(200);