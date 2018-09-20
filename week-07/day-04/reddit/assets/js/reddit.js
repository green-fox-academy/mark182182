window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/posts`, true);

  http.onload = () => {
    if (http.status === 200) {
      const context = JSON.parse(http.response);
      
    }
  }

  http.send();

}