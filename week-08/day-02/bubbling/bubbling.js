'use strict';

/* Here is an image inspector, but the buttons are not implemented yet, that will
be your task!
 - the nav buttons (up, down, left, right) move the background by 10px
 - the zoom buttons increase/decrease the image by 20%
 - attach only two event listeners to the nav element
   - one for navigation
   - one for zooming */

window.onload = () => {
  const getButtons = document.querySelector('nav');
  const imgSelector = document.querySelector('.img-inspector');
  let moveYNumber = 0;
  let moveXNumber = 0;
  let zoomPercent = 200;

  getButtons.addEventListener('click', (event) => {
    const eventDirection = event.target.dataset.direction;
    const eventAction = event.target.dataset.action;
    if (eventDirection === "up" && eventAction == "move") {
      moveYNumber -= 10;
      imgSelector.style.backgroundPositionY = `${moveYNumber}px`;
    }
    else if (eventDirection === "down" && eventAction == "move") {
      moveYNumber += 10;
      imgSelector.style.backgroundPositionY = `${moveYNumber}px`;
    }
    else if (eventDirection === "left" && eventAction == "move") {
      moveXNumber -= 10;
      imgSelector.style.backgroundPositionX = `${moveXNumber}px`;
    }
    else if (eventDirection === "right" && eventAction == "move") {
      moveXNumber += 10;
      imgSelector.style.backgroundPositionX = `${moveXNumber}px`;
    }
    else if (eventDirection === "in" && eventAction == "zoom") {
      zoomPercent += 20;
      imgSelector.style.backgroundSize = `${zoomPercent}%`;
    }
    else if (eventDirection === "out" && eventAction == "zoom") {
      zoomPercent -= 20;
      imgSelector.style.backgroundSize = `${zoomPercent}%`;
    }
  }, false);

}