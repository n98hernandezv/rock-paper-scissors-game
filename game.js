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

let humanScore = 0; 
let computerScore = 0; 

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice().toLowerCase();

        const result = document.querySelector("#result");
        const score = document.querySelector("#score");
        const finalScore = document.querySelector("#finalScore");

        if (humanChoice === "rock" && computerChoice === "paper") {
            result.textContent = "You lose! Paper beats Rock";
            ++computerScore;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            result.textContent = "You win! Rock beats Scissors";
            ++humanScore;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            result.textContent = "You win! Paper beats Rock";
            ++humanScore;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            result.textContent = "You lose! Scissors beats Paper";
            ++computerScore;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            result.textContent = "You lose! Rock beats Scissors";
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            result.textContent = "You win! Scissors beats Paper";
            ++humanScore;
        }
        else {
            result.textContent = "It's a draw!";
        }

        score.textContent = "Human: " + humanScore + " - Computer: " + computerScore;

        if (humanScore == 5 || computerScore == 5){
            buttons.forEach((button) => button.disabled = true);

            if (humanScore == 5) {
                finalScore.textContent = "Human is the winner!"
            }
            else if (computerScore == 5) {
                finalScore.textContent = "Computer is the winner!"
            }
        }
    });
});