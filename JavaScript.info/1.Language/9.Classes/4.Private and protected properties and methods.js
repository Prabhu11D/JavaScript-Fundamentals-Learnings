/**
 * 
 *   Ref:
 *       https://gist.github.com/prof3ssorSt3v3/83fb4270f6ac6d39f53dfb9be6e5f6da
 * 
 * 
 */

// ====================== Real life example
// coffee machine, car, machine, . . . 

// =======================  Internal and External interface
/**
 *  internal interface - private - accessible from other methods of the class
 *  external interface - public - accessible from anywhere
 * 
 *  there is no protected method in javascript
 * 
 */

// =======================  Protecting "waterAmount"

class CoffeeMachine {
  _waterAmount = 0;
  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
  }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 10;

// - - - - _variables
class A{
    _num = 10;
    get num(){
        return num
    }
    set num(value){
        console.log("Can't set value");
    }
}

let a = new A();
console.log(a);
a.num = 100;
console.log(a);

// =======================  Read-only "power"

class CoffeeMc{
    constructor(power){
        this._power = power;
    }
    get power(){
        return this._power;
    }
}

let cofmc = new CoffeeMc(100);
console.log(cofmc.power);

// =======================  Private "#waterLimit"

class CoffeeMachine1 {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine1();

machine.waterAmount = 101;
console.log(machine.waterAmount);