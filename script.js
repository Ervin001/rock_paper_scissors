'use strict';

const buttons = document.querySelectorAll('button');
const resultEl = document.querySelector('.results');
const playerScoreEl = document.querySelector('.score--player');
const compScoreEl = document.querySelector('.score--comp');

// Array that will let the computerPlay function choose an option
const typesArr = ['rock', 'paper', 'scissors'];
const scores = [0, 0];
let playerScore = 0;
let compScore = 0;

// Function that determines what the computer will output
const computerPlay = function () {
  // variable that randomly will pick from the three choices in the array
  let value = Math.floor(Math.random() * 3);
  // console.log(value);

  return typesArr[value];
};

//
function playRound(playerSelection, computerSelection) {
  // console.log(playerSelection, computerSelection);

  // Var for playerSelection and turned lower case
  const choicePlayer = playerSelection.toLowerCase();

  // Checks if it's a tie
  if (choicePlayer === computerSelection) {
    return 'Its a tie!';
  } else if (choicePlayer === 'scissors' && computerSelection === 'rock') {
    compScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (choicePlayer === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (choicePlayer === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (choicePlayer === 'rock' && computerSelection === 'paper') {
    compScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (choicePlayer === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (choicePlayer === 'paper' && computerSelection === 'scissors') {
    compScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  }
}

// console.log(playRound('rock', computerPlay()));
if (playerScore === 0 || compScore === 0) {
  buttons.forEach((btn) =>
    btn.addEventListener('click', function (e) {
      resultEl.textContent = '';

      resultEl.textContent = playRound(e.target.textContent, computerPlay());
      scores[0] = playerScore;

      playerScoreEl.textContent = scores[0];

      scores[1] = compScore;

      compScoreEl.textContent = scores[1];
      // console.log(scores);
    })
  );
}
