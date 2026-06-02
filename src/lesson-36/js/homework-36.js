const BaseURL = "https://jsonplaceholder.typicode.com/";
const EndPoint = "posts";


//? ================= INPUTS =================
const inputLimit = document.querySelector(".limit-input");
const inputPage = document.querySelector(".page-input");


//? ================= ELEMENTS =================
const fetchBtn = document.querySelector(".fetch-btn");
const postsList = document.querySelector(".posts-list");


//? ================= STATE =================
let currentPage = 1;


//? ================= LISTENER =================
fetchBtn.addEventListener("click", getAllPosts);


//! ================= MAIN FUNCTION =================
function getAllPosts() {
  const limit = Number(inputLimit.value) || 5;
  const page = Number(inputPage.value) || 1;

  if (limit < 1 || page < 1) {
    alert("Введіть коректні значення");
    return;
  }

  currentPage = page;

  fetchPosts(page, limit)
    .then(renderPosts)
    .catch((err) => {
      console.error(err);
      postsList.innerHTML = "<li>Помилка завантаження</li>";
    });
}

//! ================= FETCH =================
function fetchPosts(page, limit) {
  return fetch(
    `${BaseURL}${EndPoint}?_page=${page}&_limit=${limit}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Network error");
    }
    return res.json();
  });
}

//! ================= RENDER =================
function renderPosts(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    postsList.innerHTML = "<li>Немає постів</li>";
    return;
  }

  const markup = posts
    .map(
      (post) => `
        <li class="list-item">
          <h3>${post.title}</h3>
          <p>id: ${post.id}</p>
          <p>${post.body}</p>
        </li>
      `
    )
    .join("");

  postsList.innerHTML = markup;
}