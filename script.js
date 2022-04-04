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
  }
}

// playRound('RoCk', computerPlay());
playRound('Paper', computerPlay());
playRound('Scissors', computerPlay());
