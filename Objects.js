/* Objects
consist of name:value pairs
equivalent to Python Dictionaries
or hash tables in C/C++
denoted by curly brackets {} */

var myName = {1: "Jason"};
console.log(myName);

//define empty object
var myObject = new Object();

//other way to do it
var myOtherObject = {};

// to add a single entry without overwriting other entries in the object
myObject['1'] = "Booki Boo";
console.log(myObject);

myObject["2"] = "Janey";
myObject["3"] = "Bill";
console.log(myObject);
// good way of entering more than one entry at a time: 
myOtherObject = {
    1: "London",
    2: "Paris",
    3: "Berlin",
    4: "Rome",
    5: "Madrid",
    6: "Amsterdam",}
// leave a trailing comment at the end of the object list
// so you don't forget if you need to add another entry.
console.log(myOtherObject);   

// This creates another entry, but overwrites others
console.log("Original object file:");
console.log(myObject);
console.log("New object file:");
myObject = {4: "Markie"};

console.log(myObject);
// objects can have unique key values, not only ordered numbers
// can mix and match data types
//e.g. patient details
var patientDetails = {
    name: "Jim",
    surname: "Jackson",
    age: 35,
    heightM: 1.79,
    weightKg: 89,
    dayCase: true,
}
// 2 equivalent ways of accessing particular data from object
// 1st way using period '.'
console.log(patientDetails.heightM);
// 2nd way using square brackets
console.log(patientDetails['age']);

// nested objects
// one object in another
// for example adding both home and mobile numbers in above object
var patientDetails = {
    name: "Jim",
    surname: "Jackson",
    age: 35,
    heightM: 1.79,
    weightKg: 89,
    dayCase: true,
    numbers: {
        home: "01234-567890",
        mobile: "07890-123456",
    },
    address: "123 Acacia Avenue, Hazelton",
}
// how to access nested objects
console.log(patientDetails.numbers);
console.log(patientDetails.numbers.home);
console.log(patientDetails.numbers["mobile"]);
console.log(patientDetails['surname']);

// each key value can be made into another variable
var userMobileNumber = patientDetails.numbers.mobile;
console.log("\n" + userMobileNumber);

// how to declare a simple function
function sayHi() {
    console.log("Hi");
}

sayHi();

// how to nest a function declaration in an object

var tea = {
    type: "assam",
    milk: true,
    sugars: 1,
    eatIn: false,
    greet: function() {
        console.log("Greetings " + patientDetails.name + " " + patientDetails.surname);
    },
}
// invoke function
console.log(tea.greet());
// also you can do for equivalent effect:
// tea.greet();
// this is how you can contain functions, so they are not global

// add another function to tea object
// 'this' refers to this object (tea)
tea["sayType"] = function () {console.log("Type: " + this.type);}

tea.sayType();

tea["showSugars"] = function() {console.log("Number of sugars: " + this.sugars);}

tea.showSugars();


// constructor pattern to create objects
function TeaConstructor(type, milk, sugars, eatIn) {
    this.type = type;
    this.milk = milk;
    this.sugars = sugars;
    this.eatIn = eatIn;
    this.sayType = function () {console.log("Type: " + this.type);};
    this.showSugars = function() {console.log("Number of sugars: " + this.sugars);};
 
}

var chai = new TeaConstructor("Spicy Chai", true, 3, true);
console.log(chai);
chai.sayType();
chai.showSugars();

var earlGrey = new TeaConstructor("Earl Grey", false, 1, false);
console.log(earlGrey);
earlGrey.sayType();
earlGrey.showSugars();
chai.delicious = true;
console.log(chai);

var englishBreakfast = new TeaConstructor("English Breakfast", true, 0, true);
console.log(englishBreakfast);
englishBreakfast.sayType();
englishBreakfast.showSugars();
