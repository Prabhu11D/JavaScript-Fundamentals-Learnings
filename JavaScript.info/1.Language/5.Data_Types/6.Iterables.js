/***
 * 
 * 
 * 
 */

// ======================   Symbol.iterator   ===========================

let range = {
    from : 1,
    to : 10
}

range[Symbol.iterator] = function(){
    return{
        current: this.from,
        last : this.to,

        next(){
            if(this.current <= this.last){
                return { done : false, value: this.current++}
            }else{
                return {done: true};
            }
        }
    }
}

for(let i of range){
    console.log(i);
}

// ------------ inside the object
let iter = {
    from : 100,
    to: 108,
    [Symbol.iterator](){
        this.current = this.from;
        return this
    },
    next(){
        if(this.current <= this.to){
            return {done: false, value: this.current++}
        }else{
            return {done: true}
        }
    }
}

for (let i of iter){
    console.log(i);
}


// ======================   String is iterabe    ===========================
let emoji = '👍🧑⚡🧑‍🚀🎨';
for(let e of emoji){
    console.log(e);
}

// ======================   Calling an iterator explicitly  ================
let name = "PRABHU";

let iterName = name[Symbol.iterator]();

while(true){
    let result = iterName.next();
    if(result.done) break;
    console.log(result.value);
}

// ======================    Iterables and array-likes   ================
let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// Error (no Symbol.iterator)
//for (let item of arrayLike) {}

// ======================    Array.from
let emojiArray = Array.from(emoji);
console.log(emojiArray);

let rangeArray = Array.from(range, num => num*num);
console.log(rangeArray);