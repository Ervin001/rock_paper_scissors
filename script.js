'use strict';

// Array that will let the computerPlay function choose an option
const typesArr = ['rock', 'paper', 'scissors'];

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
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (choicePlayer === 'scissors' && computerSelection === 'paper') {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (choicePlayer === 'rock' && computerSelection === 'scissors') {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (choicePlayer === 'rock' && computerSelection === 'paper') {
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (choicePlayer === 'paper' && computerSelection === 'rock') {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (choicePlayer === 'paper' && computerSelection === 'scissors') {
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = 'rock';
