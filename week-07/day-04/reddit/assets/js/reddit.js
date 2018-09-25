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

  function getPosts(context, host) {
    const getPostsContainer = document.querySelector('.posts-container');
    for (let index = 0; index < context.length; index++) {
      let newDivElement = document.createElement('div');
      getPostsContainer.appendChild(newDivElement);

      let upVoteButton = document.createElement('button');
      newDivElement.appendChild(upVoteButton);
      upVoteButton.innerHTML = 'Upvote';
      upVoteButton.addEventListener('click', upVote.bind(null, index, host), false);

      let scoreInfo = document.createElement('div');
      newDivElement.appendChild(scoreInfo);
      scoreInfo.innerHTML = context[index].score;

      let downVoteButton = document.createElement('button');
      newDivElement.appendChild(downVoteButton);
      downVoteButton.innerHTML = 'Downvote';
      downVoteButton.addEventListener('click', downVote.bind(null, index, host), false);

      let newElement = document.createElement('a');
      newElement.classList.add(`post${index}`);
      newDivElement.classList.add('bg-white', 'text-dark', 'shadow', 'd-block', 'border');
      newDivElement.appendChild(newElement);
      newElement.innerHTML = context[index].title;
      newElement.classList.add('d-inline');
      newElement.setAttribute('href', context[index].url);

      let newInfo = document.createElement('div');
      newInfo.classList.add(`info`);
      newDivElement.appendChild(newInfo);
      newInfo.innerHTML = 'Post created by ' + context[index].owner + ' at ' + context[index].timestamp;
      newInfo.classList.add('d-inline');

      let modifyElement = document.createElement('a');
      newDivElement.appendChild(modifyElement);
      modifyElement.innerHTML = 'Modify';
      modifyElement.classList.add('d-block');
      modifyElement.addEventListener('click', () => {
        localStorage.setItem("currentElement", index + 1);
        localStorage.setItem("currentTitle", context[index].title);
        localStorage.setItem("currentURL", context[index].url);
        window.location = `${host}/modify`
      }, false);

      let deleteElement = document.createElement('a');
      newDivElement.appendChild(deleteElement);
      deleteElement.innerHTML = 'Remove';
      deleteElement.classList.add('d-inline');
      deleteElement.addEventListener('click', deletePost.bind(null, index, host), false);
    }
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', () => { window.location = `${host}/submit` }, false);
  }

  function deletePost(index, host) {
    fetch(`${host}/posts/${index + 1}`, {
      method: 'delete',
    }).then((resp) => (resp.body))
      .then(response => {
      });
    location.reload();
  }

  function upVote(index, host) {
    fetch(`${host}/posts/${index + 1}/upvote`, {
      method: 'put',
    }).then((resp) => (resp.body))
      .then(response => {
      });
    location.reload();
  }

  function downVote(index, host) {
    fetch(`${host}/posts/${index + 1}/downvote`, {
      method: 'put',
    }).then((resp) => (resp.body))
      .then(response => {
      });
    location.reload();
  }
}