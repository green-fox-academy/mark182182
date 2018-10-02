'use strict';
window.onload = () => {
  const newText = document.createElement('p');
  document.querySelector('body').appendChild(newText);
  const host = `https://uinames.com/api/`;

  const myAsyncAjax = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  };

  myAsyncAjax(host).then((response) => {
    newText.innerHTML = JSON.parse(response).name;
  }).catch((error) => {
    newText.innerHTML = error;
  });
}