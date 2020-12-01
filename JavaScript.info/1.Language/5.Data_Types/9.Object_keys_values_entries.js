/**
 * 
 *   keys(), values(), entries() are generic method
 * 
 */

let user = {
    name: "Prabhu",
    age: 21
}

console.log(Object.keys(user));

for(let value of Object.values(user)){
    console.log(value);
}

// =====================   Transforming Objects

let prices = {
    banana: 5,
    apple: 50,
    orange: 20
};
let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value])=>[key, value*2])
);
console.log(doublePrices);