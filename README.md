# rock-paper-scissors-game

BEGIN Rock, paper, scissors game

Function getComputerChoice
    RETURN one of the strings: 'rock', 'paper', 'scissors' with Math.random

Function getHumanChoice
    INPUT humanChoice
    RETURN humanChoice

INIT humanScore=0
INIT computerScore=0

Function playRound: humanChoice, computerChoice
    humanChoice to Lower Case
    computerChoice to Lower Case

    IF humanChoice = rock AND computerChoice = paper
        PRINT You lose! Paper beats Rock
    ELSE IF humanChoice = rock AND computerChoice = scissors
        PRINT You win! Rock beats Scissors
    ELSE IF humanChoice = paper AND computerChoice = rock
        PRINT You win! Paper beats Rock
    ELSE IF humanChoice = paper AND computerChoice = scissors
        PRINT You lose! Paper beats Rock
    ELSE IF humanChoice = scissors AND computerChoice = rock
        PRINT You lose! Rock beats Scissors
    ELSE IF humanChoice = scissors AND computerChoice = paper
        PRINT You win! Scissors beats Paper
    ELSE
        PRINT It's a Draw!

INIT humanSelection = getHumanChoice()
INIT computerSelection = getComputerChoice()
    
Call: playRound(humanSelection, computerSelection)
    