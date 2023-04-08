function getComputerChoice() {
    let hand = " ";
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1){
        hand = "rock";
    } else if (random === 2) {
        hand = "paper";
    } else {
        hand = "scissors";
    }
    return hand;
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    let result = " ";

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "You Tied! Computer chose rock";
        } else if (computerSelection === "paper") {
            result = "You Lose! Computer chose paper";
        } else {
            result = "You Win! Computer chose scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You Win! Computer chose rock";
        } else if (computerSelection === "paper") {
            result = "You Tied! Computer chose paper";
        } else {
            result = "You Lose! Computer chose scissors";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You Lose! Computer chose rock";
        } else if (computerSelection === "paper") {
            result = "You Win! Computer chose paper";
        } else {
            result = "You Tied! Computer chose scissors";
        }
    } else {
        result = "Invalid input";
    }
    return result;
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;

    let result = playRound(prompt("Enter rock, paper or scissors").toLowerCase(), getComputerChoice());
    console.log(result);
    if (result === "You Win! Scissors beats paper" || result === "You Win! Paper beats rock" || result === "You Win! Rock beats scissors") {
        playerScore++;
    } else if (result === "You Lose! Paper beats rock" || result === "You Lose! Scissors beats paper" || result === "You Lose! Rock beats scissors") {
        computerScore++;
    } else {
        tie++;
    }
    
    console.log("Current score is: %d:%d tied %d times", playerScore, computerScore, tie);
    if (playerScore < computerScore) {
        console.log("You lost!");
    } else if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You tied!");
    }

}

const bod = document.querySelector('body');

const btnRock = document.createElement('button');
btnRock.classList.add('rock');
btnRock.textContent = "Rock";

const btnPaper = document.createElement('button');
btnPaper.classList.add('paper');
btnPaper.textContent = "Paper";

const btnScissors = document.createElement('button');
btnScissors.classList.add('scissors');
btnScissors.textContent = "Scissors";

bod.appendChild(btnRock);
bod.appendChild(btnPaper);
bod.appendChild(btnScissors);

btnRock.addEventListener('click', () => {
    console.log(playRound("rock", getComputerChoice()));
});
btnPaper.addEventListener('click', () => {
    console.log(playRound("paper", getComputerChoice()));
});
btnScissors.addEventListener('click', () => {
    console.log(playRound("scissors", getComputerChoice()));
});