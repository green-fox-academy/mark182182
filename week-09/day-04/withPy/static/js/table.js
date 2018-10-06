'use strict';

window.onload = () => {

  const host = 'http://localhost:5000';

  fetch(`${host}/attractions`, {
    method: 'get'
  }).then((response) => {
    response.json().then((resp) => {
      for (let index = 0; index < resp.length; index++) {
    console.log(resp[index]);
        const getRow = document.createElement(`tr`),
          getTableBody = document.querySelector('#table-body'),
          getAttractionName = document.createElement('td'),
          getCity = document.createElement('td'),
          getPrice = document.createElement('td'),
          getLongitude = document.createElement('td'),
          getLatitude = document.createElement('td'),
          getCategory = document.createElement('td'),
          getDuration = document.createElement('td'),
          getRecommendedAge = document.createElement('td'),
          makeEdit = document.createElement('button'),
          id = resp[index][0],
          attr_name = resp[index][1],
          city = resp[index][2],
          category = resp[index][3],
          price = resp[index][4],
          longitude = resp[index][5],
          latitude = resp[index][6],
          recommended_age = resp[index][7],
          duration = resp[index][8];

        getAttractionName.innerHTML = attr_name;
        getCity.innerHTML = city;
        getPrice.innerHTML = price;
        getLongitude.innerHTML = longitude;
        getLatitude.innerHTML = latitude;
        getCategory.innerHTML = category;
        getDuration.innerHTML = duration;
        getRecommendedAge.innerHTML = recommended_age;

        makeEdit.classList.add('edit');
        makeEdit.setAttribute('id', `edit${id}`);
        makeEdit.innerHTML = 'Edit';

        getTableBody.appendChild(getRow);
        getRow.appendChild(getAttractionName);
        getRow.appendChild(getCity);
        getRow.appendChild(getPrice);
        getRow.appendChild(getLongitude);
        getRow.appendChild(getLatitude);
        getRow.appendChild(getCategory);
        getRow.appendChild(getDuration);
        getRow.appendChild(getRecommendedAge);
        getRow.appendChild(makeEdit);


        const getEditButtons = document.querySelector(`#edit${id}`);

        getEditButtons.addEventListener('click', () => {
          const { name, city, price, longitude, latitude, category, duration, recommendedage, submit } = getForm;

          name.value = resp[index].attr_name;
          city.value = resp[index].city;
          price.value = resp[index].price;
          longitude.value = resp[index].longitude;
          latitude.value = resp[index].latitude;
          category.value = resp[index].category;
          duration.value = resp[index].duration;
          recommendedage.value = resp[index].recommended_age;
          localStorage.setItem('id', id);
        }, false);
      }
    });

    localStorage.setItem('id', undefined);
    const getForm = document.querySelector('#add-attraction'),
      { name, city, price, longitude, latitude, category, duration, recommendedage, submit } = getForm;

    submit.addEventListener('click', (event) => {
      event.preventDefault();

      fetch(`${host}/add`, {
        method: 'post',
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ att_id: localStorage.getItem('id'), name: name.value, city: city.value, price: price.value, longitude: longitude.value, latitude: latitude.value, category: category.value, duration: duration.value, recommendedAge: recommendedage.value })
      });
      location.reload();
    }, false);
  });
}