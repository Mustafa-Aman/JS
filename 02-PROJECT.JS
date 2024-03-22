// MY FIRST PROJECT OF JAVASCRIPT

///Kelvin Weather///

//this is a const varibale//
const kelvin = 55;
// we have sub the value of kelvin from the celsius bucz the value of cels is 273 less then kelv
let celsius = 273;
celsius -= kelvin ;
console.log(celsius);

// N0w we have find the value of fahr by the formula and store it in the varible of var
var fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

// if the value of fahrenheit comes in decimal so it convert the value in flotting number 
console.log(Math.floor(fahrenheit));

console.log(`The tempreature is ${fahrenheit} degrees Fahrenheit.`);

