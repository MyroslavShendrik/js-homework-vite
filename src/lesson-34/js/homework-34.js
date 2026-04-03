const inputNews = document.getElementById('count');
console.log("inputNews:",inputNews);
const button = document.getElementById('get-data');
const dataList = document.getElementById('data-list');


const BaseURL = 'https://newsapi.org';
const EndPoints = '/v2/everything';
// const ApiKEY = '639ac27a9d1f4a569d7448e2fa14c42d';
const nNews = parseInt(inputNews.value);
console.log("nNews:",nNews);
const params = {
   q: 'bitcoin',
   pageSize: nNews, 
   apiKey: '639ac27a9d1f4a569d7448e2fa14c42d'
};
// const url = `${BaseURL}${EndPoints}?q=${params}&apiKey=${ApiKEY}`;
// console.log("url:",url);

button.addEventListener('click', getAllPosts);

function getAllPosts() {
  fetchAllPosts()
    .then(data => console.log("data:",data))
    // .then(posts => renderPosts(posts))
    .catch(error => console.log(error));
};


function fetchAllPosts() {
  return fetch(createSearchParams(BaseURL,EndPoints,params))
    .then(response => response.json())
    .then(data => data.articles);
}

function createSearchParams(baseURL, endpoint, par) {
  const searchParams = new URLSearchParams(par);
  const url = `${baseURL}${endpoint}?${searchParams}`; 
  console.log ("url:",url);
  return url;
}