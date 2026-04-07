const inputNews = document.getElementById('count');
const button = document.getElementById('get-data');
const dataList = document.getElementById('data-list');

const BaseURL = 'https://newsapi.org';
const EndPoints = '/v2/everything';

button.addEventListener('click', getAllPosts);

function getAllPosts() {
  const nNews = parseInt(inputNews.value);

  const params = {
    q: 'bitcoin',
    pageSize: nNews,
    apiKey: '639ac27a9d1f4a569d7448e2fa14c42d'
  };

  fetchAllPosts(params)
    .then(posts => renderPosts(posts))
    .catch(error => console.log(error));
}

function fetchAllPosts(params) {
  return fetch(createSearchParams(BaseURL, EndPoints, params))
    .then(response => response.json())
    .then(data => data.articles);
}

function createSearchParams(baseURL, endpoint, par) {
  const searchParams = new URLSearchParams(par);
  const url = `${baseURL}${endpoint}?${searchParams}`;
  console.log("url:", url);
  return url;
}

function renderPosts(posts) {
  dataList.innerHTML = '';

  const markup = posts.map(post => `
    <li>
      <h3>${post.title}</h3>
      <p>${post.description || 'Немає опису'}</p>
    </li>
  `).join('');

  dataList.innerHTML = markup;
}