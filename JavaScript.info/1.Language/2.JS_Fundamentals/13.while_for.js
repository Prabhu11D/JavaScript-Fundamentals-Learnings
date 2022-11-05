/**
 * 
 *      L O O P
 * 
 *   : A single execution of the loop body is called an iteration.
 */

// while loop

let i = 5;
while (i) {
  console.log(i);
  i--;
}


// do while
let j = 5;
do {
  console.log(j);
  j--;
} while (j)


// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let k = 0;
for (; k < 10;) {
  console.log(k);
  k += 2;
}


// Break the loop
i = 0;
for (; ;) {
  console.log("I ", i);
  if (i > 10) break
  i++;
}


// continue (directive)
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue
  console.log("I%2 ", i);
}

// Labels for Break/Continue
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i : ${i}, j : ${j}`);

    if (i == 2 && j == 0) break outer
  }
}