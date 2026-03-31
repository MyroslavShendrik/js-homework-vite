const postsContainer = document.getElementById('posts');
const buttonLoadPosts = document.getElementById('loadPosts')
buttonLoadPosts.addEventListener('click', getAllPosts);
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(posts => {
//     const markup = posts
//       .map(post => {
//         return `
//           <div class="post-card">
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//           </div>
//         `;
//       })
//       .join('');

//     postsContainer.innerHTML = markup;
//   })
//   .catch(error => {
//     console.log('Помилка:', error);
//   });

function getAllPosts(){
fetchAllPosts()
.then(posts => renderPosts(posts))
.catch(error => console.log(error));
};
function renderPosts(posts){
   const markup = posts
       .map(post => {
         return `
           <div class="post-card">
             <h2>${post.title}</h2>
             <p>${post.body}</p>
           </div>
         `;
       })
       .join('');

    postsContainer.innerHTML = markup;
};
function fetchAllPosts(){
//  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=9&_sort=title')
 return fetch(createSearchParams(BaseURL,endPoint,params))
   .then(response => response.json());

};
// getAllPosts();
    const BaseURL = "https://jsonplaceholder.typicode.com/";
      const endPoint = "posts";
  const params = {
            _limit: 9,
            _sort: "title",
        };
function createSearchParams( BaseURL, endPoint, params) {
    console.warn("Клас URLSearchParams:");
    // const BaseURL = "https://jsonplaceholder.typicode.com/";
    // const endPoint = "posts"
    const searchParams = new URLSearchParams(params);
    const url = `${BaseURL}${endPoint}?${searchParams}`;
    console.log("url:", url); //! "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
    console.log("--------------------------------------------------------------------------------------------------------------------------");
    return url;
};