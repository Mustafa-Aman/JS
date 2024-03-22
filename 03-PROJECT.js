// MY SECOND PROJECT OF JAVASCRIPT 

// CONVERTING HUMAN AGE INTO HORSE YEARS//

// here we have a var which has store number of my age
let myAge="20";
// here we have a var which store the value 2 which will change after words 
var earlyYears=2;
earlyYears *= 10.5;
console.log(earlyYears);
// here we have sub the 2 from myAge and store the answer into a new var that is gona change afterwords
var laterYears = myAge -= 2;
console.log(laterYears);
// here we have multi 4 with the laterYear 
laterYears *= 4;
console.log(laterYears);
// here we have added the values to get the Horse years age
let myAgeInHorseYears = earlyYears += laterYears;
console.log(myAgeInHorseYears);
// HERE WE HAVE TURN THE CAPTITAL LETTERS INTO LOWER CASE 
let myName= "MUSTAFA AMAN ";
console.log(myName.toLowerCase());
// HERE WE HAVE GATHER ALL THE CODE SUMMARY
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInHorseYears} years old in horse years.`)
    

