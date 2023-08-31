const computerSelection = function getComputerChoice () {

    let array = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3);

    return array[index];
}

console.log(computerSelection());


let playerSelection = function getPlayerChoice () {
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
        
console.log(playerSelection());
