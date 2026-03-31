const postsContainer = document.getElementById('posts');

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
 return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json());

};
getAllPosts();