/**
 * 
 * 
 *      Old method is __proto__
 * 
 *      Three modern ways
 *          1. Object.create(proto, [descriptors])
 *          2. Object.getPrototypeOf(obj)
 *          3. Object.setPrototypeOf(obj, proto) 
 */

let animal = {
    eats : true,
    legs: 4
};

let rabbit = Object.create(animal);
console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit));
Object.setPrototypeOf(rabbit, {});
console.log(Object.getPrototypeOf(rabbit));