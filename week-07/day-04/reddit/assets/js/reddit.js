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
      newDivElement.classList.add(`post${index}`, 'post');

      let newButtonHolder = document.createElement('div');
      newButtonHolder.classList.add('button-holder');
      newDivElement.appendChild(newButtonHolder);

      let upVoteButton = document.createElement('button');
      newButtonHolder.appendChild(upVoteButton);
      upVoteButton.classList.add('upvote-button');
      upVoteButton.addEventListener('click', upVote.bind(null, index, host), false);

      let scoreInfo = document.createElement('div');
      newButtonHolder.appendChild(scoreInfo);
      scoreInfo.innerHTML = context[index].score;

      let downVoteButton = document.createElement('button');
      newButtonHolder.appendChild(downVoteButton);
      downVoteButton.classList.add('downvote-button');
      downVoteButton.addEventListener('click', downVote.bind(null, index, host), false);

      let newPostsHolder = document.createElement('div');
      newPostsHolder.classList.add('posts-holder');
      newDivElement.appendChild(newPostsHolder);

      let newPost = document.createElement('a');
      newPost.classList.add(`post${index}`);
      newPostsHolder.appendChild(newPost);
      newPost.innerHTML = context[index].title;
      newPost.setAttribute('href', context[index].url);

      let newInfo = document.createElement('div');
      newInfo.classList.add(`info`);
      newPostsHolder.appendChild(newInfo);
      newInfo.innerHTML = 'Post created by ' + context[index].owner + ' at ' + context[index].timestamp;

      let postActionHolder = document.createElement('div');
      postActionHolder.classList.add('post-action-holder');
      newPostsHolder.appendChild(postActionHolder);

      let modifyElement = document.createElement('a');
      postActionHolder.appendChild(modifyElement);
      modifyElement.innerHTML = 'Modify';
      modifyElement.classList.add('modify-post');
      modifyElement.addEventListener('click', () => {
        localStorage.setItem("currentElement", index + 1);
        localStorage.setItem("currentTitle", context[index].title);
        localStorage.setItem("currentURL", context[index].url);
        window.location = `${host}/modify`
      }, false);

      let deleteElement = document.createElement('a');
      postActionHolder.appendChild(deleteElement);
      deleteElement.innerHTML = 'Remove';
      deleteElement.classList.add('delete-post');
      deleteElement.addEventListener('click', deletePost.bind(null, index, host, getPostsContainer), false);
    }
    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', () => { window.location = `${host}/submit` }, false);

    let getLoginContainer = document.querySelector("#login-container");

    if (localStorage.getItem('username') === null) {
      loginText = document.createElement('p');
      loginText.textContent = 'Please log in!';
      document.querySelector('#navbar').appendChild(loginText);
    }
    else {
      loginText = document.createElement('p');
      loginText.textContent = `Logged in as ${localStorage.getItem('username')}`;
      getLoginContainer.appendChild(loginText);
    }

    const loginButton = document.querySelector('#login-button');
    loginButton.addEventListener('click', () => { window.location = `${host}/login` }, false);

    const createButton = document.querySelector('#create-button');
    createButton.addEventListener('click', () => { window.location = `${host}/login` }, false);
  }

  function deletePost(index, host, getPostsContainer) {
    fetch(`${host}/posts/${index + 1}`, {
      method: 'delete',
    }).then((resp) => (resp.body))
      .then(response => {
      });
    const deleteThisPost = document.querySelector(`.post${index}`);
    deleteThisPost.classList.add('animated', 'fadeOutLeft');
    setTimeout(() => {
      getPostsContainer.removeChild(deleteThisPost);
    }, 1000);
  }

  function upVote(index, host) {
    fetch(`${host}/posts/${index + 1}/upvote`, {
      method: 'put',
    }).then((resp) => (resp.body))
      .then(response => {
      });
    const getCurrentScore = document.querySelectorAll(`.button-holder div`);
    getCurrentScore[index].textContent++;
  }

  function downVote(index, host) {
    fetch(`${host}/posts/${index + 1}/downvote`, {
      method: 'put',
    }).then((resp) => (resp.body))
      .then(response => {
      });
    const getCurrentScore = document.querySelectorAll(`.button-holder div`);
    getCurrentScore[index].textContent--;
  }
}