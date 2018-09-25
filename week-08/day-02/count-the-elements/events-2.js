'use strict';

/*       On the click of the button,
      Count the items in the list
      And display the result in the result element. */

window.onload = () => {
    const getList = document.querySelector('ul');
    const getButton = document.querySelector('button');
    const getResult = document.querySelector('.result');

    getButton.addEventListener('click', () => {
        getResult.textContent = getList.childElementCount;
    }, false);
}