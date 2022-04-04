'use strict';

const typesArr = ['rock', 'paper', 'scissors'];

const computerPlay = function () {
  let value = Math.floor(Math.random() * 3);
  // console.log(value);

  return typesArr[value];
};

function playRound(playerSelection, computerSelection) {
  const player = playerSelection;
  const comp = computerSelection;

  if (player === !comp && player === !) {
    console.log(`${player} and ${comp} are the same`);
  }
}
const playerSelection = 'rock';
const computerSelection = computerPlay();

playRound('rock', computerSelection);
