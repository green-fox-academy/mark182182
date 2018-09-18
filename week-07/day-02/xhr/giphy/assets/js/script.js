window.onload = () => {
  const host = 'http://localhost:3000/api';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/giphy`, true);

  http.onload = () => {
    if (http.status === 200) {
      const context = JSON.parse(http.response);
      http.open('GET', `${context['url']}`, true);
      http.onload = () => {
        const readAPI = JSON.parse(http.response);
        for (let index = 0; index < 16; index++) {
          const newElement = document.createElement('img');
          newElement.setAttribute('src', readAPI.data[index].images.downsized_still.url);
          newElement.classList.add(index, 'rounded', 'float-left', 'img-thumbnail', 'mw-50', 'border-primary');
          newElement.style.height = '150px';
          newElement.style.margin = '5px';
          const getBody = document.querySelector('.img-container');
          const newDiv = getBody.appendChild(newElement);
          let isClicked = false;
          const moveIt = () => {
            if (isClicked === false) {
              document.images[index].setAttribute('src', readAPI.data[index].images.downsized.url);
              isClicked = true;
            }
            else {
              document.images[index].setAttribute('src', readAPI.data[index].images.downsized_still.url);
              isClicked = false;
            }
          };
          document.images[index].addEventListener('click', moveIt, false);
        }
      }
      http.send();
    }
  };

  http.send();
}