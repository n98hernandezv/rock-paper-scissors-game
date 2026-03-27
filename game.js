// Rock, Paper, Scissors game. 

function getComputerChoice() { // Function returns "Rock", "Paper", "Scissors"
    let choice = Math.random();

    if (choice < 0.333){
        return "Rock";
    }
    else if (choice > 0.333 && choice < 0.666){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() { // Function returns user's choice
    return prompt("¿Rock, paper or scissors?");
}