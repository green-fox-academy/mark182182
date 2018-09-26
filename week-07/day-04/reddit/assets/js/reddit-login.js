window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/login`, true);

  http.onload = () => {
    if (http.status === 200) {
      const getLoginButton = document.querySelector('#login-button');
      getLoginButton.addEventListener('click', sendAccountDetails, false);
    }
  }
  http.send();
  function sendAccountDetails() {
    console.log('here');
    http.open('POST', `${host}/login`, true);
    http.onload = () => {
      console.log('in');
      const context = JSON.parse(http.response);
      console.log('now here');
      console.log(context);
      http.send();
    }
  }
}