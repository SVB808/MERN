//Numbers

//An integer is a whole number.

const myNumber = 42;

console.log(myNumber);

//A number with a decimal point is a float, which references the floating point

const myFloat = 42.32;

console.log(myFloat);

const myString = "42.36813";

console.log(myFloat === myNumber);
console.log(myNumber === myString);

//Concatenates 5 to the string
console.log(myString+5);
//Change the string datatype to number
console.log(Number(myString)+5);
//You cannot convert a string to a number when the string is of a format that cannot be converted to a number
//for example

console.log(Number("Hello")); //NaN is returned by Number()
//We can convert a boolean to a number 
console.log("Number(true) = "+Number(true));
console.log("Number(false) = "+Number(false))

//Number methods
//Number.isInteger() method determines if the passed value is an integer or not

console.log(Number.isInteger(myNumber)); //returns true or false

//Number.parseFloat() mehtod parses the argument and returns a floating point number.
//If a number cannot be parsed from the argument, it returns NaN

console.log(Number.parseFloat(myString));
const myString2 = "4389dehbbcsv!12@.539";
console.log(Number.parseFloat(myString2));

//toFixed() method formats a number according to how many decimal points we provide as the parameter
//returns string data not float
console.log(Number.parseFloat(myString).toFixed(2));

//Number.parseInt() method parses a string argument and returns an integer

console.log(Number.parseInt(myFloat));