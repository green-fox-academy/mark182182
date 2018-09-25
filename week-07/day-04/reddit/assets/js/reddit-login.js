window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/login`, true);

  http.onload = () => {
    if (http.status === 200) {
    }
  }
  http.send();
}