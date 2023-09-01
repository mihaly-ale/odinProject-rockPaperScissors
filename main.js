function getComputerChoice() {

    let array = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3);

    return array[index];
}
const computerSelection = getComputerChoice();


let playerSelection = prompt("Which do you choose: Rock, Paper, Scissors?", 0)



console.log(`player selection: ${playerSelection}`);
console.log(`computer selection: ${computerSelection}`);

function playRound() {

    if (playerSelection === computerSelection) {
        console.log("It's a draw")
    }

    else if (playerSelection === "rock" || playerSelection === "Rock" || playerSelection === "ROCK") {
        if (computerSelection === "scissors") {
            console.log("You won! Rock beats scissors.")
        } else {
            console.log("You lost! Paper beats rock.")
        }
    } else if (playerSelection === "paper" || playerSelection === "Paper" || playerSelection === "PAPER") {
        if (computerSelection === "scissors") {
            console.log("You lost! Scissors beat paper")
        } else {
            console.log("You won! Paper beats rock.")
        }
    } else if (playerSelection === "scissors" || playerSelection === "Scissors" || playerSelection === "SCISSORS") {
        if (computerSelection == "rock") {
            console.log("You lost! Rock beats scissors.")
        } else {
            console.log("You won! Scissors beat paper")
        }
    }

}

function game(num) {
    for (let i = 1; i < num; num++) {
            playRound();
    }
    
};

game(5);