/**
 * 
 * 
 */

// ------------------ Getter and Setter

let user = {
    firstname : 'Prabhu',
    lastname: 'Krishna',
    get fullname(){
        return this.firstname + ' ' + this.lastname
    },
    set fullname(value){
        [this.firstname, this.lastname] = value.split(' ');
    }
};

console.log(user.fullname);
user.fullname = 'Ammu Prabhu';
console.log(user.fullname);

// --------------------- Accessor Properties
let admin = {
    firstname: 'John',
    lastname: 'Jebadurai',
    root: true
};

console.log(admin);

Object.defineProperty(admin, 'fullname', {
    get(){
        return `${this.firstname} ${this.lastname}`;
    },
    set(value){
        [this.firstname, this.lastname] = value.split(' ');
    }
});

console.log(admin.fullname);
console.log(admin);


// ------------------- Smarter setter and getter
