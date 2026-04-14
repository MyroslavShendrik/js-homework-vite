const inputNews = document.getElementById('count');
const button = document.getElementById('get-data');
const dataList = document.getElementById('data-list');

const BaseURL = 'https://swapi.dev/api';
const EndPoints = '/people';

button.addEventListener('click', getAllPosts);

// 🔹 Клік
function getAllPosts() {
  fetchAllPosts()
    .then(persons => renderPosts(persons))
    .catch(error => console.log(error));
}

// 🔹 Отримання людей (з query string)
function fetchAllPosts() {
  return fetch(createURL(BaseURL, EndPoints))
    .then(res => res.json())
    .then(data => data.results);
}

// 🔹 Тут головна зміна
function createURL(baseURL, endpoint) {
  const page = inputNews.value || 1; // беремо значення з input
  const url = `${baseURL}${endpoint}/?page=${page}`;

  console.log("url:", url);
  return url;
}

// 🔹 Отримання планети
function fetchPlanet(url) {
  return fetch(url)
    .then(res => res.json())
    .then(planet => planet.name);
}

// 🔹 Рендер
function renderPosts(persons) {
  dataList.innerHTML = '';

  const promises = persons.map(person => {
    return fetchPlanet(person.homeworld)
      .then(planetName => {
        return `
          <li>
            <h3>${person.name}</h3>
            <p>Gender: ${person.gender}</p>
            <p>Birth year: ${person.birth_year}</p>
            <p>Planet: ${planetName}</p>
          </li>
        `;
      });
  });

  Promise.all(promises)
    .then(items => {
      dataList.innerHTML = items.join('');
    })
    .catch(error => console.log(error));
}