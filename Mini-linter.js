// project constraints
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// define a new array to store outputs
let storyWords = [];

// define a function called wordCount that uses ' ' as a delimiter and the array.split method to store each word in it's own index in an array
let wordCount = function(str) {
    return str.split(' ');
}

// log the word count of the story string to the console after converting to an array and using .length method
let numberOfWords = wordCount(story).length;
console.log(`There are ${numberOfWords} words in this paragraph.`)

// reassign the value of storyWords to the array output of running the wordCount function with the story string passed in
storyWords = (wordCount(story));
// console.log(storyWords);


// define an array called betterWords to store the output of using .filter to remove the unnecessaryWords within storyWords
let betterWords = storyWords.filter((unnecessaryWord) => {
    return !unnecessaryWords.find((x) =>{
        return unnecessaryWord === x
    });
});
// console.log(betterWords);


// STEP 4:
// There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words.
let really = 0;
let very = 0;
let basically = 0;
betterWords.forEach(word => {
    if (word === overusedWords[0])
        really++
    else if (word === overusedWords[1])
        very++
    else if (word === overusedWords[2])
        basically++
});
console.log(`You've used the world 'really' ${really} times, 'very' ${very} times, and 'basically' ${basically} time.`)


// STEP 5:
// Now, count how many sentences are in the paragraph.
let sentenceCounter = 0;
let numberOfSentences = betterWords.forEach(element => {
    if (element.includes('.' || '!'))
        sentenceCounter++
    });
console.log(`There are ${sentenceCounter} sentences in this paragraph.`)

// STEP 6:
// Log betterWords as a string
console.log(betterWords.join(' '));



// If you're reading this, don't. 
