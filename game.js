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

function playGame() {
    let humanScore = 0; 
    let computerScore = 0; 

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    function playRound() {
        let computerChoice = getComputerChoice().toLowerCase();
        let humanChoice = getHumanChoice().toLowerCase();

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            ++computerScore;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            ++humanScore;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            ++computerScore;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            ++humanScore;
        }
        else {
            console.log("It's a draw!");
        }
    }

    console.log("Human: " + humanScore + " - Computer: " + computerScore);

    if (humanScore == computerScore){
        return "It's a draw!";
    }
    else if (humanScore <= computerScore) {
        return "Computer is the winner!";
    }
    else {
        return "Human is the winner!";
    }
}

console.log(playGame());