console.log("Modern Mode");

/**
 * 
 * 
 * 1. it prevents the conversion of this
 * 2. Prevents overwriting of readonly global variable
 */

function thisOld() {
  // if no obj called this function means *this* become null or undefined, 
  // then JS automatically converts into global object
  // if this is primitive it converts to Object type
  console.log(this);
}

function thisNew(){
  "use strict"
  console.log(this);
}

thisOld();
thisNew();

thisOld.call({});
thisOld.call(null);
thisOld.call(undefined);

thisNew.call({});
thisNew.call(null);
thisNew.call(undefined);

thisOld.call("A");
thisNew.call("A"); 