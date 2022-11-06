/**
 * 
 * 
 */

// ===================== [[ Prototype]]

let animal = {
    leg: 4,
    run: true,
    walk : function(){

    }
}

let elephant = {}
elephant.__proto__ = animal;
console.log(elephant.leg);
console.log(elephant.__proto__)

// =========================  writing doesn't use prototype

let rabbit = {
    __proto__ : animal
};

rabbit.walk = function(){
    console.log("Rabbit is Walking");
}

rabbit.walk();
console.log(rabbit.__proto__)

let user = {
    name : 'Prabhu',
    get getName(){
        return this.name
    },
    /**
     * @param {string} x
     */
    set setName(x){
        this.name = x;
    }
}

let admin = {
    __proto__ : user,
    root : true
}

console.log(user.getName);
console.log(admin.getName);

admin.setName = "Ammu";
console.log(user.getName);
console.log(admin.getName);

// ======================== The Value of 'this'

let animal1 = {
    isSleeping : false,
    walk : function(){
        if(!this.isSleeping){
            return "It is walking"
        }else{
            return "It is sleeping"
        }
    },
    set sleeping(value){
        this.isSleeping = value;
    }
}

let mouse = {
    __proto__ : animal1
}


mouse.sleeping = true;
console.log(mouse.isSleeping);
console.log(animal1.isSleeping);
console.log("Walking ", mouse.walk());

// ========================== for .. in

console.log(Object.keys(mouse));

for(let prop in mouse){
    console.log(prop);
}

// console.log(mouse.hasOwnProperty(isSleeping));
