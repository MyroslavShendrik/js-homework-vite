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

// 🔥 Головна логіка (з підстановкою планет)
async function fetchAllPosts() {
  const res = await fetch(createURL(BaseURL, EndPoints));
  const data = await res.json();


  const persons = data.results;

  // обмеження (наприклад скільки ввів користувач)
  const limit = parseInt(inputNews.value) || persons.length;
  const limitedPersons = persons.slice(0, limit);

  const updatedPersons = await Promise.all(
    limitedPersons.map(async (person) => {
      const planetRes = await fetch(person.homeworld);
      const planetData = await planetRes.json();

      return {
        ...person,
        homeworld: planetData.name // ✅ тепер тут назва планети
      };
    })
  );

  return updatedPersons;
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
      <p>Planet: ${homeworld}</p>
    </li>
  `).join('');

  dataList.innerHTML = markup;
}