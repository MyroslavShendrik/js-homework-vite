
const inputNews = document.getElementById('count');
const button = document.getElementById('get-data');
const dataList = document.getElementById('data-list');

const BaseURL = 'https://swapi.dev/api';
const EndPoints = '/people';

button.addEventListener('click', getAllPosts);

function getAllPosts() {

  fetchAllPosts()
    .then(persons => renderPosts(persons))
    .catch(error => console.log(error));
}
// function getAllPosts() {
// fetchPlanet()
// .then(planet => console.log("planet:", planet))
// .catch(error => console.log(error))
// }
function fetchAllPosts (){
  return fetch(createURL(BaseURL, EndPoints))
  .then(res => res.json())
  .then(data => data.results)


}

function createURL(baseURL, endpoint) {
  const url = `${baseURL}${endpoint}`;
  console.log("url:", url);
  return url;
}

// 🔽 Відображення
function renderPosts(persons) {
  dataList.innerHTML = '';

  const markup = persons.map(({ name, gender, birth_year, homeworld }) => `
    <li>
      <h3>${name}</h3>
      <p>Gender: ${gender}</p>
      <p>Birth year: ${birth_year}</p>
      <p>Planet: ${fetchPlanet(homeworld)}</p>
    </li>
  `).join('');

  dataList.innerHTML = markup;

}

function fetchPlanet (url){
 return fetch(url)
 .then(res => res.json())
 .then(planet=> planet.name);
}