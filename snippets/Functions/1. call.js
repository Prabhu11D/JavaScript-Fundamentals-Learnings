function sayHi(){
    console.log(`${this} : ${this.name}`);
}

let prabhu = { name : "Prabhu 🤑 "};
sayHi.call(prabhu);