// let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     homePlanet : 'Earth'
//   };

// let greenEnergy= obj =>{
//     obj['Fuel Type']='avocado'
// }

// let spaceship = {
//   crew: {
//   captain: { 
//       name: 'Lily', 
//       degree: 'Computer Engineering', 
//       cheerTeam() { console.log('You got this!') } 
//       },
//   'chief officer': { 
//       name: 'Dan', 
//       degree: 'Aerospace Engineering', 
//       agree() { console.log('I agree, captain!') } 
//       },
//   medic: { 
//       name: 'Clementine', 
//       degree: 'Physics', 
//       announce() { console.log(`Jets on!`) } },
//   translator: {
//       name: 'Shauna', 
//       degree: 'Conservation Science', 
//       powerFuel() { console.log('The tank is full!') } 
//       }
//   }
// }; 

// // Write your code below
// for (let crewMember in spaceship.crew) {
// console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }
// for (let crewMember in spaceship.crew) {
// console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
// }

// let activity = 'Surfing';
// const beach =activity + ' alone' ;
// console.log(beach);
// console.log(activity);

// const cat = {
//   name: 'Pipey',
//   age: 8,
//   whatName() {
//     return cat.name  
//   }
// };

// console.log(cat.whatName());

// ////
// const goat = {
//   dietType: 'herbivore',
//   makeSound() {
//     console.log('baaa');
//   },
//   diet() {
//     console.log(goat.dietType['gulabi']);
//   }
// };
// goat.diet(); 



// // Getter 
// const person = {
//   _firstName: 'John',
//   _lastName: 'Doe',
//   get fullName() {
//     if (this._firstName && this._lastName){
//       return `${this._firstName} ${this._lastName}`;
//     } else {
//       return 'Missing a first name or a last name.';
//     }
//   }
// }

// person.fullName;


// Setters
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    }else {
      console.log("Pass in a number that is greater than or equal to 0")
    }
  }
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors);

// it confuses me 