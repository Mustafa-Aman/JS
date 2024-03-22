const random = Math.floor(Math.random()* 3);

const getRandEvent = () => {
    if (random === 0 ){
        return 'Marathon';
    }else if (random === 1){
        return 'Swiming';
    }else if (random === 2){
        return 'Football';
    }
}

const getTrainingDays = event => {
    let days;
    if (event === 'Marathon'){
        days = 50;
    }else if (event === 'swiming'){
        days = 100;
    }else if (event === 'Football'){
        days = 200;
    }
    return days;
}
const name = "Mustafa";

const logEvent = (name,event) => {
    const name = "Mustafa";
    console.log(`${name}'s event is ${event}`);
}

const logTime = (name,days) => {
    
    console.log(`${name} time to train is: ${days} days`);
}

const event = getRandEvent();
const days = getTrainingDays(eventl);

logEvent(name1,eventl);
logTime(name1,days);

