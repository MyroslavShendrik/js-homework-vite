const postsContainer = document.getElementById('data-list');
const buttonLoadPosts = document.getElementById('get-data');
const inputCount = document.getElementById('count');

buttonLoadPosts.addEventListener('click', getAllPosts);

const BaseURL = 'https://jsonplaceholder.typicode.com/';
const endPoint = 'posts';

function getAllPosts() {
  fetchAllPosts()
    .then(posts => renderPosts(posts))
    .catch(error => console.log(error));
}

function renderPosts(posts) {
  const markup = posts
    .map(post => {
      return `
        <li>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </li>
      `;
    })
    .join('');

  postsContainer.innerHTML = markup;
}

function fetchAllPosts() {
  return fetch(createSearchParams(BaseURL, endPoint, {
    _limit: inputCount.value,
    _sort: 'title',
  }))
    .then(response => response.json());
}

function createSearchParams(BaseURL, endPoint, params) {
  const searchParams = new URLSearchParams(params);
  return `${BaseURL}${endPoint}?${searchParams}`;
}