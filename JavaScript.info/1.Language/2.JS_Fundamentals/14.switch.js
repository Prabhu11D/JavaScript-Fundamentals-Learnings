/**
 *  S W I T C H
 * 
 *    : A switch statement can replace multiple if checks.
 *    
 *    : strict equality check in case
 */

let a = '2';
let b = 0;

switch (+a) {
  case b:
    console.log("Case 0");
    break
  case b + 1:
    console.log("Case 1");
    break
  case b + 2:
    console.log("Case 2");
    break
  case b + 3:
    console.log("Case 3");
    break
  default:
    console.log("Default Case");
}


// Grouping of Case
let group = 4;
switch (group) {
  case 1:
  case 3:
    console.log("ODD");
    break;
  case 2:
  case 4:
    {
      console.log("EVEN");
      break;
    }
  default:
    console.log("NUMBER");
}

// Type matter
let t = '1';

switch (t) {
  case '1':
    console.log("String 1");
    break
  case 1:
    console.log('Number 1');
    break
  default:
    console.log('Type Unknown');
}