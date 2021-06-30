'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // NaN
  if (!guess) {
    document.querySelector('.message').textContent = '❌ Not a Number';
    // Correct
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#c759ff';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').style.color = '#60b346';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // High
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔺 Too High..';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost :(';
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#abadaa';
      document.querySelector('.message').style.color = '#ff0000';
    }
    // Low
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 Too Low..';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost :(';
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#abadaa';
      document.querySelector('.message').style.color = '#ff0000';
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  score = 10;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.color = '#333';
});
