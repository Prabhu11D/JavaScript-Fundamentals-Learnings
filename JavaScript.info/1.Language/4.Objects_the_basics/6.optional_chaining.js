/**
 *  The optional chaining ?. is a safe way to access 
 *  nested object properties, even if an intermediate 
 *  property doesn’t exist.
 * 
 */

let user = {
    name : "Prabhu",
    address : {
        doorNo : 172,
        street : {
            1: "VOC Main Road",
            2 : "Thillai Nagar"
        },
        city : "Coimbatore"
    }
}
console.log(user.address ? user.address.street : undefined);
console.log(user?.address?.street);

let dummy = {
  sayHi(){
    console.log("SayHI");
  }
};

dummy.sayHi?.();
dummy.sayBye?.();