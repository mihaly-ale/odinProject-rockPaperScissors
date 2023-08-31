function getComputerChoice () {

    let array = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3);

    return array[index];
}
const computerSelection = getComputerChoice();

console.log(`computer selection: ${computerSelection}`);


function getPlayerChoice () {
    let input = prompt("Which do you choose: Rock, Paper, Scissors?", 0)
    
    switch (input) {
        case "rock":
        case "Rock":
        case "ROCK":
            return ("Player selected rock!");
            break;
        case "paper":
        case "Paper":
        case "PAPER":
            return ("Player selected paper!");
            break;
        case "scissors":
        case "Scissors":
        case "SCISSORS":
            return ("Player selected scissors!");
            break;
        default:
                alert("Check your input!");
                break;        
    }
}  

const playerSelection = getPlayerChoice();
        
console.log(`player selection: ${playerSelection}`);



function playRound(playerSelection, computerSelection) {

    console.log(playerSelection)
    
    if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You won! Rock beats scissors.")
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lost! Paper beats rock.")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You won! Paper beats rock.")
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lost! Scissors beat paper")
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lost! Rock beats scissors")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You won! Scissors beat paper.")
    }
}

playRound();