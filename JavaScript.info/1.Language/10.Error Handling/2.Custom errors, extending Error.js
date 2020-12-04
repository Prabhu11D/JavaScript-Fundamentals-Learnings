/**
 * 
 * 
 */

// =====================  Extended Error ========================
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

function readUser(json){
    let user = JSON.parse(json);

    if(!user.name){
        throw new ValidationError("No Field : Name");
    }
    if(!user.age){
        throw new ValidationError("No Field : Age");
    }
    return user
}

try{
    let user = readUser('{"name":"Prabhu"}');
}
catch(err){
    if(err instanceof ValidationError){
        console.log("Invalid Data : "+err.message);
    }else if(err instanceof SyntaxError){
        console.log("Syntax error : "+err.message);
    }else{
        throw err;
    }
}


// =====================  Further Inheritance =====================

// =====================  Wrapper Exceptions  =====================