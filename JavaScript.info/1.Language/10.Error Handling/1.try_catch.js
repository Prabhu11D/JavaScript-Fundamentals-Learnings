/**
 * 
 * 
 * 
 */

// =====================  The "try...catch" syntax  ================

try{
    let variable = 10;
    console.log("Printing variable "+variable);
}
catch(err){
    console.log(err);
}

// try...catch works for runtime error

//  try...catch work synchronously 
setTimeout(function() {
  try {
    noSuchVariable;
  } catch {
    console.log( "error is caught here!" );
  }
}, 400);

// =====================  Error Object =============================
try{
    console.log(lalala);
}
catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    console.log("Full Error -------------------------");
    console.log(err);
}

//  ====================  Optional "catch" binding =================
try{
    // let number = 1000;
    console.log(number);
}catch{

}

//  ====================  Using "try...catch"  ====================
let json = '{"name": "Prabhu", age :21}';

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  console.log( user.name ); // doesn't work

} catch (e) {
  // ...the execution jumps here
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( e.name );
  console.log( e.message );
}


//  ====================  Throwing our own errors  ================
let json1 = '{"age": 21}';

try{
    let user = JSON.parse(json1);

    if(!user.name){
        throw new SyntaxError("Incomplete data : name not found 👎");
    };
    console.log(user.name);
}
catch(e){
    console.log("JSON error ▶️ "+e.message);
}


// =====================  Rethrowing  =============================
console.log("================ Rethrowing =================");
function readData(){
    let json = '{"name":"Prabhu", "age":21}';
    let user = JSON.parse(json);

    try{
        blabla();
    }catch(e){
        if(e instanceof SyntaxError){
            throw new SyntaxError("Syntax Error");
        }else{
            throw e;
        }
    }
}

try{
    readData();
}catch(e){
    console.log(e);
}

// ===================== try...catch...finally ====================
try{
    let sum = 10 + num;
}catch(e){
    console.log(e.name + " : "+e.message);
}finally{
    console.log('finally finally executed ⏰');
}


let t1 = Date.now();
setTimeout(()=>{
    let t2 = Date.now();
    console.log(t2-t1);
}, 400);


// - - - - finally and return
try{
    console.log("try return 👎");
}finally{
    console.log("finally return 👍");
}

//  =================== Global catch ==============================
// it is not core js feature, read it later