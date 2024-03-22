// Race Day

let raceNumber = Math.floor(Math.random() * 1000);
let adultRunnerRegisterearly = false;
let runnersAge = 20;
if (adultRunnerRegisterearly && runnersAge){
  raceNumber += 1000;
}
if (runnersAge >18 && adultRunnerRegisterearly){
  console.log(`Your race time is 9:30am and your race number is ${raceNumber}`)
}else if (runnersAge>18 && !adultRunnerRegisterearly){
  console.log(`Your race time is 11:00am and your race number is ${raceNumber}`)
}else if (runnersAge < 18){
  console.log(`You are our youth member your race time is 12:30pm and your race number is ${raceNumber}`)
}else{
  console.log("Vist registration desk for more details")
}