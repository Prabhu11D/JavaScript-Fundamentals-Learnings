/**
 * 
 *      Factory Pattern comes under "Creational Pattern"
 *      
 *  it creates the object for us in centralized way, we don't worry about new cases
 *  it keeps your code concise
 * 
 */

function Developer(name){
    this.name = name;
    this.type = "Developer";
}
function Tester(name){
    this.name = name;
    this.type = "Tester";
}
function CustomerSupport(name){
    this.name = name;
    this.type = "Customer Support";
}

function EmployeeFactory(){
    this.create = (name, type) => {
        switch(type){
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
            case 3:
                return new CustomerSupport(name);
        }
    }
}
function say(){
    return `Hi I'm ${this.name}, and I'm working as ${this.type}`;
}

const employee = new EmployeeFactory();
const database = [];

database.push(employee.create("Prabhu", 1));
database.push(employee.create("John", 1));
database.push(employee.create("Deva", 2));
database.push(employee.create("Jeevitha", 3));
database.push(employee.create("Chandrika", 3));

console.log(database);


// without EmployeeFactory
// database.push(new Developer("Prabhu"));
// database.push(new CustomerSupport("Dinesh"));