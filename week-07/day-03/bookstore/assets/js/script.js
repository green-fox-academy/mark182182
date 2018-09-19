window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/books`, true);

  http.onload = () => {
    if (http.status === 200) {
      const context = JSON.parse(http.response);
      const getBookContainer = document.querySelector('.list-container');

      for (let index = 0; index < context.length; index++) {
        let newRow = document.createElement('tr');
        newRow.classList.add(`newRow${index}`);
        getBookContainer.appendChild(newRow);
        const selectRow = document.querySelector(`.newRow${index}`)
        let newBook = document.createElement('td');
        selectRow.appendChild(newBook);
        newBook.innerHTML = context[index].book_name;
        newBook.classList.add('book' + index);
        let newAuthor = document.createElement('td');
        selectRow.appendChild(newAuthor);
        newAuthor.innerHTML = context[index].aut_name;
        newAuthor.classList.add('author' + index);
        let newCategory = document.createElement('td');
        selectRow.appendChild(newCategory);
        newCategory.innerHTML = context[index].cate_descrip;
        newCategory.classList.add('categ' + index);
        let newPublisher = document.createElement('td');
        selectRow.appendChild(newPublisher);
        newPublisher.innerHTML = context[index].pub_name;
        newPublisher.classList.add('publ' + index);
        let newPrice = document.createElement('td');
        selectRow.appendChild(newPrice);
        newPrice.innerHTML = context[index].book_price;
        newPrice.classList.add('price' + index);
      }
    }
  };
  http.send();
}