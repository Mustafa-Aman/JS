// WHALE TALK 
let input = 'turpentine and turtles'
const vowels = ['a','e','i','o','u'];
let resultArray = [];
for (let i = 0 ; i < input.length ; i++){
    // console.log(i);
    if (input[i] === 'e'){
        resultArray.push(input[i]);
    }
    if (input[i] === 'u'){
        resultArray.push(input[i]);
    }
    for (let j = 0 ; j < vowels.length ; j++){
        // console.log(j)
        if(input[i]===vowels[j]){
            // console.log(input[i]);
            resultArray.push(input[i]);
        }
    }
    // resultArray.push(input[i]);
}
console.log(resultArray);