'use strict';

window.onload = () => {

  let score = localStorage.getItem('score');

  if (score === undefined) {
    localStorage.setItem('score', 0);
  }
  else {
    localStorage.setItem('score', parseInt(score) + 1);
  }

  let h2 = document.querySelector('h2').innerHTML = 'Score ' + score;


  const host = 'http://localhost:5000',
    http = new XMLHttpRequest;

  http.open('GET', `${host}/game`, true);

  http.onload = () => {
    const context = JSON.parse(http.response);
    for (let index = 0; index < context.answers.length; index++) {
      let getAnswer = document.querySelector(`#ans${index + 1}`);
      getAnswer.innerHTML = context.answers[index][2];
    }
    console.log(context.answers[0]);
  };

  http.send();
}