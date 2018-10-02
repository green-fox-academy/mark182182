'use strict';
window.onload = () => {

  const jokeSite = `http://api.icndb.com/jokes/random`;

  const readAPI = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  };

  document.querySelector('#joke-button').addEventListener('click', () => {
    readAPI(jokeSite).then((response) => {
      const newJoke = document.createElement('p');
      document.querySelector('#joke-holder').appendChild(newJoke);
      newJoke.innerHTML = JSON.parse(response).value.joke;
    }).catch((error) => {
      newJoke.innerHTML = error;
    });
  }, false);
}