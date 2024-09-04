'use strict';

const holdButton = document.querySelector('.btn--hold');
const rollDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const player1Current = document.getElementById('current--0');
const player2Current = document.getElementById('current--1');
const player1Total = document.getElementById('score--0');
const player2Total = document.getElementById('score--1');

let playerTurn = 0;

rollDiceButton.addEventListener('click', function () {
  let diceValue = Math.round(Math.random() * 5 + 1);
  diceImage.src = `dice-${diceValue}.png`;

  if (playerTurn === 0 && diceValue === 1) {
    playerTurn = 1;
    player1Current.textContent = 0;
  } else if (playerTurn === 1 && diceValue === 1) {
    playerTurn = 0;
    player2Current.textContent = 0;
  }

  if (playerTurn === 0) {
    player1Current.textContent = Number(player1Current.textContent) + diceValue;
  } else {
    player2Current.textContent = Number(player2Current.textContent) + diceValue;
  }
});

holdButton.addEventListener('click', function () {
  if (playerTurn === 0) {
    player1Total.textContent =
      Number(player1Total.textContent) + Number(player1Current.textContent);
  } else {
    player2Total.textContent =
      Number(player2Total.textContent) + Number(player2Current.textContent);
  }
  player1Current.textContent = Number(0);
  player2Current.textContent = Number(0);

  if (playerTurn === 1) {
    playerTurn = 0;
  } else {
    playerTurn = 1;
  }
});

newGameButton.addEventListener('click', function () {
  player1Total.textContent = Number(0);
  player2Total.textContent = Number(0);
  player1Current.textContent = Number(0);
  player2Current.textContent = Number(0);
});
