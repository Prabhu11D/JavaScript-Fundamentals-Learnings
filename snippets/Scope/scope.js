'use strict'

function higher() {
  let a = 10;
  console.log(this);

  function hh() {
    console.log(this);
  }
  hh();
}

console.log(this);
higher();

let obj = {
  a: 10,
  call() {
    console.log(this);
  }
}

obj.call();

/**
 * 
 *    Object is Everything.
 *    
 *    this is point to Global Object or User Defined Object,
 *    not Execution Context
 * 
 * 
 */
