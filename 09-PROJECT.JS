// Grammar Checker  
let story = "Last weekend , i took literally the most beautifull bike rude of my life. The rote is called 'The 9W to Nyack' and it stretches all the way from Piverside Park in Manthattan to South Nyach , New jersey , Its really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though , because I had a freaking long way to go . After a quick photo op at the very popular Little Red Lighthoise I began my trek across the Gerge Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by thr time I got to the other side . An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very suprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.";

let storyWords= story.split(' ');
let unnecssaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// console.log(storyWords);
let count = 0;
storyWords.forEach((word)=>{
    count++;
});
console.log(count);

storyWords= storyWords.filter((word)=>{
    return word != unnecssaryWord;
});

storyWords = storyWords.map((word)=>{
    return word === misspelledWord ? 'beautiful': word ;
})

let badWordIndex = storyWords.findIndex((word)=>{
    return word === badWord;
});
console.log(badWordIndex);
storyWords[82]="really";

let lenghtCheck = storyWords.every((word)=>{
    return word.length < 10 ;
})
console.log(lenghtCheck);

storyWords.forEach((word)=> {
    word.length > 10 && console.log(word);
});


console.log(storyWords.join(' '));

