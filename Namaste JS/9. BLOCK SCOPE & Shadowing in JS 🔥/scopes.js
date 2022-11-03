var tree = "is everything";
// tree is variable stored in global scope

let tiger = "tiger"; // is in Script Object
// var tiger = "tiger"; // it is in Global Object

let mountain = "Mountain";
/* mountain is also accessed throughout program but it is
 not attached to global object, it is in seperate space called script
*/

const GOD = "GOD";
// it is same as let, but you can't reassign any value

// Block Scope in Global Space
{
  var tree = "is greeny";
  // now tree is shadowed the outer scope in same EC, and it
  // changes the value of tree.

  let tiger = "Tiger in Block Scope";
  console.log(tiger);

  const GOD = "LOVE";
  console.log(GOD);

}

// Block Scope is some special space give isolation without need of new EC.

function NewEC() {
  var tree = "Tree in NewEC";
  let sun = "Sun"; // sun in New EC
  let moon = "Earth Moon";
  console.log(moon);
  {
    let tree = "New Tree";
    let sun = "New Sun in Block";
    // var sun = "Overwrite SUN"; 
    // this will not work, because it try to redeclare the sun in local scope, but sun is already there.
    // let will not allow to redeclare
    moon = "Jupyter Moon";
  }

  console.log(tree);
  console.log(moon);
}

NewEC();
console.log(tree);