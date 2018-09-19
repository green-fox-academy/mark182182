window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/books`, true);

  http.onload = () => {
    if (http.status === 200) {
      const context = JSON.parse(http.response);
      const getBookContainer = document.querySelector('.list-container');
      const queryElements = ['book_name', 'aut_name', 'cate_descrip', 'pub_name', 'book_price'];

      for (let index = 0; index < context.length; index++) {
        let newRow = document.createElement('tr');
        newRow.classList.add(`newRow${index}`);
        getBookContainer.appendChild(newRow);
      }

      for (let index = 0; index < queryElements.length; index++) {
        generateTableElements(queryElements[index], context);
      }
    }
  }
  http.send();

  function generateTableElements(element, context) {
    for (let index = 0; index < context.length; index++) {
      const selectRow = document.querySelector(`.newRow${index}`);
      let newElement = document.createElement('td');
      newElement.classList.add(element + index);
      selectRow.appendChild(newElement);
      if (element === 'book_name') {
        newElement.innerHTML = context[index].book_name;
      }
      else if (element === 'aut_name') {
        newElement.innerHTML = context[index].aut_name;
      }
      else if (element === 'cate_descrip') {
        newElement.innerHTML = context[index].cate_descrip;
      }
      else if (element === 'pub_name') {
        newElement.innerHTML = context[index].pub_name;
      }
      else if (element === 'book_price') {
        newElement.innerHTML = context[index].book_price;
      }
    }
  }
};