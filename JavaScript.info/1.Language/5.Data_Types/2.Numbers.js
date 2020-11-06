/**
 * 
 * 
 */

// ------------------------- Scientific Notation
let billion = 1.1e9;
console.log(billion);

let milli = 0.1e-3;
console.log(milli);

// ------------------------- bin, oct, dec, hex
let bin = 0b10100010;
let hex = 0xA2;
let oct = 0o242;
let dec = 162;

console.log(bin == dec);
console.log(bin == oct);
console.log(bin == hex);

//  -----------------------  toString
let num = 1234;
console.log(num.toString(2));
console.log(num.toString(7));
console.log(num.toString(16));
console.log(num.toString(36));

console.log(10..toString(2)); // .. for direct num to str

// ---------------- Math Methods

let n1 = 1.2855;
console.log(n1.toFixed(2));
console.log(Math.floor(n1));
console.log(Math.ceil(n1));
console.log(Math.trunc(n1));

let n2 = 0.1 + 0.2;
console.log(n2.toFixed(30));
console.log(n2.toFixed(2));

let large = 9999999999999999;
console.log(large);
let bigInt = 9999999999999999n;
console.log(bigInt);

// -------------------- isFinite and NaN
let nan1 = "NaN";
let nan2 = 123;
let nan3 = '123';

console.log(isNaN(nan1));
console.log(isNaN(nan2));
console.log(isNaN(nan3));

console.log(NaN === NaN);

console.log(isFinite(nan1));
console.log(isFinite(nan2));
console.log(isFinite(nan3));
console.log(isFinite(Infinity));

//------------------------ ParseInt and ParseFloat
console.log(parseInt('12px'));
console.log(parseInt(2.2));
console.log(parseFloat('$12'));

// ------------------------ Other Math functions
console.log(Math.random());
console.log(Math.pow(2,3));
console.log(Math.max(-10,10,1,20,24,18));
console.log(Math.min(-10,10,1,20,24,18));