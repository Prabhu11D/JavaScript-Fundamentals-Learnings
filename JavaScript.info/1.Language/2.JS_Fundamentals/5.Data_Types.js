/**
 * JavaScript is dynamically typed language
 * 
 *  
 */

/**
 * 
 *          N U M B E R S
    working with number in JS is super
    because it will never show fatal err

    limits  => -(2^53-1) to (2^53-1)
 *
 */       

console.log(1/0);
//console.log(Infinity);

console.log("Hello"/1);


/**
 *              B I G I N T 
 * 
 *  adding n to last
 *  ref - https://javascript.info/bigint
 * 
 */

const big_int = 498759575873457983475948759473597439556546565464798347587234857345n;
console.log(big_int);


/**
 *          S T R I N G
 * 
 *    three types of quotes
 *      
 * 
 */

const name = "Prabhu";
const passion = 'programming';
const about = `${name} have ${passion} passion ...`;

console.log(name);
console.log(passion);
console.log(about);


/**
 *      B O O L E A N
 * 
 *      true or false
 */

let x = true;
let i = 0;
while(x == true){
    console.log(i);

    if(i>11){
        x = false;
    }
    i++;
}


/**
        N U L L 

 */

let n = null;
console.log(n);

/**
 * 
 *         U N D E F I N E D
 * 
 */

let undef;
console.log(undef);


/**
 * 
 *  O B J E C T S    A N D    S Y M B O L S
 * 
 * primitive only store either string or number
 * 
 * but object store complex entities
 * ref => https://javascript.info/object
 */


/**
 *          T Y P E O F
 * 
 */

console.log(typeof name);
console.log(typeof undef);
console.log(typeof big_int);