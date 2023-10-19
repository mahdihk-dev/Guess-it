'use strict';

// // how we can select an element using its class or its id in JS :
// // document.querySelector('#message')
// // console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = '12';
// document.querySelector('.message').textContent = '19';

// // + we use value methode to get the input data or change it
// document.querySelector('.guess').value = '14';
// console.log(document.querySelector('.guess').value)

// ------------------------------------------------
// Event Listener (event is whatever that happens in our page like mouse click , mouse moving or pressing key ...)
// ++ first argument in addEventListener specifies its event (one of the events like click or ...)
// ++ second argument in addEventListener specifies what to do (like a function or ...)

// math random methode will give us a random number between zero and one
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number!';
    // instead of above way we can do a function refactor :
    displayMessage('🚫 No Number!');
  }

  // when the guess is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');


    // how to change style of elements using DOM(we only change their inline[html attribute] style not css styles and css file)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when the guess is wrong (getting our code refactor and shorter)
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage("💥 You lost the game!")
      document.querySelector('.score').textContent = 0;
    }
  }

  // when the guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // // when the guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
// a click event handler (addEventListener)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
});
