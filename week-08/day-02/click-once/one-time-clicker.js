'use strict';

/* Create an event listener which logs the current timestamp to the console once the button is clicked.
When the button is clicked for the second or any other times no event listener should be called.
Try to solve this two different ways.
hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
window.onload = () => {
  const getButton = document.querySelector('button');
  let clickNumber = 0;
  getButton.addEventListener('click', (event) => {
    if (clickNumber < 1) {
      console.log(event.timeStamp);
      clickNumber++;
    }
  }, false);
  getButton.addEventListener('click', (event) => {
    if (clickNumber == 1) {
      getButton.setAttribute('disabled', true);
    }
  }, false);
}