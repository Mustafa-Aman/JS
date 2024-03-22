// THIS IS THE LAST TOPIC OF OBJECTS
// BUILD IN Object

console.log(Math.random())
console.log(Math.random()*50)
console.log(Math.floor(Math.random()* 50))

// we put ceil when we need a equal or greater value of the Integer
console.log(Math.ceil(48.3))

// to check the type of the number 
condole.log(Number.isInteger(2017))


// STARTING OF A NEW TOPIC VARIABLES
// var is one of the type in which you can store your input 
var numOfSlices = 8;
console.log(numOfSlices)

var favriteFood = "Pizza";
console.log(favriteFood)

// we a now have the variable of let 
let footBall = "Good Qulity"
console.log(footBall);

let footBat;
console.log(footBat); ///this will run and show "undefined"///

let footaat = "zero"
console.log(footaat);
footaat="more then zero"
console.log(footaat)

// NOW WE WILL USE THE THIERD METHOD OF VARIABLES WHICH IS CONST
const hairBall = "infinity"
console.log(hairBall);

// if we assine a value to cons after ward it will throught an error 
 hairBall = "not infinity"
 

//  Mathematical Assignment Operators
// add these turns by += and can perform mathop 
// +*/- 


// String Concatenation with Variables\\
let favoriteAnimal = "Cubs"
console.log('My favorite animal:' + favoriteAnimal);



// NOW WE HAVE STARTED A NEW TOPIC CONDITIONAL STATMENT 

// FIRST IS IF STATMENT 

let saleE = false ;
if (saleE){
  console.log("Time to buy!")
}

// SECOND IS if...ELSE STATMENT 

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else{ 
  console.log('Time to wait for a sale.');
}

// THIRD IS COMPARISON OPRATERS 

let hungerLevel = 7
if (hungerLevel>=7){
  console.log("Time to eat!")
} else {
  console.log("We can eat later!")
}

// FORTH IS LOGICAL OPRATERS 

let mood = 'sleepy';
let tirednessLevel = 6;
if (tirednessLevel > 8 && mood === "sleepy"){
  console.log("time to sleep")
} else {
  console.log("not bed time yet")
}

// A NEW TOPIC 

// Truthy and Falsy

let wordCount = 20;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil= tool || "pen"

console.log(`The ${writingUtensil} is mightier than the sword.`);


// Ternary Operator
// HERE WE HAVE SWITECHED THE if...ELSE STATMENTS IN TERNARY OP OR SHORT-HAND FORMIT
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favorite_Phrase = 'Love That!';

favorite_Phrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


// Else If Statements

let season = 'summer';    

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
}else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')

} else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}else {
  console.log('Invalid season.');
}


// The switch keyword

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log("You get the gold medal!");
    break;
  case 'second place':
    console.log("You get the silver medal!")
    break;
  case 'third place':
    console.log("You get the bronze medal!")
    break;
default:console.log("No medal awarded.")
  break;    
}

// Function Declarations

function getReminder(){
  console.log("Water the plants.")
}
function greetInSpanish(){
  console.log("Buenas tardes")
}

getReminder();


// Parameters and Arguments
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks("Cole");

// defult parameters
function makeShoppingList(item1="milk", item2="bread", item3="eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList(); 

// Function Expressions
const plantNeedsWater = function (day){
  if (day === "Wednesday"){
  return true;
  }else {
    return false;
  }
}
plantNeedsWater("Tuesday");
console.log(plantNeedsWater("Tuesday"));


// Concise Body Arrow Functions
// turn this to concise body arrow function 
// const plantNeedsWater = (day)=>{
//   day=== "Wednesday"? true:false;
// }
// the lowwer statment is the concise body arrow function 
// const plantNeedsWater = day =>day === 'Wednesday' ? true : false;  


// Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
let callMyNightSky=()=>{
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

// BLOCK SCOPE 
function logVisibleLightWaves(){
  const lightWaves = 'Moonlight'
  console.log(lightWaves);
}
logVisibleLightWaves();
// IF WE RUN THE CONSOLE IT WILL SHOW US THE ERROE AS THIS IS A BLOCK SCOPE IT WILL ONLY WORK INSIDE THE FUNCTION 
console.log(lightWaves);

// Practice Good Scoping 
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region==='The Arctic'){
    let lightWaves = 'Northern Lights'
    console.log(lightWaves);
  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();

// OKAY NOW I WAS LEARNING ARRAYS AS I HAVE A WISE KNOWLEDGE OF ARRAYS I AN GONA WRITE FEW OF THEM 

// More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');

// console.log(groceryList.slice(1,4));

const pastaIndex =groceryList.indexOf('pasta')

console.log(pastaIndex)


// Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);
function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);


// for loop traning

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i = 0 ; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}


// NESTED LOOP

// Write your code below
let bobsFollowers = ['Taha','Saim','Counter','Formit'];
let tinasFollowers =['Counter','Down','Taha'];
let mutualFollowers = [];
for(let i = 0 ; i < bobsFollowers.length ; i++){
  for(let j = 0; j < tinasFollowers.length ; j++){
    if(bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

// while loop and do...whileloop
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;
do{
  cupsAdded++;
  console.log(cupsAdded + "cups are added");
}while (cupsAdded < cupsOfSugarNeeded);

// THE break KEYWORD 
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i <= rapperArray.length; i++) {
    console.log( rapperArray[i]);
    if (rapperArray[i] === "Notorious B.I.G." ){
      break;
    }
}
console.log("And if you don't know, now you know");

// HIGHER-ORDER FUNCTION 
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2 ;
  let checkB = func(val);
  if (checkA === checkB){
    return func(val)
  }else{
    console.log('inconsistent result');
  }
}

console.log(checkConsistentOutput(addTwo,54));

// The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)


// The .findIndex() Method

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal=animals.findIndex(animals=>{
  return animals === 'elephant' ;
});

const startsWithS = animals.findIndex(animals =>{
  return animals[0] === 's' ? true : false ;
});


// The .reduce() Method
const newNumbers = [1, 3, 5, 7];

const newSum= newNumbers.reduce((accumulator,currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue ;
},10)
console.log(newSum);



// Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
console.log(words.some(word => {
  return word .length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) =>{
  return word.length > 5
});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
  return word.length > 5
} ));


// .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
// .map() executes the same code on every element in an array and returns a new array with the updated elements.
// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
// .findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
// .reduce() iterates through an array and takes the values of the elements and returns a single value.
// All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

// Bracket Notation
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship[propName];
console.log(spaceship[propName]);

// Property Assignment
let spaceShip = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceShip.color ='glorious gold'
spaceShip.numEngines = 4;
delete spaceShip['Secret Mission'];

console.log(spaceShip)

// Nested Objects
let spaceShip = {
  passengers:[{name: "space cat"},{degree: "meawn"}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0]

let firstPassenger = spaceship.passengers[0];

console.log(spaceship);