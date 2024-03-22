// Rock, Paper, or Scissors 

const getUserChoice= Input =>{
    userInput= Input.toLowerCase();
    
      if (userInput === 'rock'){
        return userInput; 
      }else if (userInput === 'paper'){
        return userInput;
      }else if (userInput === 'scissors'){
        return userInput;
      }else if (userInput === 'bomb'){
        return userInput;
      }else {
        console.log("Enter a valid character");
      }
    }
    let getComputerChoice=()=>{
      let randNum=Math.floor(Math.random()*3)
      if (randNum===0){
        return 'rock';
      }else if (randNum===1){
        return 'paper';
      }else if (randNum===2){
        return 'scissors';
      }else{
        console.log("Enter a valid character")
      }
    }
    let determineWinner =(userChoice,computerChoice)=>{
      if(userChoice===computerChoice){
        console.log("The game is tie");
        return;
        }
    
      if(userChoice==='rock'){
        if(computerChoice==='paper'||computerChoice==='scissors'){
          console.log("Computer has WON !")
        }else{
          console.log("User have WON !")
        }
      }
    
      if(userChoice==='paper'){
        if(computerChoice==='scissors'||computerChoice==='rock'){
          console.log("user has WON ! ");
        }else{
          console.log("Computer has WON !");
        }
      }
      if(userChoice==='scissors'){
        if(computerChoice==='paper'){
          console.log("User have WON !")
        }else{
          console.log("Computer have WON !")
        }
      }
      if(userChoice==='bomb'){
        if(computerChoice==='paper'||computerChoice==='rock'||computerChoice==='scissors'){
          console.log("User have WON !")
      }else{
        console.log("Computer have Won!")
      }
    }
    let playGame=()=>{
      let userChoice=getUserChoice('')
      console.log(userChoice)
      let computerChoice=getComputerChoice()
      console.log(computerChoice)
      determineWinner(userChoice,computerChoice)
    }
    let story=playGame(); 
    }
    