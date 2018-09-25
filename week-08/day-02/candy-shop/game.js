'use strict';

window.onload = () => {
  let numberOfPeppers = 1;
  const getPeppers = document.querySelector('.peppers');
  const addPeppers = document.querySelector('.create-peppers');
  addPeppers.addEventListener('click', () => { getPeppers.innerHTML = numberOfPeppers++ }, false);
  console.log(numberOfPeppers);
}