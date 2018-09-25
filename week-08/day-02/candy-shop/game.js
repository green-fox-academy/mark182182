'use strict';

window.onload = () => {
  const getPeppers = document.querySelector('.peppers');
  const addPeppers = document.querySelector('.create-peppers');
  const getHotpeppers = document.querySelector('.hotpeppers');
  const addHotpeppers = document.querySelector('.buy-hotpeppers');
  const getSpeed = document.querySelector('.speed');
  const pepperMachine = document.querySelector('.pepper-machine');

  let numberOfPeppers = 1000;
  getPeppers.innerHTML = numberOfPeppers;
  let numberOfHotpeppers = 3;
  let pepperSpeed = 0;
  getSpeed.innerHTML = ~~(numberOfHotpeppers / 10);

  addPeppers.addEventListener('click', () => { getPeppers.innerHTML = numberOfPeppers++ }, false);
  addHotpeppers.addEventListener('click', () => {
    if (getPeppers.innerHTML >= 100) {
      numberOfHotpeppers++;
      numberOfPeppers += -100;
      getHotpeppers.innerHTML += '🌶';
      getPeppers.innerHTML = numberOfPeppers;
    }
    if (numberOfHotpeppers >= 10 && numberOfHotpeppers % 10 === 0) {
      pepperSpeed++;
    }
  }, false);

  pepperMachine.addEventListener('click', () => {
    pepperSpeed *= 10;
  }, false);


  setInterval(() => {
    numberOfPeppers += pepperSpeed;
    getPeppers.innerHTML = numberOfPeppers;
  }, 1000);
}