/**
 * 
 * for..of and for..in and forEach uses Iterators under the hood
 * 
 * 
 * Array -> Iterators <- [ for..of
 *                    ->          ]
 * 
 * Generators are syntactic sugar for Iterators
 * 
 */

const log = console.log;

const dragons = [
  "cool dragons",
  "angry dragons",
  "nasty dragons"
];

const iter = dragons[Symbol.iterator]();
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())

log("--------FOR..OF-------------")
for (const dragon of dragons) {
  console.log(dragon);
}


const randomInteger = (len) => {
  return Math.ceil(Math.random() * len) - 1;
}

const randonItem = (array) => {
  return array[randomInteger(array.length)]
}

const makeDragons = () => {
  const dragonSizes = ['tiny', 'medium', 'big'];
  const dragonAbilities = ['fire', 'ice', 'lightning'];

  return `${randonItem(dragonSizes)} ${randonItem(dragonAbilities)} dragon`;
}

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughArmy = Math.random() > 0.75;
        if (enoughArmy) {
          return { done: true }
        }
        return {
          value: makeDragons(),
          done: false
        }
      }
    }
  }
}

log("-----------ITERATORS----------")
for (const dragon of dragonArmy) log(dragon);

function* someDragon() {
  log("IN GENERATOR FUNCTION");
  while (true) {
    const enoughArmy = Math.random() > 0.75;
    if (enoughArmy) return;
    yield makeDragons();
  }
}

const genIter = someDragon();
log(genIter.next());
log(genIter.next());

const genDragonArmy = {
  [Symbol.iterator]: someDragon
}

log("-----------GENERATORS-----------");
for (const dragon of genDragonArmy) log(dragon);


/**
 * 
 * 
 *  Think Generators are Pausable Functions,
 *  When calling Generators it return the Iterations
 */

function* countDown(number) {
  log("------ COUNTDOWN --------")
  let numberUp = 0;
  while (number) {
    yield { down: number, up: numberUp };
    number--;
    numberUp++;
  }
  // return undefined; // implicit return 
  return "DONE"
}

let cd1 = countDown(5);
log(cd1.next())
log(cd1.next())
log(cd1.next())
log(cd1.next())
log(cd1.next())
log(cd1.next())
log(cd1.next())
log(cd1.next())
log(cd1.next())

for (const { up, down } of countDown(10)) log(down, up)
