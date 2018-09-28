window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/create`, true);

  http.onload = () => {
    if (http.status === 200) {
      const getContentHolder = document.querySelector('.creation-content-holder ');
      const getLoginButton = document.querySelector('#login-button');
      let getUsername = document.querySelector('#username');
      let getPassword = document.querySelector('#password');
      getLoginButton.addEventListener('click', sendAccountDetails.bind(null, host, getUsername, getPassword, getContentHolder), false);
    }
  }
  http.send();
  function sendAccountDetails(host, getUsername, getPassword, getContentHolder) {
    const http = new XMLHttpRequest();
    http.open('POST', `${host}/create`, true);
    http.setRequestHeader("Content-Type", "application/json");
    if (getUsername['value'] === "" || getPassword['value'] === "") {
      alert('Please provide information!');
    }
    else {
      http.send(JSON.stringify({ owner: getUsername['value'], password: getPassword['value'] }));
      let makeText = document.createElement('p');
      getContentHolder.appendChild(makeText);
      makeText.style.color = 'white';
      makeText.innerHTML = 'Successful';
      window.location = `${host}`;
    }
  }
}