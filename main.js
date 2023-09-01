
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
            break;
        } else if (!playerSelection) {
            console.log(`Player input is not appropiate. Round ${i}.`)
        } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
            console.log(`It's a draw. Round ${i}.`);
        } else if (
            (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") ||
            (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
            (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
        ) {
            console.log(`You won! ${playerSelection} beats ${computerSelection}. Round ${i}.`);
        } else {
            console.log(`You lost. ${computerSelection} beats ${playerSelection}. Round ${i}.`)
        }


    }
}


game(numberOfRounds);


alert("Play another game!")
