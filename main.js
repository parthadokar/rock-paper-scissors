// Query Selector
const body = document.querySelector('body');
const rock = document.querySelector('rock');
const paper = document.querySelector('paper');
const scissors = document.querySelector('scissors');
const playerScoreBoard = document.querySelector('#playerScore');
const computerScoreBoard = document.querySelector('#computerScore');
const result = document.querySelector('result')
const reset = document.querySelector('.reset');

// Initialize Score
let playerScore = 0;
let computerScore = 0;


const computerChoices = ["rock","paper","scissors"]
function computerPlay(){
    const item = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return item;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore += 1;
        console.log(`You win ${playerSelection} beats ${computerSelection} and your score is ${playerScore} 
        you need more ${5-playerScore} to win the game`);
    }
    if (playerScore == 5) {
        console.log("You win the game,To restart reload the page");
    }
    else if (computerSelection === playerSelection) {
        console.log(`It\'s a tie,You selected ${playerSelection} and your score is ${playerScore} and
        Computer selected ${computerSelection} and it\'s score is ${computerScore}`);
    }
    else {
        if((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
            computerScore += 1;
            console.log(`Computer wins ${computerSelection} beats ${playerSelection} and computer score is ${computerScore}
            and it needs more ${5-computerScore} to win the game`);
        }
        if(computerScore == 5){
            console.log("Computer wins, Reload the page to start the game");
        }
    }
  }

//   function game(){
//     let playerThrow;
//     let count = 0;
//     while(count < 5) {
//         playerThrow = prompt("Enter rock or paper or scissors");
//         playerThrow = playerThrow.toLowerCase();
//         computerThrow = computerPlay();  

//         console.log(playRound(playerThrow,computerThrow));
//         console.log("\n");
//         count ++;
//     }    
//   }

//   console.log(game());