/**
 *  STATEMENTS
 *      Statements are syntax constructs and commands that perform actions.
 * 
 * 
 */

console.log("Hello");


/**
 *  SEMICOLON
 * 
 *      1. JS work without semicolon in statement, but putting a semicolon is best for
 *         reduce the error
 *      2. Most of the cases line breaks implies semicolon
 *      3. But there are situations where JavaScript “fails” to 
 *         assume a semicolon where it is really needed.
 * 
 * */

alert("It doesn't assume ; before []")
[1,2].forEach(alert);

// How JS Engine Sees as single statement
// alert("It doesn't assume ; before []")[1,2].forEach(alert);


/*
 * 
 * Comments
 *     single line comment //
 *     multiline comment  
 * 
 *      ctrl + / for commenting and uncommenting
 * 
 *    : Nested comments are not supported!
 * 
 */
