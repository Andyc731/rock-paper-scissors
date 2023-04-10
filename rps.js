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


function game(result){
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;

    if (result === "You Win! Computer chose paper" || result === "You Win! Computer chose rock" || result === "You Win! Computer chose scissors") {
        playerScore++;
    } else if (result === "You Lose! Computer chose paper" || result === "You Lose! Computer chose scissors" || result === "You Lose! Computer chose rock") {
        computerScore++;
    } else {
        tie++;
    }

    return [playerScore, computerScore, tie];
}
    
//     console.log("Current score is: %d:%d tied %d times", playerScore, computerScore, tie);
//     if (playerScore < computerScore) {
//         console.log("You lost!");
//     } else if (playerScore > computerScore) {
//         console.log("You win!");
//     } else {
//         console.log("You tied!");
//     }

// }


const bod = document.querySelector('body');
const result = document.createElement("div");
const gameScore = document.createElement("div");

result.textContent = " ";
gameScore.textContent = " ";

bod.appendChild(gameScore);
bod.appendChild(result);


const btnRock = document.createElement('button');
btnRock.classList.add('rock');
btnRock.textContent = "Rock";

const btnPaper = document.createElement('button');
btnPaper.classList.add('paper');
btnPaper.textContent = "Paper";

const btnScissors = document.createElement('button');
btnScissors.classList.add('scissors');
btnScissors.textContent = "Scissors";

const btn = document.querySelector('button');

bod.appendChild(btnRock);
bod.appendChild(btnPaper);
bod.appendChild(btnScissors);

let playScore = [];
let playerScore = 0;
let computerScore = 0;
let tie = 0;

// game(playRound("rock", getComputerChoice()))[0];

btnRock.addEventListener('click', () => {
    getScore("rock");
});
btnPaper.addEventListener('click', () => {
    getScore("paper");
});
btnScissors.addEventListener('click', () => {
   getScore("scissors");
});

function getScore(hand) {
    const score = playScore.concat(game(playRound(hand, getComputerChoice())));
    playerScore += score[0];
    computerScore += score[1];
    tie += score[2];
    
    gameScore.textContent = `${playerScore}:${computerScore}, ${tie} ties`;
}