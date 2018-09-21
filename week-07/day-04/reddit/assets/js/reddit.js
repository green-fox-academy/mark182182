window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/posts`, true);

  http.onload = () => {
    if (http.status === 200) {
      const context = JSON.parse(http.response);
      getPosts(context, host);
    }
  }
  http.send();
}

function getPosts(context, host) {
  const getPostsContainer = document.querySelector('.posts-container');
  for (let index = 0; index < context.length; index++) {
    let newDivElement = document.createElement('div');
    getPostsContainer.appendChild(newDivElement);
    let newElement = document.createElement('a');
    newElement.classList.add(`post`);
    newDivElement.classList.add('bg-white', 'text-dark', 'shadow', 'd-block', 'border');
    newDivElement.appendChild(newElement);
    newElement.innerHTML = context[index].title + ' ' + context[index].score;
    newElement.setAttribute('href', context[index].url);
    let modifyElement = document.createElement('a');
    modifyElement.classList.add(`modify${index}`);
    newDivElement.appendChild(modifyElement);
    modifyElement.innerHTML = 'Modify';
    modifyElement.classList.add('d-block');
    let deleteElement = document.createElement('a');
    deleteElement.classList.add(`remove${index}`);
    newDivElement.appendChild(deleteElement);
    deleteElement.innerHTML = 'Remove';
    deleteElement.classList.add('d-inline');
    deleteElement.addEventListener('click', deletePost.bind(null, index), false);
  }
}

function deletePost(index) {
  const host = 'http://localhost:3000';
  fetch(`${host}/posts/${index}`, {
    method: 'delete',
  }).then((resp) => (resp.body))
    .then(response => {
    });
  location.reload();
}