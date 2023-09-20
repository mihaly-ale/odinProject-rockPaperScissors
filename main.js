const buttons = document.querySelectorAll("input[id^='btn']");
const resultMsg = document.getElementById("resultMessage");
const playerScoreField = document.getElementById("playerScoreField");
const computerScoreField = document.getElementById("computerScoreField");
const resetBtn = document.getElementById("reset-button");
let playerScore = 0;
let computerScore = 0;
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-button");

buttons.forEach(button => button.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetGame);
closeBtn.addEventListener("click", closeModal);



function handleClick(e) {
    let playerSelection = e.target.dataset.name;
    const computerSelection = getComputerChoice();
    playGame(playerSelection, computerSelection);
    isWinner();
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
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
    } else {
        computerScore++;
        computerScoreField.textContent = computerScore;
        resultMsg.textContent = `You lost. ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}.`
    }   
}

function isWinner() {

    if (playerScore === 5) {
            if(computerScore === 4 || computerScore === 3) {
                endMessage.textContent = "Almost got ya!";
            } else {
                endMessage.textContent = "Woah! Smooth one.";
            }
        modal.showModal();
        buttons.forEach(button => button.disabled = true); 
    } else if (computerScore === 5) {
        if (playerScore === 4 || playerScore === 3){
            endMessage.textContent = "You can't catch me!";
        } else {
            endMessage.textContent = "Yo dawg! You just got busted.";
        }
        modal.showModal();      
        buttons.forEach(button =>button.disabled = true) ;
    }
}

function resetGame() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        playerScoreField.innerHTML = playerScore;
        computerScoreField.innerHTML = computerScore;
        buttons.forEach(button => button.disabled = false)
        resultMsg.textContent = "";
        modal.close();
    }
}

function closeModal(e) {
    playerScore = 0;
    computerScore = 0;
    playerScoreField.innerHTML = playerScore;
    computerScoreField.innerHTML = computerScore;
    buttons.forEach(button => button.disabled = false)
    resultMsg.textContent = "";
    modal.close();
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.hasAttribute('open')) {
      closeModal();
    }
  });









