/**
 * 
 *          F U N C T I O N     E X P R E S S I O N
 */

let showName = function(name){
    console.log(`Hello ${name}`);
}

showName("Prabhu");


function add(a,b){
    return a+b;
}

let sum = add;  // it stores the functions
let SUM = add(2,4); // it stores the function return value

console.log(sum, SUM);
console.log(sum(20,20));


/**
 *  SEMICOLON
 * 
 *  code blocks doesn't require ; at end
 *  but statement should have ; at end
 */

let f1 = function(){
    // body
};  // require semicolon

function f2(){
    // no require semicolon
}


// Callback Functions
// passing functions in another function

function mul(a,b){
    return a*b;
}
function sub(a,b){
    return a-b;
}
function div(a,b){
    return a/b;
}

function calc(n1, n2, callback){
    if(typeof callback === 'function'){
        return callback(n1, n2)
    }
    else{
        return "Enter a valid function"
    }
}

console.log("CallBack Functions");
console.log(calc(10,20, add));
console.log(calc(10,20, sub));
console.log(calc(10,20, mul));
console.log(calc(10,20, div));
console.log(calc(10,20, "add"));