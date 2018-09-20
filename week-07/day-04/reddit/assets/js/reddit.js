window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/posts`, true);

  http.onload = () => {
    if (http.status === 200) {
      const context = JSON.parse(http.response);
      getPosts(context);
    }
  }

  http.send();

}

function getPosts(context) {
  const getPostsContainer = document.querySelector('.posts-container');
  for (let index = 0; index < context.length; index++) {
    let newElement = document.createElement('a');
    newElement.classList.add(`post${index}`);
    getPostsContainer.appendChild(newElement);
    newElement.innerHTML = context[index].title + ' ' + context[index].vote;
    newElement.classList.add('bg-white', 'text-dark', 'shadow', 'd-block', 'border');
    newElement.setAttribute('href', context[index].url);
  }
}