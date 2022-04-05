'use strict';

// Array that will let the computerPLay function choose an option
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
  console.log(playerSelection, computerSelection);

  // Var for playerSelection and turned lower case
  const choicePlayer = playerSelection.toLowerCase();

  // console.log(choicePlayer);

  // Checks if it's a tie
  if (choicePlayer === computerSelection) {
    console.log('Its a tie!');
  } else if (choicePlayer === 'scissors' && computerSelection === 'rock') {
    console.log(`You lose, ${computerSelection} beats ${choicePlayer}`);
  } else if (choicePlayer === 'scissors' && computerSelection === 'paper') {
    console.log(`You win, ${choicePlayer} beats ${computerSelection}`);
  } else if (choicePlayer === 'rock' && computerSelection === 'scissors') {
    console.log(`You win, ${choicePlayer} beats ${computerSelection}`);
  } else if (choicePlayer === 'rock' && computerSelection === 'paper') {
    console.log(`You lose, ${computerSelection} beats ${choicePlayer}`);
  } else if (choicePlayer === 'paper' && computerSelection === 'rock') {
    console.log(`You win, ${choicePlayer} beats ${computerSelection}`);
  } else if (choicePlayer === 'paper' && computerSelection === 'scissors') {
    console.log(`You lose, ${computerSelection} beats ${choicePlayer}`);
  }
}

// playRound('RoCk', computerPlay());
// playRound('Paper', computerPlay());
playRound('Scissors', computerPlay());

//  When do you win?
//  scissors > paper;
//  paper > rock;
//  rock > paper;

//  if player has rock and comp has paper: comp wins,
//  if player and comp the same then its a tie,
//  if player has scissors and comp has rock: comp wins,
//  if player has scissors and comp has paper: player wins,
//  if player has rock and comp has scissors: player wins.
//  if player has paper and comp has rock: player wins,
//  if player has paper and comp scissors: comp wins
