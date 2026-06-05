const BaseURL = "https://jsonplaceholder.typicode.com/";
const EndPoint = "posts";

//? ================= INPUTS =================
const inputLimit = document.querySelector(".limit-input");
const inputPage = document.querySelector(".page-input");

//? ================= ELEMENTS =================
const fetchBtn = document.querySelector(".fetch-btn");
const postsList = document.querySelector(".posts-list");

const totalPostsEl = document.querySelector(".total-posts");
const currentPageEl = document.querySelector(".current-page");
const totalPagesEl = document.querySelector(".total-pages");

//? ================= STATE =================
let currentPage = 1;
let allPosts = [];

//? ================= LISTENER =================
fetchBtn.addEventListener("click", getAllPosts);

//! ================= INIT =================
getCollectionInfo();

//! ================= MAIN FUNCTION =================
function getAllPosts() {
  const limit = Number(inputLimit.value) || 5;
  const page = Number(inputPage.value) || 1;

  if (limit < 1 || page < 1) {
    alert("Введіть коректні значення");
    return;
  }

  currentPage = page;

  updateInfo();

  fetchPosts(page, limit)
    .then(renderPosts)
    .catch((err) => {
      console.error(err);
      postsList.innerHTML = "<li>Помилка завантаження</li>";
    });
}

//! ================= FETCH POSTS =================
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

//! ================= GET ALL POSTS =================
async function getCollectionInfo() {
  try {
    const response = await fetch(`${BaseURL}${EndPoint}`);

    if (!response.ok) {
      throw new Error("Network error");
    }

    allPosts = await response.json();

    updateInfo();
  } catch (error) {
    console.error(error);
  }
}

//! ================= INFO =================
function updateInfo() {
  const limit = Number(inputLimit.value) || 5;

  const totalPosts = allPosts.length;

  const totalPages = Math.ceil(totalPosts / limit);

  totalPostsEl.textContent = totalPosts;
  currentPageEl.textContent = currentPage;
  totalPagesEl.textContent = totalPages;
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