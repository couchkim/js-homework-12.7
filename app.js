console.log("#1:  Tallest Mountain");

let height = [15000, 12400, 9200, 24300, 18700];
let tallest = 0;

for (let i = 0; i < height.length; i++) {
    if (height[i] > tallest) {
        tallest = height[i];
    }
}

console.log(tallest);






console.log("#2: Hangman Lite");

let word = "Vietnamese";
let letter = "z";
let frequency = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
        frequency = frequency + 1;
    }
}
if (frequency > 0) {
    console.log("Yeah, the letter " + letter + " exists " + frequency + " times in my word.");
} else {
    console.log("Nope.  The letter " + letter + " doesn't exist in my word.");
}






console.log("#3 Cherokee Hare");

let startingPopulation = 30;
let birthRate = 0.2;
let numberOfWeeks = 7;

for (let i = 0; i < numberOfWeeks; i++) {
    startingPopulation = startingPopulation * (1 + birthRate);
}

console.log("There will be " + startingPopulation + " Cherokee Hares after " + numberOfWeeks + " weeks.");






console.log("#4 Change Machine");

//From a given dollar amount, determine how to make change using the fewest number of bills.
// First, determine how many 20s.
// With the remainder, determine how many 10s.
// With the remainder, determine how many  5s.
// With the remainder, determine how many 1s - which is the same as the remainder after the 5s.
// Display an array that shows how many of each were given.

let amount = 299;
let change = [0, 0, 0, 0];

if (amount>20){
    change[0]= ((amount/20)-((amount%20)/20));
    amount=amount % 20;
} else{
    change[0]=0;
}

if (amount>10){
    change[1]= ((amount/10)-((amount%10)/10));
    amount=amount % 10;
} else{
    change[1]=0;
}

if (amount>5){
    change[2]= ((amount/5)-((amount%5)/5));
    amount=amount % 5;
} else{
    change[2]=0;
}

change[3]=amount;

console.log(change);










console.log("#5 Finding Palindromes");

let newWord = "bubble";
let palindrome = true;

for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] !== newWord[newWord.length - i - 1]) {
        palindrome = false;        
    }
}
console.log(palindrome);

// Assume it's true unless you find a condition that makes it false'


