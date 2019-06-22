*/JavaScript Numbers and Strings
------------------------------
 Types

 Number

JS does not differentiate betwwen floats or ints.

typeof shows type of data (e.g. number or string)
*/
console.log( typeof 10);
// -> number

console.log( typeof "Hello");
// -> string

// random decimal number between 0 and 1
console.log(Math.random());


// print number of pi
console.log(Math.PI);

// -> 3.141592653589793

// pitfall
console.log("10" + 23);

/* -> 1023 - just converts 23 into a string and concatenates

 instead, use parseInt
parse.Int converts string to number */
console.log(parseInt("10") + 23);

// -> 33

/* converts using base 2 (default base 10)
prints as a decimal number */
console.log(parseInt(("10100110"), 2);

// cannot convert non-numerical strings
console.log(parseInt("Guten Tag"));

// -> NaN (not a number)

// check for NaN

console.log(isNaN("Hi!"));

// -> true

console.log(isNaN(31.5));

// -> false

/* simpler way of converting num to string
use unary plus sign */

var x = (+"45.683");
console.log(x);

// -> 45.683

console.log(isNaN(x));

// -> false
 
/* Strings
// sequences of Unicode characters
can use single or double quotes */
console.log("Hello");

// -> "Hello"

// get length of string
// use .length method after string

console.log("Good morning, it's a nice dsy today isn't it?".length);

// -> 45

// get individual letter from string
// e.g. lst letter - use .charAt method
console.log("Jason".charAt(0));

// -> "J"

// Char     J   a   s   o   n
// Index    0   1   2   3   4

console.log("Jason".charAt(2));

 -> "s"

// Concatenate strings
const s1 = "Hello";
const s2 = " World!";
console.log(s1+s2);

// -> "Hello World!"

// convert to upper case
// use .toUpperCase method
console.log((s1+s2).toUpperCase());

// -> HELLO WORLD!

// and to lowercase too
// .toLowerCase
console.log("I LIKE SHOUTING ONLINE BECAUSE I'M A TROLL!".toLowerCase());

// -> i like shouting online because i'm a troll!
