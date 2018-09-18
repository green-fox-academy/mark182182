'use strict';

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

window.onload = () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num !== 1 && num !== 0;
  }

  const addClassToPrime = (newDiv, index) => {
    if (isPrime(index)) {
      return newDiv.classList.add('prime');
    }
    else {
      return newDiv.classList.add('not-prime');
    }
  }

  const sectionElem = document.querySelector('section');
  for (let index = 2; index <= 100; index++) {
    const numberElem = document.createElement('div');
    const newDiv = sectionElem.appendChild(numberElem);
    newDiv.setAttribute('id', index);
    newDiv.textContent = index;
  }

  const getDivs = document.querySelectorAll('div');
  let countDivs = 0;

  const startTimer = () => {
    return setInterval(() => {
      addClassToPrime(getDivs[countDivs], getDivs[countDivs].innerHTML);
      countDivs++;
      if (countDivs === 100) {
        clearInterval(startCounting);
      }
    }, 100);
  }

  let startCounting = startTimer();

};