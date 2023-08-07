/** 
 * Declare constants for DOM elements
 * and possible choices 
*/

const buttons = document.getElementsByClassName('control');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const message = document.getElementById('message');
const choices  = ['rock', 'paper', 'scissers'];

/**
 * Add event listener to all the button
 */

for (let button of buttons) {
    console.log(button, 'button')
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-choice');
        playerGame(playerChoice);
    });
}

/**
 * The mane game function. Accept one parameter whicj
 * is the data choice value of the selected button
 */

function playerGame(playerChoice) {

    playerImage.src = `images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
    
    let computerChoice = Math.floor(Math.random() * 3);
    
    computerImage.src = `images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

/**
 * Checks to see who the winner is, it accepts two atrings as
 */

function checkWinner(computerChoice, playerChoice) {

    // Tie! same choise result - don't update the score
    if(computerChoice == playerChoice) {
        message.innerText = 'Tie!';
        return [0, 0];
    }

    if(computerChoice == 'rock'){
        //player wins
        if(playerChoice == 'paper') {
            message.innerText = 'Player Wins!';
            return [1,0];
        } else {
            //computer wins!
            message.innerText = 'Computer Wins!';
            return [0, 1];
        } 
    } 

    if(computerChoice == 'paper') {
        // player wins!
        if(playerChoice == 'scissers') {
            message.innerText = 'player wins!';
            return [1, 0];
        } else {
            //computer wins
            message.innerText = 'computer wins!';
            return [0, 1];
        }
    }

    if(computerChoice == 'scissers') {
        //player wins
        if(playerChoice == 'rock'){
            message.innerText = 'player wins';
            return [1, 0];
        } else {
            //computer wins
            message.innerText = 'computer wins';
            return [0, 1];
        }
    }   
}

function updateScores(result) {
    playerScore.innerText = parseInt(playerScore.innerText) + result[0];
    computerScore.innerText = parseInt(computerScore.innerText) + result[1]; 
}