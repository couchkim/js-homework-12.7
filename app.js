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

    let amount = 200




    console.log("#5 Finding Palindromes");

    


