window.onload = () => {
  if (localStorage.getItem('username') !== null) {
    const host = 'http://localhost:3000';
    const http = new XMLHttpRequest();
    http.open('GET', `${host}/comment`, true);

    http.onload = () => {
      if (http.status === 200) {
        const postId = localStorage.getItem('currentElement');
        const postTitle = localStorage.getItem('currentTitle');
        const postUrl = localStorage.getItem('currentURL');
        const postScore = localStorage.getItem('currentScore');
        const postTime = localStorage.getItem('currentTimestamp');
        const username = localStorage.getItem('username');
        const getSubmitButton = document.querySelector('#comment-button');
        const getPostsContainer = document.querySelector('.posts-container');
        let newDivElement = document.createElement('div');
        getPostsContainer.appendChild(newDivElement);
        newDivElement.classList.add(`post${postId}`, 'post');

        let newButtonHolder = document.createElement('div');
        newButtonHolder.classList.add('button-holder');
        newDivElement.appendChild(newButtonHolder);

        let upVoteButton = document.createElement('button');
        newButtonHolder.appendChild(upVoteButton);
        upVoteButton.classList.add('upvote-button');
        upVoteButton.addEventListener('click', upVote.bind(null, postId, host), false);

        let scoreInfo = document.createElement('p');
        newButtonHolder.appendChild(scoreInfo);
        scoreInfo.innerHTML = postScore;

        let downVoteButton = document.createElement('button');
        newButtonHolder.appendChild(downVoteButton);
        downVoteButton.classList.add('downvote-button');
        downVoteButton.addEventListener('click', downVote.bind(null, postId, host), false);

        let newPostsHolder = document.createElement('div');
        newPostsHolder.classList.add('posts-holder');
        newDivElement.appendChild(newPostsHolder);

        let newPost = document.createElement('a');
        newPost.classList.add(`post${postId}`);
        newPostsHolder.appendChild(newPost);
        newPost.innerHTML = postTitle;
        newPost.setAttribute('href', postUrl);

        let newInfo = document.createElement('div');
        newInfo.classList.add(`info`);
        newPostsHolder.appendChild(newInfo);

        getComments(host);

        if (((Date.now() - Date.parse(postTime)) / 1000) < 1) {
          newInfo.innerHTML = 'Post created by ' + username + ' ' + ' now.';
        }

        else if (((Date.now() - Date.parse(postTime)) / 1000) >= 1 && ((Date.now() - Date.parse(postTime)) / 1000) < 60) {
          newInfo.innerHTML = 'Post created by ' + username + ' ' + parseInt((Date.now() - Date.parse(postTime)) / 1000) + ' seconds ago.';
        }

        else if (((Date.now() - Date.parse(postTime)) / 60000) >= 1 && ((Date.now() - Date.parse(postTime)) / 60000) < 60) {
          newInfo.innerHTML = 'Post created by ' + username + ' ' + parseInt((Date.now() - Date.parse(postTime)) / 60000) + ' minutes ago.';
        }

        else if (((Date.now() - Date.parse(postTime)) / 3600000) >= 1 && ((Date.now() - Date.parse(postTime)) / 3600000) < 24) {
          newInfo.innerHTML = 'Post created by ' + username + ' ' + parseInt((Date.now() - Date.parse(postTime)) / 3600000) + ' hours ago.';
        }

        else if (((Date.now() - Date.parse(postTime)) / 86400000) >= 1 && ((Date.now() - Date.parse(postTime)) / 86400000) < 24) {
          newInfo.innerHTML = 'Post created by ' + username + ' ' + parseInt((Date.now() - Date.parse(postTime)) / 86400000) + ' days ago.';
        }

        getSubmitButton.addEventListener('click', sendComment.bind(null, host, postId, username), false);

      }
    }
    http.send();
    function upVote(postId, host) {
      fetch(`${host}/posts/${postId}/upvote`, {
        method: 'put',
      }).then((resp) => (resp.body))
        .then(response => {
        });
      const getCurrentScore = document.querySelector(`.button-holder p`);
      getCurrentScore.textContent++;
      const getUpvoteButton = document.querySelector(`.post${postId} .button-holder .upvote-button`);
      getUpvoteButton.style.backgroundImage = 'url(../assets/css/upvoted.png)';
    }

    function downVote(postId, host) {
      fetch(`${host}/posts/${postId}/downvote`, {
        method: 'put',
      }).then((resp) => (resp.body))
        .then(response => {
        });
      const getCurrentScore = document.querySelector(`.button-holder p`);
      getCurrentScore.textContent--;
      const getDownvoteButton = document.querySelector(`.post${postId} .button-holder .downvote-button`);
      getDownvoteButton.style.backgroundImage = 'url(../assets/css/downvoted.png)';
    }

    function getComments(host, username) {
      fetch(`${host}/comment/all`, {
        method: 'get',
      }).then((resp) => resp.json().then(resp => {
        for (let index = 0; index < resp.comments.length; index++) {
          const getPostCommentHolder = document.querySelector('.posts-comment-holder');
          const newCommentWrapper = document.querySelector('#comment-wrapper');
          const commentText = document.createElement('p');
          commentText.classList.add(`comment${index}`, 'comment');
          commentText.innerHTML = resp.comments[index].comment + ' by username ' + ' timestamp ago';
          getPostCommentHolder.appendChild(newCommentWrapper);
          newCommentWrapper.appendChild(commentText);
          const lineSeparator = document.createElement('hr');
          commentText.appendChild(lineSeparator);
        }
      }));
    }

    function sendComment() {

    }
  }
}