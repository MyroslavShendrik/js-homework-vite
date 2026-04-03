const postsContainer = document.getElementById('posts');
const buttonLoadPosts = document.getElementById('loadPosts');

const BaseURL = 'https://jsonplaceholder.typicode.com/';
const endPoint = 'posts'
const params = {
  _limit: 9,
  _sort: 'title'
}

buttonLoadPosts.addEventListener('click', getAllPosts);


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
  return fetch(createSearchParams(BaseURL, endPoint, params))
    .then(response => response.json());
}

function createSearchParams(baseURL, endpoint, par) {
  const searchParams = new URLSearchParams(par);
  const url = `${baseURL}${endpoint}?${searchParams}`; 
  console.log ("url:",url);
  return url;
}