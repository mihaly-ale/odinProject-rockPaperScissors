
let numberOfRounds = 5;

function game(numberOfRounds) {

    for (let i = 1; i <= numberOfRounds; i++) {

        const playerSelection = prompt("Which do you choose: Rock, Paper, Scissors?")
        console.log(`player selection: ${playerSelection}`);

        function getComputerChoice() {
            let choices = ["Rock", "Paper", "Scissors"]
            let index = Math.floor(Math.random() * choices.length);

            return choices[index];
        }
        const computerSelection = getComputerChoice();

        console.log(`computer selection: ${computerSelection}`);

        if (playerSelection === null) {
            console.log("Player cancelled the game.")
        } else if (!playerSelection) {
            console.log("Player input is not appropiate.")
        } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
            console.log("It's a draw" + i);
        } else if (playerSelection === "rock" || playerSelection === "Rock" || playerSelection === "ROCK") {
            if (computerSelection === "Scissors") {
                console.log("You won! Rock beats scissors.");
            } else {
                console.log("You lost! Paper beats rock.");
            }
        } else if (playerSelection === "paper" || playerSelection === "Paper" || playerSelection === "PAPER") {
            if (computerSelection === "Scissors") {
                console.log("You lost! Scissors beat paper");
            } else {
                console.log("You won! Paper beats rock.");
            }
        } else if (playerSelection === "scissors" || playerSelection === "Scissors" || playerSelection === "SCISSORS") {
            if (computerSelection == "Rock") {
                console.log("You lost! Rock beats scissors.");
            } else {
                console.log("You won! Scissors beat paper");
            }
        }  
    }
}


game(numberOfRounds);

