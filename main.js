const buttons = document.querySelectorAll('input[id^="btn"]');
const resultMsg = document.getElementById("resultMessage")
const playerScoreField = document.getElementById("playerScoreField")
const computerScoreField = document.getElementById("computerScoreField")
const resetButton = document.getElementById("reset")
let playerScore = 0;
let computerScore = 0;


buttons.forEach(button => button.addEventListener('click', handleClick))
resetButton.addEventListener('click', resetGame);

function handleClick(e) {
    console.log(e.target.dataset.name)
    let playerSelection = e.target.innerHTML
    const computerSelection = getComputerChoice();
    playGame(playerSelection, computerSelection);
    isWinner();
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        resultMsg.textContent = `Computer selected ${computerSelection}.It's a draw.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreField.textContent = playerScore;
        resultMsg.textContent = `You won! ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection}.`
        // console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
    } else {
        computerScore++;
        computerScoreField.textContent = computerScore;
        resultMsg.textContent = `You lost. ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}.`
    }

}

function isWinner() {

    if (playerScore === 5) {
        resultMsg.textContent = "Well done mate!"
        buttons.forEach(button => button.disabled = true)
    } else if (computerScore === 5) {
        resultMsg.textContent = "Better play an easier game? Huh!?"
        buttons.forEach(button => button.disabled = true)
    }

}

function resetGame() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        playerScoreField.innerHTML = playerScore;
        computerScoreField.innerHTML = computerScore;
        buttons.forEach(button => button.disabled = false)

    }
}






