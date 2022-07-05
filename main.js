// // Query Selector
// const body = document.querySelector('body');
// const rockBtn = document.querySelector('rock');
// const paperBtn = document.querySelector('paper');
// const scissorsBtn = document.querySelector('scissors');
// const playerScoreBoard = document.querySelector('#playerScore');
// const computerScoreBoard = document.querySelector('#computerScore');
// const result = document.querySelector('result')
// const reset = document.querySelector('.reset');

// // Initialize Score
// let playerScore = 0;
// let computerScore = 0;


// const computerChoices = ["rock","paper","scissors"]
// function computerPlay(){
//     const item = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//     return item;
// }

// function playRound(playerSelection, computerSelection) {
//     if ((playerSelection == "rock" && computerSelection == "scissors") ||
//     (playerSelection == "paper" && computerSelection == "rock") ||
//     (playerSelection == "scissors" && computerSelection == "paper")) {
//         playerScore += 1;
//         console.log(`You win ${playerSelection} beats ${computerSelection} and your score is ${playerScore} 
//         you need more ${5-playerScore} to win the game`);
//     }
//     if (playerScore == 5) {
//         console.log("You win the game,To restart reload the page");
//     }
//     else if (computerSelection === playerSelection) {
//         console.log(`It\'s a tie,You selected ${playerSelection} and your score is ${playerScore} and
//         Computer selected ${computerSelection} and it\'s score is ${computerScore}`);
//     }
//     else {
//         if((computerSelection == "rock" && playerSelection == "scissors") ||
//         (computerSelection == "paper" && playerSelection == "rock") ||
//         (computerSelection == "scissors" && playerSelection == "paper")) {
//             computerScore += 1;
//             result.innerHTML(`Computer wins ${computerSelection} beats ${playerSelection} and computer score is ${computerScore}
//             and it needs more ${5-computerScore} to win the game`);
//         }
//         if(computerScore == 5){
//             alert("Computer wins, Reload the page to start the game");
//         }
//     }
//   }


// app.js
 
// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 
    // Function to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
         
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                // Function to check who wins
                winner(this.innerText,computerChoice)
                 
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('#playerScore');
        const computerScoreBoard = document.querySelector('#computerScore');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
 
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reset');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
     
}
 
// Calling the game function
game();