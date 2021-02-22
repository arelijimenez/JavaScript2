//Usage: Use nested conditional statements
//In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, 
//operators, math, and more to create a “coin flip game”. 
//

let randomNum = Math.random();
console.log (randomNum);
let coinFlip = randomNum;
var choice = prompt("Hello, select heads or tails ");
if (randomNum <= 0.5) {
    coinFlip = "heads";
}
else {
    coinFlip = "tails";
}

if (coinFlip === "heads") {
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!"); 
    }
    else if (choice === "tails") {
        alert("The flip was heads and you chose tails...you lose!");
    }
}
else if (coinFlip === "tails") {
    if (choice === "heads") {
        alert("The flip was tails and you chose heads...you lose!");
    }
    else if (choice === "tails") {
        alert("The flip was tails and you chose tails...you win!");
    }
}

