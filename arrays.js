/* `Arrays
 * collection of data */

var myArray = [1, 2, 3, "Bread", "Soup", true];
console.log(myArray);

// Arrays are indexed. The first item starts with index zero.
// Their length can be determined by the .length method.
console.log("Length of array = " + myArray.length);

// length is always 1 greater than highest index
var myNamesArray = new Array();
myNamesArray[0] = "Jason";
myNamesArray[1] = "Booki";
myNamesArray[2] = "Nelly";
console.log(myNamesArray, myNamesArray.length);

// even if there is a discontinuity in index numbers
// e.g. myNamesArray[50] = "Jack";
// console.log(myArray.length);
// would give 51

// unintilialized indexes are of type undefined
console.log(typeof myNamesArray[3]);

// Literal notation - preferred way to define an array
var myNamesArray = ["Christine", "Andrew", "Tanya", "Steve"];
console.log(myNamesArray);

// Append entry onto end of array (.push method)
myNamesArray.push("Indira");
console.log(myNamesArray);

// Remove item off end of array (.pop method)
myNamesArray.pop();
console.log(myNamesArray);

// can put popped item into its own variable
lastPerson = myNamesArray.pop();
console.log(lastPerson);

// can push multiple items onto end of array
myNamesArray.push("Winona", "Keith", "Sandra");
console.log(myNamesArray);

// push an array into another array
myArray.push(["Chicken", "Spinach", "Potatoes"]);
console.log(myArray);
// the new pushed array has an index of [6]
console.log(myArray[6]);

//print one element of the nested array - e.g. Spinach
console.log(myArray[6][1]);

// Other array methods
// .sort() - sorts array into alphabetical order
var sortedArray = myArray.sort();
console.log(sortedArray);

//. reverse() - sorts into reverse order
var reverseArray = myArray.reverse();
console.log(reverseArray);

// .concat() - concatenates arrays together
var dinner = ["Trout", "Tomato Pasta", "Green Cabbage", "Chickpeas"];
var drinks = ["Mineral Water", "White Wine", "Apple Juice", "Cappucino"];
var foodDrink = dinner.concat(drinks);
console.log(foodDrink);

// .slice() - takes a slice of an array by indexing method
// example slices array from indexes 1 to 5
// i.g 2nd to 5th entries
vegan = foodDrink.slice(1, 5);
console.log(vegan);

// .join() - converts array into a string, joined by separator of your choice
// this one converts array to list separated by underscores
joined = foodDrink.join("_");
console.log(foodDrink);

// Arrays can also include objects, Taking the last object as an example:

function TeaConstructor(type, milk, sugars, eatIn) {
    this.type = type;
    this.milk = milk;
    this.sugars = sugars;
    this.eatIn = eatIn;
    this.sayType = function () {console.log("Type: " + this.type);};
    this.showSugars = function() {console.log("Number of sugars: " + this.sugars);};
 
}

var chai = new TeaConstructor("Spicy Chai", true, 3, true);

var earlGrey = new TeaConstructor("Earl Grey", false, 1, false);

var englishBreakfast = new TeaConstructor("English Breakfast", true, 0, true);
var myTeas = [chai, earlGrey, englishBreakfast];

// to grab last item without affecting original array
// find length of array
// index is length - 1

teaLength = myTeas.length;

lastTea = myTeas[teaLength-1];
console.log(lastTea);

// Objects with the defined functions can be used in the array
lastTea.sayType();

lastTea.showSugars();

// another example
var slicedArray = myNamesArray.slice(myNamesArray.length -1);
console.log(slicedArray);
console.log(myNamesArray);
