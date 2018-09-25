window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/submit`, true);

  http.onload = () => {
    if (http.status === 200) {
      const getSubmitButton = document.querySelector('#submit-button');
      getSubmitButton.addEventListener('click', sendPost.bind(null, host), false);
    }
  }
  http.send();
  function sendPost(host) {
    const http = new XMLHttpRequest();
    http.open('POST', `${host}/posts`, true);
    http.setRequestHeader("Content-Type", "application/json");
    const getTitle = document.querySelector('#post-title')['value'];
    const getUrl = document.querySelector('#post-url')['value'];
    if (getTitle === "") {
      alert('Please provide a title!');
    }
    else {
      http.send(JSON.stringify({ title: getTitle, url: getUrl }));
      window.location = `${host}`;
    }
  };
}