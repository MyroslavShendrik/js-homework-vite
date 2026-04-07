const inputNews = document.getElementById('count');
const button = document.getElementById('get-data');
const dataList = document.getElementById('data-list');

const BaseURL = 'https://swapi.dev/api';
const EndPoints = '/people';

button.addEventListener('click', getAllPosts);

function getAllPosts() {
  const nNews = parseInt(inputNews.value);

  const params = {
    q: 'bitcoin',
    pageSize: nNews,
    apiKey: '639ac27a9d1f4a569d7448e2fa14c42d'
  };

  fetchAllPosts()
    .then(persons => renderPosts(persons))
    // .then(persons => console.log(persons))
    .catch(error => console.log(error));
}

function fetchAllPosts(params) {
  return fetch(createURL(BaseURL, EndPoints, params))
    .then(response => response.json())
    .then(data => data.results);
}

function createURL(baseURL, endpoint, par) {
  // const searchParams = new URLSearchParams(par);
  // const url = `${baseURL}${endpoint}?${searchParams}`;
    const url = `${baseURL}${endpoint}`;
  console.log("url:", url);
  return url;
}

function renderPosts(persons) {
  dataList.innerHTML = '';

  const markup = persons.map(({name, gender, birth_year, homeworld}) =>`
    <li>
      <h3>${name}</h3>
      <p>${gender}</p>
      <p>${birth_year}</p>
      <p>${homeworld}</p>
    </li>
  `).join('');

  dataList.innerHTML = markup;
}