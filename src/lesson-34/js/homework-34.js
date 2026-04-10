
const inputNews = document.getElementById('count');
const button = document.getElementById('get-data');
const dataList = document.getElementById('data-list');

const BaseURL = 'https://swapi.dev/api';
const EndPoints = '/people';

button.addEventListener('click', getAllPosts);

// function getAllPosts() {

//   fetchAllPosts()
//     .then(persons => renderPosts(persons))
//     .catch(error => console.log(error));
// }
function getAllPosts() {
fetchPlanet()
.then(planet => console.log("planet:", planet))
.catch(error => console.log(error))
}
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
// function renderPosts(persons) {
//   dataList.innerHTML = '';

//   const markup = persons.map(({ name, gender, birth_year, homeworld }) => `
//     <li>
//       <h3>${name}</h3>
//       <p>Gender: ${gender}</p>
//       <p>Birth year: ${birth_year}</p>
//       <p>Planet: ${homeworld}</p>
//     </li>
//   `).join('');

//   dataList.innerHTML = markup;

// }
function renderPosts(planet) {
  dataList.innerHTML = '';
 console.log("planet:",planet);

  dataList.innerHTML = markup;

}
function fetchPlanet (url){
  fetch('https://swapi.dev/api/planets/1/')
 .then(res => console.log("res.json:", res.json))
 .then(planet=> console.log("planet:",planet));
}