// Booleans
// --------

// is 2 equal to 1?
console.log(2 === 1);

// -> false

// is 3 equal to 10 minus 7?
console.log(3 === (10-7));

// -> true
 
// can store in variables
var isTrue = true;
console.log(isTrue === false);

// -> false
 
if (isTrue === false) {
console.log("This is not true");
}
else
{
console.log("This is true");
}
console.log(typeof(isTrue));

// -> boolean

// Null is NaN
var shouldBeNull = null;

// to check if something has a value
// use the Boolean function
var hasContent = "hgfjgfyj";
var doesNotHaveContent = "";
console.log(Boolean(hasContent));

// -> true
 
// will turn up false: 
var isZero = 0;
var unassignedValue;
var notANumber = NaN;

console.log(Boolean(isZero));
console.log(Boolean(unassignedValue));
console.log(Boolean(doesNotHaveContent));
console.log(Boolean(notANumber));

// -> false
