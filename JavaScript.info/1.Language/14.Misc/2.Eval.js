/**
 * 
 *  The built-in eval function allows to execute a string of code.
 */

const log = console.log;

let logString = "log('EVAL')";

eval(logString);

let a = 1;

(function f() {
  let a = 2;
  eval('log(a)'); // 2
})();

let x = 10;
eval("x = -10");
log(x);

// Without use strict, eval doesn’t have its own lexical environment

let gVar = "Globla Variable";
{
  let gVar = "Block Variable";
  eval("log(gVar)");
  window.eval("log(gVar)");
}
