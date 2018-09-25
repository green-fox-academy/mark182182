window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/modify`, true);

  http.onload = () => {
    if (http.status === 200) {
      const getSubmitButton = document.querySelector('.submit-button');
      let getTitle = document.querySelector('#post-title');
      let getUrl = document.querySelector('#post-url');
      getTitle.setAttribute("value", localStorage.getItem("currentTitle"));
      getUrl.setAttribute("value", localStorage.getItem("currentURL"));
      getSubmitButton.addEventListener('click', sendPost.bind(null, host, getTitle, getUrl), false);
    }
  }
  http.send();
  function sendPost(host, getTitle, getUrl) {
    const http = new XMLHttpRequest();
    const index = localStorage.getItem("currentElement");
    http.open('PUT', `${host}/posts/${index}`, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify({ title: getTitle['value'], url: getUrl['value'] }));
    window.location = `${host}`;
  };
}