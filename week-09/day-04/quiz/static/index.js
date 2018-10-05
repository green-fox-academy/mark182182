'use strict';

window.onload = () => {

  const score = localStorage.getItem('score');

  if (score === undefined) {
    localStorage.setItem('score', 0);
  }
  else {
    localStorage.setItem('score', parseInt(score) + 1);
  }

  const reloadCount = localStorage.getItem('reload');

  if (reloadCount === undefined) {
    localStorage.setItem('reload', 0);
  }
  else {
    localStorage.setItem('reload', parseInt(reloadCount) + 1);
  }

  if (localStorage.getItem('reload') === 5) {
    localStorage.setItem('reload', 0);
    localStorage.setItem('score', 0);
  }

  console.log(reloadCount);


  const h2 = document.querySelector('h2').innerHTML = 'SCORE: ' + score;

  const host = 'http://localhost:5000',
    http = new XMLHttpRequest;

  http.open('GET', `${host}/game`, true);

  http.onload = () => {
    const context = JSON.parse(http.response);
    for (let index = 0; index < context.answers.length; index++) {
      const getAnswer = document.querySelector(`#ans${index + 1}`);
      getAnswer.classList.add(`state-${context.answers[index][3]}`);
      getAnswer.innerHTML = context.answers[index][2];
    }
    const h3 = document.querySelector('h3').innerHTML = context.answers[0][5];
    console.log(context.answers[0]);

    const getWrongAnswers = document.querySelectorAll('.state-0');
    for (let index = 0; index < getWrongAnswers.length; index++) {
      getWrongAnswers[index].addEventListener('click', () => {
        getWrongAnswers[index].style.backgroundColor = 'tomato';
      }, false);
    }

    const getRightAnswer = document.querySelector('.state-1');
    getRightAnswer.addEventListener('click', () => {
      getRightAnswer.style.backgroundColor = 'green';
    }, false);
  };
  http.send();
}