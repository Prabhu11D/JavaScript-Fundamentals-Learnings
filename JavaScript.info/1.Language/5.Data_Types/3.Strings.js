/**
 * 
 * Internal string format UTF-16
 * 
 */

// -------------------- Quotes
let name = 'Prabhu';
console.log(name);
name = "Ammu";
console.log(name);
name = 
`   A m m u
   P r a b h u`;
console.log(name);
/**
 *  name = "
 *         "
 *  error
 */


// ------------------ Special Characters
let str1 = "Hello\nWorld";
let str2 = `Hello
World`;
console.log(str1 === str2);
console.log('\'');
console.log('\\n');
console.log('\\');
console.log('\x7A'); // utf 8
console.log('\u1000'); // utf 16
console.log('\u{000010}'); // utf 32
console.log('\u{1F60D}');

// -------------------- String Length
console.log('M\n\\'.length);
console.log('\u{1F60D}'.length); // ???

// -------------------- Accessing Characters
name = "Ammu";
console.log(name[2]);
console.log(name.charAt(2));
console.log(name[10]);
console.log(name.charAt(10));

for(let char of name){
    console.log(char);
}

// -------------------- Strings are immutable
name[0] = 'a'; // can't change
name = 'ammu';
console.log(name);

// ------------------- Changing the case
console.log(name.toUpperCase());
console.log(name[0].toUpperCase());

// -------------------- Searching for a substring
let str = 'Widget with id';
console.log(str.indexOf('Wi'));
console.log(str.indexOf('id', 2));

str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

str = "Ammu Kutty";
console.log(str.lastIndexOf('t', 4));

console.log(str.includes('Ammu'));
console.log(str.startsWith('A'));
console.log(str.endsWith('tty'));
console.log(str.startsWith('ammu'));

        // ------ bitwise NOT trick
console.log(~10);
// -------------------- Getting a substring

str = "Ammu Prabhu";
console.log(str.slice(0,7));
console.log(str.slice(2));
console.log(str.slice(-5, -1));

console.log(str.substring(1,4));
console.log(str.substring(4,1));
// -------------------- Comparing strings

// -------------------- Internals, Unicode
